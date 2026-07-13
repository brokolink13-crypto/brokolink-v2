export const colors = {
  primary: {
    50: "#F0FDF4",
    100: "#DCFCE7",
    200: "#BBF7D0",
    300: "#86EFAC",
    400: "#4ADE80",
    500: "#22C55E",
    600: "#16A34A",
    700: "#15803D",
    800: "#166534",
    900: "#14532D",
  },

  secondary: {
    500: "#3B82F6",
  },

  accent: {
    yellow: "#FACC15",
    orange: "#FB923C",
    purple: "#A855F7",
    red: "#EF4444",
  },

  neutral: {
    white: "#FFFFFF",
    black: "#111827",

    50: "#F9FAFB",
    100: "#F3F4F6",
    200: "#E5E7EB",
    300: "#D1D5DB",
    400: "#9CA3AF",
    500: "#6B7280",
    600: "#4B5563",
    700: "#374151",
    800: "#1F2937",
    900: "#111827",
  },

  background: {
    primary: "#FFFFFF",
    secondary: "#F8FAFC",
    tertiary: "#F1F5F9",
  },

  text: {
    primary: "#111827",
    secondary: "#4B5563",
    tertiary: "#9CA3AF",
    inverse: "#FFFFFF",
  },

  success: "#22C55E",
  warning: "#F59E0B",
  danger: "#EF4444",
  info: "#3B82F6",

  border: {
    light: "#E5E7EB",
    default: "#D1D5DB",
    strong: "#9CA3AF",
  },
} as const;

export type Colors = typeof colors;