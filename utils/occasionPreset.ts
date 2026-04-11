export const OCCASION_PRESETS = ["Birthday", "Anniversary", "Custom"] as const;
export type OccasionPreset = (typeof OCCASION_PRESETS)[number];

export function occasionStringToPreset(occasion: string): {
  preset: OccasionPreset;
  custom: string;
} {
  if (occasion === "Birthday") return { preset: "Birthday", custom: "" };
  if (occasion === "Anniversary") return { preset: "Anniversary", custom: "" };
  return { preset: "Custom", custom: occasion };
}
