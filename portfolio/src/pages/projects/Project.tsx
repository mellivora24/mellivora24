import { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";

import "@/pages/projects/Project.css";
import { projects } from "@shared/constants/project";
import ProjectCard from "@/pages/projects/components/ProjectCard";

const ALL_TAG = "__all__";

export default function ProjectsPage() {
  const { t } = useTranslation();
  const [activeTag, setActiveTag] = useState(ALL_TAG);

  const tags = useMemo(() => {
    const set = new Set<string>();
    projects.forEach((p) => p.tags.forEach((tag) => set.add(tag)));
    return Array.from(set);
  }, []);

  const filtered = useMemo(
    () =>
      activeTag === ALL_TAG
        ? projects
        : projects.filter((p) => p.tags.includes(activeTag)),
    [activeTag]
  );

  return (
    <div className="projects-page">
      {/* <section className="projects-hero">
        <p className="text-lead projects-hero-subtitle">
          {t("projects_page.hero.subtitle")}
        </p>
      </section> */}

      <section className="projects-hero">
        <div className="projects-filters" role="group" aria-label={t("projects_page.filter_label")}>
          <button
            className={`projects-filter-btn${activeTag === ALL_TAG ? " active" : ""}`}
            onClick={() => setActiveTag(ALL_TAG)}
          >
            {t("projects_page.filter_all")}
            <span className="projects-filter-count">{projects.length}</span>
          </button>

          {tags.map((tag) => (
            <button
              key={tag}
              className={`projects-filter-btn${activeTag === tag ? " active" : ""}`}
              onClick={() => setActiveTag(tag)}
            >
              {tag}
              <span className="projects-filter-count">
                {projects.filter((p) => p.tags.includes(tag)).length}
              </span>
            </button>
          ))}
        </div>

        {filtered.length > 0 ? (
          <div className="projects-grid">
            {filtered.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        ) : (
          <div className="projects-empty">
            <p className="text-body">{t("projects_page.empty")}</p>
          </div>
        )}
      </section>
    </div>
  );
}
