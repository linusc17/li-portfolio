import { NextRequest, NextResponse } from "next/server";
import { toggleHeart } from "@/lib/database";
import { projects } from "@/lib/projects";

export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params;

    const project = projects.find((p) => p.slug === slug);
    if (!project) {
      return NextResponse.json({ error: "Project not found" }, { status: 404 });
    }

    const forwarded = request.headers.get("x-forwarded-for");
    const ip = forwarded
      ? forwarded.split(",")[0]
      : request.headers.get("x-real-ip") || "127.0.0.1";

    const userAgent = request.headers.get("user-agent") || "";
    const userFingerprint = Buffer.from(userAgent).toString("base64");

    const result = await toggleHeart(slug, project.name, ip, userFingerprint);

    if (!result.success) {
      return NextResponse.json(
        { error: result.message, hearted: result.hearted },
        { status: 429 }
      );
    }

    return NextResponse.json({
      success: true,
      message: result.message,
      hearted: result.hearted,
    });
  } catch (error) {
    console.error("Error in heart endpoint:", error);
    return NextResponse.json(
      { error: "Internal server error", hearted: false },
      { status: 500 }
    );
  }
}
