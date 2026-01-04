function AboutUs() {
  return (
    <section id="about" data-nav className="about reveal">
      <div className="about-container">
        {/* LEFT CONTENT */}
        <div className="about-text">
          <h2>About NRI Courier Express</h2>

          <p className="about-subtitle">
            Your trusted international courier partner
          </p>

          <p>
            NRI Courier Express specializes in reliable and secure international
            courier services for Non-Resident Indians. We understand the
            importance of timely and safe deliveries, whether it’s personal
            belongings, food items, documents, or commercial shipments.
          </p>

          <p>
            With a strong global network and dedicated logistics partners, we
            ensure fast delivery, transparent pricing, and end-to-end support
            across multiple countries.
          </p>

          </div>

        {/* RIGHT HIGHLIGHTS */}
        <div className="about-highlights">
          <div className="highlight-card">🌍 Worldwide Delivery Network</div>
          <div className="highlight-card">📦 Secure & Safe Packaging</div>
          <div className="highlight-card">🏠 Free Doorstep Pickup</div>
          <div className="highlight-card">📞 Dedicated Customer Support</div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
