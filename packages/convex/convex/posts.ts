import { query, mutation } from "./_generated/server";
import { v } from "convex/values";

/**
 * Posts API
 *
 * Core feature: Teachers create posts with photos/videos for parents.
 * AI-friendly: Simple CRUD with permission checks.
 */

export const getByClassroom = query({
  args: { classroomId: v.id("classrooms") },
  handler: async (ctx, args) => {
    // TODO: Add permission check (MVC slice: add auth)
    const posts = await ctx.db
      .query("posts")
      .withIndex("by_classroom", (q) => q.eq("classroomId", args.classroomId))
      .filter((q) => q.eq(q.field("status"), "published"))
      .order("desc")
      .collect();

    return posts;
  },
});

export const create = mutation({
  args: {
    classroomId: v.id("classrooms"),
    content: v.string(),
    mediaUrls: v.array(v.string()),
    taggedChildren: v.array(v.id("children")),
  },
  handler: async (ctx, args) => {
    // TODO: Get authenticated user ID (MVC slice: add Clerk auth)
    // const identity = await ctx.auth.getUserIdentity();
    // if (!identity) throw new Error("Unauthorized");

    const postId = await ctx.db.insert("posts", {
      ...args,
      authorId: "temp_user", // Replace with actual user ID
      status: "draft",
      createdAt: Date.now(),
      updatedAt: Date.now(),
    });

    return postId;
  },
});
