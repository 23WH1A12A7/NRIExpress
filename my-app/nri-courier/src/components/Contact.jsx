function Contact() {
  return (
    <section id="contact" data-nav className="contact reveal">
      <div className="contact-container">
        
        {/* LEFT CONTENT */}
        <div className="contact-text">
          <h2>Ready to Send Your Parcel?</h2>
          <p className="contact-subtitle">
            Get fast, safe, and reliable international courier service with NRI Courier Express.
          </p>

          <div className="contact-cards">
            <div className="contact-card">
              📞 <span>Call Us</span>
              <p>+91 99667 76651<br />+91 96977 49777</p>
            </div>

            <div className="contact-card">
  📍 <span>Office Address</span>
  <p>
    Plot No. 510, 3 Monkey Junction,<br />
    Beside Vasireddy Swagruha Foods,<br />
    Vasantha Nethralaya  Anjali Opticals Building,<br />
    Cellar Shop, Pragathi Nagar,<br />
    Nizampet, KPHB Colony,<br />
    Hyderabad – 500090
  </p>
</div>


            <div className="contact-card">
              🏠 <span>Doorstep Pickup</span>
              <p>Free home pickup available</p>
            </div>
          </div>
        </div>

        {/* RIGHT CTA */}
        <div className="contact-cta-box">
          <h3>Request a Quote</h3>
          <p>
            Tell us what you want to send and where.  
            Our team will get back to you quickly.
          </p>

          <button className="primary-btn">Get a Quote</button>
          
        </div>

      </div>
    </section>
  );
}

export default Contact;
