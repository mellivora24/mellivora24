import { useTranslation } from "react-i18next";

import "@/pages/about/components/tech_stack/TechStack.css";
import { techStack } from "@shared/constants/tech_stack";
import type { TechCategory } from "@type/tech_stack";

const categories: TechCategory[] = Array.from(new Set(techStack.map((item) => item.category))) as TechCategory[];

export default function TechStack() {
  const { t } = useTranslation();

  return (
    <div className="tech-stack">
      {categories.map((category) => {
        const items = techStack.filter((item) => item.category === category);
        if (items.length === 0) return null;

        return (
          <div key={category} className="tech-category">
            <h3 className="heading-md tech-category-title">
              {t(`about_page.techStack.categories.${category}`)}
            </h3>

            <div className="tech-grid">
              {items.map((item) => (
                <div key={item.name} className="tech-chip">
                  <img
                    src={item.icon}
                    alt={item.name}
                    className="tech-icon"
                    loading="lazy"
                  />
                  <span className="tech-name">{item.name}</span>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
