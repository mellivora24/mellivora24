export type Project = {
  id: string;
  title: string;
  description: string;

  image: string;
  images?: string[];

  tags: string[];

  github: string;
  demo?: string;

  features?: string[];
  architecture?: string;

  status?: "completed" | "in-progress";
};

export type ProjectRaw = {
  id: string;
  image: string;
  images?: string[];
  tags: string[];
  github: string;
  demo?: string;
  status?: "completed" | "in-progress";
};
