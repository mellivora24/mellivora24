import "./HomePage.css";

export default function HomePage() {
  return (
    <div className="home">
      <section className="home__hero">
        <span className="eyebrow">Welcome to my universe</span>

        <h1 className="heading-xl home__hero-title">
          Xin chào, mình là{" "}
          <span className="text-gradient">Quyết Thành</span>
        </h1>

        <p className="text-body home__hero-subtitle">
          Mình là một developer đam mê xây dựng những sản phẩm web đẹp,
          hiệu năng cao và trải nghiệm người dùng mượt mà. Khám phá hành
          trình, kỹ năng và các dự án của mình ngay bên dưới.
        </p>

        <div className="home__hero-actions">
          <a href="/projects" className="btn btn--primary">
            Xem dự án
          </a>
          <a href="/contacts" className="btn btn--outline">
            Liên hệ với mình
          </a>
        </div>

        <div className="home__scroll-hint">
          <span />
          Scroll
        </div>
      </section>

      <section className="home__highlights">
        <div className="home__card">
          <span className="home__card-icon">🚀</span>
          <h3>Phát triển Web</h3>
          <p>
            Xây dựng giao diện hiện đại, responsive với React, TypeScript
            và các công nghệ frontend mới nhất.
          </p>
        </div>

        <div className="home__card">
          <span className="home__card-icon">🎨</span>
          <h3>UI / UX Design</h3>
          <p>
            Thiết kế trải nghiệm trực quan, tối ưu hành trình người dùng
            và thẩm mỹ tổng thể cho sản phẩm.
          </p>
        </div>

        <div className="home__card">
          <span className="home__card-icon">⚙️</span>
          <h3>Tối ưu hiệu năng</h3>
          <p>
            Tập trung vào hiệu năng tải trang, tối ưu code và trải
            nghiệm mượt mà trên mọi thiết bị.
          </p>
        </div>
      </section>
    </div>
  );
}
