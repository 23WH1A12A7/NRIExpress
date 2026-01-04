function Countries() {
  const countries = [
    { code: "US", name: "United States"},
    { code: "GB", name: "United Kingdom"},
    { code: "CA", name: "Canada"},
    { code: "FR", name: "France"},
    { code: "DE", name: "Germany"},
    { code: "AU", name: "Australia"},
    { code: "NZ", name: "New Zealand"},
    { code: "LK", name: "Sri Lanka"},
    { code: "AE", name: "UAE"},
    { code: "CN", name: "China"},
  ];

  return (
    <section id="countries" data-nav className="countries reveal">


      <h2>Countries We Serve</h2>
      <p className="section-subtitle">
        Reliable international delivery across the globe
      </p>

      <div className="countries-grid">
        {countries.map((country, index) => (
          <div className="country-card" key={index}>
            <span className="country-flag">{country.flag}</span>
            <span className="country-name">{country.name}</span>
          </div>
        ))}

        <div className="country-card highlight">
          🌍 <span className="country-name">Many More Countries</span>
        </div>
      </div>
    </section>
  );
}

export default Countries;
