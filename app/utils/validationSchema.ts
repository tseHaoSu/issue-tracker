import { z } from "zod";

// Common field definitions to avoid repetition
const titleField = z.string().min(1, "Title is required").max(255);
const descriptionField = z
  .string()
  .min(1, "Description is required")
  .max(65535);

// Schema for creating new issues
export const issueSchema = z.object({
  title: titleField,
  description: descriptionField,
});

// Schema for updating existing issues
export const patchIssueSchema = z.object({
  title: titleField.optional(),
  description: descriptionField.optional(),
  assignedToUserId: z.string().max(255).nullable().optional(),
});
