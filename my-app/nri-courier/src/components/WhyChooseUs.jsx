function WhyChooseUs() {
  const reasons = [
    {
      icon: "🚚",
      title: "Fast Delivery",
      desc: "International delivery in as fast as 3 working days",
    },
    {
      icon: "🌍",
      title: "Worldwide Coverage",
      desc: "Serving 20+ countries across the globe",
    },
    {
      icon: "🏠",
      title: "Free Home Pickup",
      desc: "Doorstep pickup at your convenience",
    },
    {
      icon: "💰",
      title: "Best Prices",
      desc: "Affordable and transparent pricing",
    },
    {
      icon: "📦",
      title: "Safe Packing",
      desc: "Secure packaging to avoid damage",
    },
    {
      icon: "📞",
      title: "Dedicated Support",
      desc: "Customer support at every step",
    },
  ];

  return (
    // ✅ ADD id="why" HERE
    <section id="why" data-nav className="why reveal">

      <h2>Why Choose NRI Courier Express?</h2>
      <p className="section-subtitle">
        Trusted by thousands of customers worldwide
      </p>

      <div className="why-grid">
        {reasons.map((item, index) => (
          <div className="why-card" key={index}>
            <div className="why-icon">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default WhyChooseUs;
