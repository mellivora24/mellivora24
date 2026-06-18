export type SkillCategory =
  | "soft-skills"
  | "clean-code"
  | "3d-design"
  | "CAD-CAM"
  | "pcb-design";

export interface Skill {
  id: string;
  icon: string;
  category: SkillCategory;
}
