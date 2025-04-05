import { IssueSchema } from "@/app/validationSchema";
import { prisma } from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const body = await request.json();
  const validation = IssueSchema.safeParse(body);

  //validate body
  if (!validation.success) {
    return NextResponse.json(validation.error.format(), {
      status: 400,
    });
  }
  const resolvedParams = await params;
  //find the issue by id
  const issue = await prisma.issue.findUnique({
    where: {
      id: parseInt(resolvedParams.id),
    },
  });
  if (!issue) {
    return NextResponse.json({ message: "Issue not found" }, { status: 404 });
  }
  //update issue
  const updatedIssue = await prisma.issue.update({
    where: {
      id: parseInt(resolvedParams.id),
    },
    data: {
      title: body.title,
      description: body.description,
    },
  });

  return NextResponse.json(updatedIssue);
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    // No need to parse request body for DELETE
    const issue = await prisma.issue.findUnique({
      where: {
        id: parseInt(params.id),
      },
    });
    if (!issue) {
      return NextResponse.json({ message: "Issue not found" }, { status: 404 });
    }
    await prisma.issue.delete({
      where: {
        id: parseInt(params.id),
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
