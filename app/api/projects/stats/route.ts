import { NextResponse } from "next/server";
import { getAllProjectStats } from "@/lib/database";

export async function GET() {
  try {
    const stats = await getAllProjectStats();

    const statsMap = stats.reduce((acc, stat) => {
      acc[stat.project_slug] = {
        views: stat.views_count,
        hearts: stat.hearts_count,
        lastUpdated: stat.updated_at,
      };
      return acc;
    }, {} as Record<string, { views: number; hearts: number; lastUpdated: Date }>);

    return NextResponse.json({
      success: true,
      stats: statsMap,
    });
  } catch (error) {
    console.error("Error fetching stats:", error);
    return NextResponse.json(
      { error: "Failed to fetch statistics" },
      { status: 500 }
    );
  }
}

export const revalidate = 30;
