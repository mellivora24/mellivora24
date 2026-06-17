import { useTranslation } from "react-i18next";

import "@/pages/about/AboutPage.css";
import { CustomButton } from "@shared/components/Button";
import { timeline } from "@shared/constants/timeline";
import TimelineNode from "./components/timeline/Timeline";
import TechStack from "./components/tech_stack/TechStack";

import profileImage from '@/assets/images/profile-images.jpg';

export default function AboutPage() {
  const { t } = useTranslation();

  const bio = t("about_page.bio", {
    returnObjects: true,
  }) as string[];

  const badges = t("about_page.badges", {
    returnObjects: true,
  }) as string[];

  return (
    <div className="about-page">
      <section className="about-hero">
        <h2
          className="heading-lg"
          style={{ marginBottom: "0rem" }}
        >
          {t("about_page.hero.title")}
        </h2>

        <img src={profileImage} alt="Profile" className="profile-image" />
        <p className="text-body image-caption">
          {t("about_page.image.caption")}
        </p>

        <div className="bio-text">
          {bio.map((paragraph, index) => (
            <p key={index} className="text-lead">
              {paragraph}
            </p>
          ))}
        </div>

        <div className="info-badges">
          {badges.map((badge, index) => (
            <span key={index} className="badge">
              {badge}
            </span>
          ))}
        </div>
      </section>

      <section className="journey-section">
        <h2 className="heading-lg">
          {t("about_page.journey.title")}
        </h2>

        <p className="text-body journey-subtitle">
          {t("about_page.journey.subtitle")}
        </p>

        <div className="timeline-legend">
          <span className="legend-item">
            <span
              className="legend-dot dot-education"
              aria-hidden="true"
            />
            {t("about_page.journey.legendEducation")}
          </span>

          <span className="legend-item">
            <span
              className="legend-dot dot-project"
              aria-hidden="true"
            />
            {t("about_page.journey.legendProject")}
          </span>
        </div>

        <ol className="timeline">
          {timeline.map((item, index) => (
            <TimelineNode
              key={item.id}
              item={item}
              delay={index * 80}
            />
          ))}
        </ol>
      </section>

      <section className="tech-stack-section">
        <h2 className="heading-lg">{t("about_page.techStack.title")}</h2>
        <p className="text-body tech-subtitle">{t("about_page.techStack.subtitle")}</p>
        <TechStack />
      </section>
      
      <section className="cta-section">
        <h2 className="heading-lg">
          {t("about_page.cta.title")}
        </h2>

        <div className="cta-actions">
          <a
            className="btn btn-primary"
          >
            {t("about_page.seeMyProjects")}
          </a>

          <CustomButton
            variant="outline"
            size="lg"
            onClick={() => {
              window.location.href = "contacts";
            }}
          >
            {t("about_page.cta.contact")}
          </CustomButton>
        </div>
      </section>
    </div>
  );
}
