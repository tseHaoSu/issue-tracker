import { IssueSchema } from "@/app/utils/validationSchema";
import { prisma } from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const body = await request.json();
    const validation = IssueSchema.safeParse(body);
    //validate body
    if (!validation.success) {
      return NextResponse.json(validation.error.format(), {
        status: 400,
      });
    }
    const { id } = await params;
    const issue = await prisma.issue.findUnique({
      where: {
        id: parseInt(id),
      },
    });
    if (!issue) {
      return NextResponse.json({ message: "Issue not found" }, { status: 404 });
    }
    //update issue
    const updatedIssue = await prisma.issue.update({
      where: {
        id: parseInt(id),
      },
      data: {
        title: body.title,
        description: body.description,
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

// No need to parse request body for DELETE
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const issue = await prisma.issue.findUnique({
      where: {
        id: parseInt(id),
      },
    });
    if (!issue) {
      return NextResponse.json({ message: "Issue not found" }, { status: 404 });
    }
    await prisma.issue.delete({
      where: {
        id: parseInt(id),
      },
    });
    return NextResponse.json({}, { status: 200 });
  } catch (error) {
    console.error("Failed to delete issue:", error);
    return NextResponse.json(
      { message: "Failed to delete issue" },
      { status: 500 }
    );
  }
}
