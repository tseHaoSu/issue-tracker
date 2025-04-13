import { patchIssueSchema } from "@/app/utils/validationSchema";
import { prisma } from "@/prisma/client";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { authOptions } from "../../auth/[...nextauth]/options";

export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const session = await getServerSession(authOptions);
  if (!session) {
    return NextResponse.json({}, { status: 401 });
  }
  try {
    const { id } = await params;
    // Check if issue exists first
    const issue = await prisma.issue.findUnique({
      where: {
        id: parseInt(id),
      },
    });

    if (!issue) {
      return NextResponse.json({ message: "Issue not found" }, { status: 404 });
    }
    // Parse request body directly without the try/catch
    const body = await request.json();
    const validation = patchIssueSchema.safeParse(body);

    // Validate body
    if (!validation.success) {
      return NextResponse.json(validation.error.format(), {
        status: 400,
      });
    }

    const { assignedToUserId, title, description } = body;

    // Validate user if assignedToUserId is provided
    if (assignedToUserId) {
      const user = await prisma.user.findUnique({
        where: {
          id: assignedToUserId,
        },
      });

      if (!user) {
        return NextResponse.json(
          { message: "User not found" },
          { status: 400 }
        );
      }
    }

    // Update issue
    const updatedIssue = await prisma.issue.update({
      where: {
        id: parseInt(id),
      },
      data: {
        title,
        description,
        assignedToUserId,
      },
    });

    return NextResponse.json(updatedIssue);
  } catch (error) {
    console.error("Failed to update issue:", error);
    return NextResponse.json(
      { message: "Failed to update issue" },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    // Check if issue exists
    const issue = await prisma.issue.findUnique({
      where: {
        id: parseInt(id),
      },
    });

    if (!issue) {
      return NextResponse.json({ message: "Issue not found" }, { status: 404 });
    }

    // Delete issue
    await prisma.issue.delete({
      where: {
        id: parseInt(id),
      },
    });

    return NextResponse.json(
      { message: "Issue deleted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Failed to delete issue:", error);
    return NextResponse.json(
      { message: "Failed to delete issue" },
      { status: 500 }
    );
  }
}
