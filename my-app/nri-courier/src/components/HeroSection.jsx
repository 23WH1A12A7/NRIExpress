function Home() {
  return (
    <section id="home" data-nav className="hero reveal">

      <div
        className="hero-content"
        style={{
          display: "flex",
          alignItems: "center",
          gap: "60px"
        }}
      >
        {/* LEFT */}
        <div className="hero-left" style={{ flex: 1 }}>
          <span className="hero-badge">Worldwide Courier Service</span>

          {/* BRAND NAME */}
          <h1
            style={{
              fontSize: "52px",
              fontWeight: "800",
              margin: "20px 0 10px"
            }}
          >
            NRI Express
          </h1>

          <h2
            style={{
              fontSize: "28px",
              fontWeight: "600",
              color: "#333",
              marginBottom: "18px"
            }}
          >
            International Courier Services
          </h2>

          <p style={{ maxWidth: "520px", fontSize: "18px" }}>
            Trusted international courier partner for NRIs. We ensure
            safe packing, doorstep pickup and fast delivery across
            the globe.
          </p>

          {/* STATS */}
          <div
            className="hero-stats"
            style={{
              display: "flex",
              gap: "60px",
              marginTop: "50px"
            }}
          >
            <div>
              <h3 style={{ fontSize: "28px" }}>20+</h3>
              <span>Countries Served</span>
            </div>

            <div>
              <h3 style={{ fontSize: "28px" }}>10,000+</h3>
              <span>Happy Customers</span>
            </div>

            <div>
              <h3 style={{ fontSize: "28px" }}>3–5 Days</h3>
              <span>Express Delivery</span>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div
          className="hero-right"
          style={{
            flex: 1,
            textAlign: "center"
          }}
        >
          <img
  src="https://5.imimg.com/data5/SELLER/Default/2023/2/PY/LO/CJ/152044382/air-courier-services-1000x1000.jpg"
  alt="Courier Service"
  className="hero-image"
/>

        </div>
      </div>
    </section>
  );
}

export default Home;
