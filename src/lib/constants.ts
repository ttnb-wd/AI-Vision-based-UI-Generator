export const APP_NAME = "AI Vision UI Generator";

export const APP_DESCRIPTION =
  "Generate beautiful production-ready UI from screenshots using AI.";

export const MAX_UPLOAD_SIZE = 10 * 1024 * 1024; // 10MB

export const SUPPORTED_IMAGE_TYPES = [
  "image/png",
  "image/jpeg",
  "image/webp",
];

export const ROUTES = {
  HOME: "/",
  DASHBOARD: "/dashboard",
  GENERATOR: "/dashboard/generator",
  HISTORY: "/dashboard/history",
  SETTINGS: "/dashboard/settings",
} as const;