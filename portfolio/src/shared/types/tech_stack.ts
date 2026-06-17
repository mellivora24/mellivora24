export type TechCategory =
  | "frontend"
  | "backend"
  | "database"
  | "devops"
  | "tools"
  | "mobile"
  | "desktop"
  | "embedded"
  | "board"
  | "protocol"
  | "computer_vision"
  | "other";

export interface TechItem {
  name: string;
  icon: string;
  category: TechCategory;
}
