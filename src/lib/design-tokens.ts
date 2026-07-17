export const colors = {
  primary: "#5B5FF8",
  secondary: "#8B5CF6",
  accent: "#FF4D9D",

  blue: "#4D9FFF",
  green: "#38D39F",
  orange: "#FF9D42",

  background: "#FAFBFF",
  surface: "#FFFFFF",

  border: "#E8ECF5",

  text: {
    primary: "#111827",
    secondary: "#6B7280",
    muted: "#9CA3AF",
  },
} as const;

export const radius = {
  sm: "10px",
  md: "14px",
  lg: "18px",
  xl: "24px",
} as const;

export const shadow = {
  sm: "0 4px 12px rgba(0,0,0,.04)",
  md: "0 12px 30px rgba(0,0,0,.08)",
  lg: "0 30px 60px rgba(0,0,0,.12)",
} as const;

export const animation = {
  fast: 0.2,
  normal: 0.35,
  slow: 0.6,
} as const;