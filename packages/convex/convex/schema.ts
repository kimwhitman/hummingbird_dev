import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

/**
 * Hummingbird Database Schema
 *
 * This schema defines all tables for the early childhood education platform.
 * Optimized for AI agent comprehension and MVC protocol slices.
 */

export default defineSchema({
  // ============================================
  // ORGANIZATIONS & STRUCTURE
  // ============================================

  organizations: defineTable({
    name: v.string(),
    type: v.union(v.literal("school"), v.literal("multi_campus")),
    ownerId: v.string(), // Clerk user ID
    createdAt: v.number(),
    updatedAt: v.number(),
  }).index("by_owner", ["ownerId"]),

  campuses: defineTable({
    organizationId: v.id("organizations"),
    name: v.string(),
    address: v.optional(v.string()),
    directorId: v.optional(v.string()), // Clerk user ID
    createdAt: v.number(),
    updatedAt: v.number(),
  }).index("by_organization", ["organizationId"]),

  classrooms: defineTable({
    campusId: v.id("campuses"),
    name: v.string(),
    ageGroup: v.string(), // "infant", "toddler", "preschool", "kindergarten"
    leadTeacherId: v.optional(v.string()), // Clerk user ID
    capacity: v.number(),
    createdAt: v.number(),
    updatedAt: v.number(),
  }).index("by_campus", ["campusId"]),

  // ============================================
  // USERS & ASSIGNMENTS (35+ Roles)
  // ============================================

  assignments: defineTable({
    userId: v.string(), // Clerk user ID
    organizationId: v.id("organizations"),
    role: v.string(), // "lead_teacher", "primary_guardian", etc.
    scopeType: v.string(), // "organization", "campus", "classroom", "child"
    scopeId: v.string(), // ID of the scoped resource
    effectiveStart: v.optional(v.number()), // For time-bound roles (substitutes)
    effectiveEnd: v.optional(v.number()),
    createdAt: v.number(),
    updatedAt: v.number(),
    createdBy: v.string(), // Who assigned this role
  })
    .index("by_user", ["userId"])
    .index("by_organization", ["organizationId"])
    .index("by_scope", ["scopeType", "scopeId"]),

  // ============================================
  // CHILDREN & FAMILIES
  // ============================================

  children: defineTable({
    firstName: v.string(),
    lastName: v.string(),
    dateOfBirth: v.number(),
    classroomId: v.id("classrooms"),
    organizationId: v.id("organizations"),
    allergies: v.optional(v.array(v.string())),
    medications: v.optional(v.array(v.string())),
    specialNeeds: v.optional(v.string()),
    photoUrl: v.optional(v.string()),
    createdAt: v.number(),
    updatedAt: v.number(),
  })
    .index("by_classroom", ["classroomId"])
    .index("by_organization", ["organizationId"]),

  guardianRelationships: defineTable({
    childId: v.id("children"),
    guardianUserId: v.string(), // Clerk user ID
    relationship: v.string(), // "primary_guardian", "secondary_guardian", "grandparent", "authorized_pickup"
    canView: v.boolean(), // Can see posts/photos
    canComment: v.boolean(),
    canDownload: v.boolean(),
    createdAt: v.number(),
  })
    .index("by_child", ["childId"])
    .index("by_guardian", ["guardianUserId"]),

  // ============================================
  // POSTS & MEDIA (Core Feature)
  // ============================================

  posts: defineTable({
    classroomId: v.id("classrooms"),
    authorId: v.string(), // Clerk user ID (teacher)
    title: v.optional(v.string()),
    content: v.string(),
    mediaUrls: v.array(v.string()), // Cloudflare Images/Stream URLs
    taggedChildren: v.array(v.id("children")),
    learningDomains: v.optional(v.array(v.string())), // Montessori domains
    status: v.union(
      v.literal("draft"),
      v.literal("pending_approval"),
      v.literal("published"),
      v.literal("rejected")
    ),
    aiCaptionGenerated: v.optional(v.boolean()),
    createdAt: v.number(),
    updatedAt: v.number(),
    publishedAt: v.optional(v.number()),
  })
    .index("by_classroom", ["classroomId"])
    .index("by_author", ["authorId"])
    .index("by_status", ["status"])
    .searchIndex("search_content", {
      searchField: "content",
      filterFields: ["classroomId", "status"],
    }),

  reactions: defineTable({
    postId: v.id("posts"),
    userId: v.string(), // Clerk user ID
    emoji: v.string(),
    createdAt: v.number(),
  }).index("by_post", ["postId"]),

  comments: defineTable({
    postId: v.id("posts"),
    authorId: v.string(), // Clerk user ID
    content: v.string(),
    createdAt: v.number(),
    updatedAt: v.number(),
  }).index("by_post", ["postId"]),

  // ============================================
  // AUDIT LOGS (FERPA/COPPA Compliance)
  // ============================================

  auditLogs: defineTable({
    userId: v.string(), // Clerk user ID
    action: v.string(), // "view_child", "download_photo", "create_post", etc.
    resourceType: v.string(), // "post", "child", "photo", etc.
    resourceId: v.string(),
    metadata: v.optional(v.any()), // Additional context
    timestamp: v.number(),
    ipAddress: v.optional(v.string()),
  })
    .index("by_user", ["userId"])
    .index("by_resource", ["resourceType", "resourceId"])
    .index("by_timestamp", ["timestamp"]),
});
