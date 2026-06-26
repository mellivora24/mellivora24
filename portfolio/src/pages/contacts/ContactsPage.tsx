import { useRef, useState } from "react";
import { useTranslation } from "react-i18next";

import "@/pages/contacts/ContactsPage.css";
import { CustomButton } from "@shared/components/Button";

type FormState = "idle" | "loading" | "success" | "error";

export default function ContactPage() {
  const { t } = useTranslation();

  const [formState, setFormState] = useState<FormState>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const subjectRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!nameRef.current?.value.trim()) errs.name = t("contact_page.form.errors.name");
    if (!emailRef.current?.value.trim()) {
      errs.email = t("contact_page.form.errors.email_required");
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailRef.current.value)) {
      errs.email = t("contact_page.form.errors.email_invalid");
    }
    if (!messageRef.current?.value.trim()) errs.message = t("contact_page.form.errors.message");
    return errs;
  };

  const handleSubmit = async () => {
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setFormState("loading");

    try {
      await fetch("https://formspree.io/f/YOUR_FORM_ID", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: nameRef.current?.value,
          email: emailRef.current?.value,
          subject: subjectRef.current?.value,
          message: messageRef.current?.value,
        }),
      });
      setFormState("success");
    } catch {
      setFormState("error");
    }
  };

  const handleReset = () => {
    setFormState("idle");
    setErrors({});
    if (nameRef.current) nameRef.current.value = "";
    if (emailRef.current) emailRef.current.value = "";
    if (subjectRef.current) subjectRef.current.value = "";
    if (messageRef.current) messageRef.current.value = "";
  };

  const socials = t("contact_page.info.socials", { returnObjects: true }) as {
    label: string;
    href: string;
    icon: string;
  }[];

  return (
    <div className="contact-page">
      <section className="contact-hero">
        {/* <p className="text-lead contact-hero-subtitle">
          {t("contact_page.hero.subtitle")}
        </p> */}
      </section>

      <section className="contact-content">
        <div className="contact-info">
          <h2 className="heading-md">{t("contact_page.info.title")}</h2>
          <div className="contact-items">
            <a className="contact-item" href="mailto:thanhquyet.freelancer@gmail.com">
              <span className="contact-item-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
              </span>
              <div>
                <p className="contact-item-label">{t("contact_page.info.email_label")}</p>
                <p className="contact-item-value">thanhquyet.freelancer@gmail.com</p>
              </div>
            </a>

            <a className="contact-item" href="https://github.com/mellivora24" target="_blank" rel="noopener noreferrer">
              <span className="contact-item-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
              </span>
              <div>
                <p className="contact-item-label">GitHub</p>
                <p className="contact-item-value">mellivora24</p>
              </div>
            </a>
          </div>

          <div className="contact-socials">
            <p className="contact-socials-label">{t("contact_page.info.socials_label")}</p>
            <div className="contact-socials-list">
              {Array.isArray(socials) && socials.map((s) => (
                <a
                  key={s.label}
                  className="contact-social-btn"
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                >
                  <span dangerouslySetInnerHTML={{ __html: s.icon }} />
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="contact-form-wrapper">
          {formState === "success" ? (
            <div className="contact-success">
              <div className="contact-success-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
              </div>
              <h3 className="heading-md">{t("contact_page.form.success.title")}</h3>
              <p className="text-body">{t("contact_page.form.success.description")}</p>
              <CustomButton variant="outline" size="md" onClick={handleReset}>
                {t("contact_page.form.success.reset")}
              </CustomButton>
            </div>
          ) : (
            <div className="contact-form">
              <div className="contact-form-row">
                <div className="contact-field">
                  <label className="contact-label" htmlFor="contact-name">
                    {t("contact_page.form.name")}
                    <span className="contact-required">*</span>
                  </label>
                  <input
                    ref={nameRef}
                    id="contact-name"
                    type="text"
                    className={`contact-input${errors.name ? " error" : ""}`}
                    placeholder={t("contact_page.form.name_placeholder")}
                    onChange={() => errors.name && setErrors((e) => ({ ...e, name: "" }))}
                  />
                  {errors.name && <p className="contact-error">{errors.name}</p>}
                </div>

                <div className="contact-field">
                  <label className="contact-label" htmlFor="contact-email">
                    {t("contact_page.form.email")}
                    <span className="contact-required">*</span>
                  </label>
                  <input
                    ref={emailRef}
                    id="contact-email"
                    type="email"
                    className={`contact-input${errors.email ? " error" : ""}`}
                    placeholder={t("contact_page.form.email_placeholder")}
                    onChange={() => errors.email && setErrors((e) => ({ ...e, email: "" }))}
                  />
                  {errors.email && <p className="contact-error">{errors.email}</p>}
                </div>
              </div>

              <div className="contact-field">
                <label className="contact-label" htmlFor="contact-subject">
                  {t("contact_page.form.subject")}
                </label>
                <input
                  ref={subjectRef}
                  id="contact-subject"
                  type="text"
                  className="contact-input"
                  placeholder={t("contact_page.form.subject_placeholder")}
                />
              </div>

              <div className="contact-field">
                <label className="contact-label" htmlFor="contact-message">
                  {t("contact_page.form.message")}
                  <span className="contact-required">*</span>
                </label>
                <textarea
                  ref={messageRef}
                  id="contact-message"
                  className={`contact-textarea${errors.message ? " error" : ""}`}
                  placeholder={t("contact_page.form.message_placeholder")}
                  rows={6}
                  onChange={() => errors.message && setErrors((e) => ({ ...e, message: "" }))}
                />
                {errors.message && <p className="contact-error">{errors.message}</p>}
              </div>

              {formState === "error" && (
                <p className="contact-submit-error">{t("contact_page.form.errors.submit")}</p>
              )}

              <CustomButton
                variant="primary"
                size="lg"
                isLoading={formState === "loading"}
                onClick={handleSubmit}
                fullWidth
              >
                {t("contact_page.form.submit")}
              </CustomButton>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
