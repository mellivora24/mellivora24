import { useTranslation } from "react-i18next";

import { useInView } from "@shared/hooks/useInView";
import type { TimelineItem } from "@shared/types/timeline";

import "./Timeline.css";

type TimelineContent = {
  period: string;
  title: string;
  organization?: string;
  description: string;
  link?: string;
};

export default function TimelineNode({
  item,
  delay,
}: {
  item: TimelineItem;
  delay: number;
}) {
  const { t } = useTranslation();
  const { ref, isInView } = useInView<HTMLLIElement>();

  const content = t(
    `about_page.journey.timeline.${item.id}`,
    { returnObjects: true }
  ) as TimelineContent;

  return (
    <li
      ref={ref}
      className={`timeline-node node-${item.type} ${
        isInView ? "is-visible" : ""
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <span className="timeline-dot" aria-hidden="true" />

      <div className="timeline-card">
        <span className="timeline-period">
          {content.period}
        </span>

        <h3 className="heading-md">
          {content.title}
        </h3>

        {content.organization && (
          <p className="timeline-org">
            {content.organization}
          </p>
        )}

        <p className="text-body">
          {content.description}
        </p>

        {content.link && (
          <a
            href={content.link}
            target="_blank"
            rel="noopener noreferrer"
            className="timeline-link"
          >
            {t("about_page.journey.timeline.see_more")}
          </a>
        )}
      </div>
    </li>
  );
}
