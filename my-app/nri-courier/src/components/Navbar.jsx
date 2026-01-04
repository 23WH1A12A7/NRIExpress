import { useEffect, useState } from "react";

function Navbar() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const sections = document.querySelectorAll("section[data-nav]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-45% 0px -45% 0px", // center of screen
      }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <span className="logo">🚚</span>
        <span className="brand-name">NRI Courier Express</span>
      </div>

      <ul className="navbar-links">
        <li className={active === "home" ? "active" : ""} onClick={() => scrollTo("home")}>Home</li>
        <li
    className={active === "about" ? "active" : ""}
    onClick={() => scrollTo("about")}
  >
    About
  </li>
        <li className={active === "services" ? "active" : ""} onClick={() => scrollTo("services")}>Services</li>
        <li className={active === "countries" ? "active" : ""} onClick={() => scrollTo("countries")}>Countries</li>
        <li className={active === "why" ? "active" : ""} onClick={() => scrollTo("why")}>Why Us</li>
        <li className={active === "contact" ? "active" : ""} onClick={() => scrollTo("contact")}>Contact</li>
      </ul>

      
    </nav>
  );
}

export default Navbar;
