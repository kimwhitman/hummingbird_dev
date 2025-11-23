/**
 * Shared TypeScript types for Hummingbird
 *
 * These types are shared across web, mobile, and backend packages.
 * Optimized for AI agent comprehension.
 */

// ============================================
// ROLES (35+ Role System)
// ============================================

export type Role =
  // Platform (Internal)
  | "platform_admin"
  | "platform_support"
  | "platform_data_analyst"
  // School Leadership
  | "owner"
  | "regional_director"
  | "director"
  | "assistant_director"
  | "curriculum_coordinator"
  // Teachers
  | "lead_teacher"
  | "program_mentor"
  | "assistant_teacher"
  | "substitute_teacher"
  | "student_teacher"
  | "paraprofessional"
  // Parents/Guardians
  | "primary_guardian"
  | "secondary_guardian"
  | "grandparent"
  | "authorized_pickup"
  // Specialists
  | "behavioral_specialist"
  | "nurse"
  | "social_media_coordinator"
  | "kitchen_manager"
  | "maintenance_coordinator"
  | "aftercare_coordinator";

export type ScopeType = "organization" | "campus" | "classroom" | "child";

export interface Assignment {
  userId: string;
  organizationId: string;
  role: Role;
  scopeType: ScopeType;
  scopeId: string;
  effectiveStart?: number;
  effectiveEnd?: number;
}

// ============================================
// POST STATUS
// ============================================

export type PostStatus = "draft" | "pending_approval" | "published" | "rejected";

// ============================================
// AGE GROUPS
// ============================================

export type AgeGroup = "infant" | "toddler" | "preschool" | "kindergarten";
