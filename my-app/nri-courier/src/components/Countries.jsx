function Countries() {
  const countries = [
    { name: "United States", flag: "https://flagcdn.com/w40/us.png" },
    { name: "United Kingdom", flag: "https://flagcdn.com/w40/gb.png" },
    { name: "Canada", flag: "https://flagcdn.com/w40/ca.png" },
    { name: "France", flag: "https://flagcdn.com/w40/fr.png" },
    { name: "Germany", flag: "https://flagcdn.com/w40/de.png" },
    { name: "Australia", flag: "https://flagcdn.com/w40/au.png" },
    { name: "New Zealand", flag: "https://flagcdn.com/w40/nz.png" },
    //{ name: "Sri Lanka", flag: "https://flagcdn.com/w40/lk.png" },
    { name: "UAE", flag: "https://flagcdn.com/w40/ae.png" },
    { name: "China", flag: "https://flagcdn.com/w40/cn.png" },
    { name: "India", flag: "https://flagcdn.com/in.svg" },
{ name: "Japan", flag: "https://flagcdn.com/jp.svg" },
   // { name: "Italy", flag: "https://flagcdn.com/it.svg" }

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
            <img
              src={country.flag}
              alt={country.name}
              style={{
                width: "50px",
                height: "30px",
                borderRadius: "10px",
                marginBottom: "12px"
              }}
            />
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
