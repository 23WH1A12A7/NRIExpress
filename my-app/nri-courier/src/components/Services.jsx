function Services() {
  const services = [
    {
      title: "Pickles & Powders",
      img: "https://th.bing.com/th/id/R.70fd4aa9e2a81f4086fe1f180c4bb7de?rik=yW0juHj4irhKkQ&riu=http%3a%2f%2fpurefare.in%2fcdn%2fshop%2fcollections%2fpickles_powders_1024x.png%3fv%3d1743526828&ehk=ZNomP3E2vP4F2Be6GSXm0A0dUkS7INgPUoLC5wYPua0%3d&risl=&pid=ImgRaw&r=0",
    },
    {
      title: "Religious / Pooja Items",
      img: "https://th.bing.com/th/id/OIP.FYP5FBEl5N_kKKA3N5mGcAHaE8?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3",
    },
    {
      title: "Sweets",
      img: "https://th.bing.com/th/id/OIP.-rf1PMzCYk3EamGzMQy5egHaER?w=270&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
    },
    {
      title: "Clothes",
      img: "https://c1.peakpx.com/wallpaper/573/909/315/store-clothes-clothing-line-fashion-wallpaper.jpg",
    },
    {
      title: "Medicines",
      img: "https://tse1.mm.bing.net/th/id/OIP.o6wHLz6qYw0j82vKo0H8MAHaFZ?rs=1&pid=ImgDetMain&o=7&rm=3",
    },
    {
      title: "Books",
      img: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=900",
    },
    {
      title: "Household Goods",
      img: "https://c8.alamy.com/comp/BJDP2H/a-range-of-household-goods-displayed-outside-a-hardware-shop-in-whalley-BJDP2H.jpg",
    },
    {
      title: "Seasonal Gifts",
      img: "https://img.freepik.com/premium-photo/christmas-gift-xmas-present-box-objects-holiday-mood-background-winter-merry-christmas_326694-93022.jpg",
    },
    {
  title: "Toys & Baby Products",
  img: "https://tiimg.tistatic.com/fp/1/004/832/highly-attractive-kids-toys-561.jpg",
}

  ];

  return (
    <section id="services" data-nav className="services reveal">

      <h2>What We Deliver</h2>
      <p className="section-subtitle">
        Trusted international delivery for personal & commercial items
      </p>

      <div className="services-image-grid">
        {services.map((service, index) => (
          <div className="service-image-item">
  <img src={service.img} alt={service.title} loading="lazy" />
  <div className="service-image-name">{service.title}</div>
</div>

        ))}
      </div>
    </section>
  );
}

export default Services;
