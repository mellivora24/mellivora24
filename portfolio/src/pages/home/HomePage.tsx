import { useTranslation } from "react-i18next";

import "@/pages/home/HomePage.css";
import profileCard from "@/assets/images/profile-card.png";
import { CustomButton } from "@shared/components/Button";

export default function HomePage() {
  const { t } = useTranslation();

  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-text">
          <h1 className="shiny-text">
            {t("home_page.greeting")}
            <img
              src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Hand%20gestures/Victory%20Hand%20Medium-Light%20Skin%20Tone.png"
              alt="Victory Hand Medium-Light Skin Tone"
              width="60"
              height="60"
            />
          </h1>
          <h2>{t("home_page.description")}</h2>
          <CustomButton
            variant="primary"
            size="lg"
            fullWidth={false}
            onClick={() => (window.location.href = "about")}
            style={{ maxWidth: "200px" }}
          >
            {t("home_page.moreAboutMeButton")}
          </CustomButton>
        </div>
        <div className="profile-card">
          <img src={profileCard} alt="Profile Card" />
        </div>
      </div>
    </section>
  );
}
