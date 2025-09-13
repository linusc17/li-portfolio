import { neon } from "@neondatabase/serverless";

if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL is not set");
}

export const sql = neon(process.env.DATABASE_URL);

export interface ProjectStats {
  project_slug: string;
  project_name: string;
  views_count: number;
  hearts_count: number;
  created_at: Date;
  updated_at: Date;
}

export interface UserInteraction {
  id: number;
  project_slug: string;
  user_ip: string;
  interaction_type: "view" | "heart";
  user_fingerprint?: string;
  created_at: Date;
}

export async function getAllProjectStats(): Promise<ProjectStats[]> {
  try {
    const result = await sql`
      SELECT project_slug, project_name, views_count, hearts_count, created_at, updated_at
      FROM project_interactions
      ORDER BY project_slug
    `;
    return result as ProjectStats[];
  } catch (error) {
    console.error("Error fetching project stats:", error);
    return [];
  }
}

export async function getProjectStats(
  slug: string
): Promise<ProjectStats | null> {
  try {
    const result = await sql`
      SELECT project_slug, project_name, views_count, hearts_count, created_at, updated_at
      FROM project_interactions
      WHERE project_slug = ${slug}
    `;
    return result.length > 0 ? (result[0] as ProjectStats) : null;
  } catch (error) {
    console.error("Error fetching project stats:", error);
    return null;
  }
}

export async function upsertProject(slug: string, name: string): Promise<void> {
  try {
    await sql`
      INSERT INTO project_interactions (project_slug, project_name, views_count, hearts_count)
      VALUES (${slug}, ${name}, 0, 0)
      ON CONFLICT (project_slug)
      DO UPDATE SET project_name = EXCLUDED.project_name, updated_at = NOW()
    `;
  } catch (error) {
    console.error("Error upserting project:", error);
    throw error;
  }
}

export async function incrementViews(
  slug: string,
  projectName: string,
  userIP: string,
  userFingerprint?: string
): Promise<{ success: boolean; message: string }> {
  try {
    const recentView = await sql`
      SELECT id FROM user_interactions
      WHERE project_slug = ${slug}
        AND user_ip = ${userIP}
        AND interaction_type = 'view'
        AND created_at > NOW() - INTERVAL '30 seconds'
      LIMIT 1
    `;

    if (recentView.length > 0) {
      return { success: false, message: "Too many requests. Please wait." };
    }

    await upsertProject(slug, projectName);

    await sql`
      INSERT INTO user_interactions (project_slug, user_ip, interaction_type, user_fingerprint)
      VALUES (${slug}, ${userIP}, 'view', ${userFingerprint})
    `;

    await sql`
      UPDATE project_interactions
      SET views_count = views_count + 1, updated_at = NOW()
      WHERE project_slug = ${slug}
    `;

    return { success: true, message: "View recorded" };
  } catch (error) {
    console.error("Error incrementing views:", error);
    return { success: false, message: "Error recording view" };
  }
}

export async function toggleHeart(
  slug: string,
  projectName: string,
  userIP: string,
  userFingerprint?: string
): Promise<{ success: boolean; message: string; hearted: boolean }> {
  try {
    const recentHeart = await sql`
      SELECT id FROM user_interactions
      WHERE project_slug = ${slug}
        AND user_ip = ${userIP}
        AND interaction_type = 'heart'
        AND created_at > NOW() - INTERVAL '1 minute'
      LIMIT 1
    `;

    if (recentHeart.length > 0) {
      return {
        success: false,
        message: "Please wait before hearting again.",
        hearted: false,
      };
    }

    await upsertProject(slug, projectName);

    await sql`
      INSERT INTO user_interactions (project_slug, user_ip, interaction_type, user_fingerprint)
      VALUES (${slug}, ${userIP}, 'heart', ${userFingerprint})
    `;

    await sql`
      UPDATE project_interactions
      SET hearts_count = hearts_count + 1, updated_at = NOW()
      WHERE project_slug = ${slug}
    `;

    return { success: true, message: "Heart added!", hearted: true };
  } catch (error) {
    console.error("Error toggling heart:", error);
    return {
      success: false,
      message: "Error processing heart",
      hearted: false,
    };
  }
}
