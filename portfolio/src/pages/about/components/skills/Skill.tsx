import { useMemo } from "react";
import { useTranslation } from "react-i18next";

import type { Skill, SkillCategory } from "@type/skill";
import { skills } from "@shared/constants/skill";
import "./Skill.css";

export default function Skill() {
  const { t } = useTranslation();

  const grouped = useMemo(() => {
    return skills.reduce((acc, skill) => {
      (acc[skill.category] ??= []).push(skill);
      return acc;
    }, {} as Record<SkillCategory, Skill[]>);
  }, []);

  return (
    <div className="skill-groups">
      {Object.entries(grouped).map(([category, items]) => (
        <div key={category} className="skill-group">
          <div className="skill-grid">
            {items.map((skill) => (
              <div key={skill.id} className="skill-card">
                <img
                  src={skill.icon}
                  alt={t(`about_page.skills.items.${skill.id}.name`)}
                  className="skill-icon"
                />
                <div className="skill-info">
                  <h4 className="skill-name">
                    {t(`about_page.skills.items.${skill.id}.name`)}
                  </h4>
                  <p className="text-body skill-description">
                    {t(`about_page.skills.items.${skill.id}.description`)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
