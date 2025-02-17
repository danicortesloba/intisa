

const Explore = () => {
  // Array of iconbox data
  const iconboxData = [
    {
      icon: "/images/icon/property-buy-2.svg",
      title: "Compra una propiedad",
      text: "En Indisa tenemos propiedades a la venta en la Segunda Región y Región Metropolitana.",
      linkText: "Encuentra un hogar",
    },
    {
      icon: "/images/icon/property-sell-2.svg",
      title: "Vende una propiedad",
      text: "Intisa te ayuda a vender tu propiedad en la Segunda Región y Región Metropolitana.",
      linkText: "Vende tu propiedad",
    },
    {
      icon: "/images/icon/property-rent-2.svg",
      title: "Arrienda una propiedad",
      text: "Intisa te ayuda a arrendar una propiedad en la Segunda Región.",
      linkText: "Encuentra un departamento",
    },
  ];

  return (
    <>
      {iconboxData.map((item, index) => (
        <div
          className="col-sm-6 col-lg-4"
          key={index}
          data-aos="fade-up"
          data-aos-delay={(index + 1) * 100} // Increase delay for each item
        >
          <div className="iconbox-style3 text-center">
            <div className="icon">
              <img  src={item.icon} alt="icon" />
            </div>
            <div className="iconbox-content">
              <h4 className="title">{item.title}</h4>
              <p className="text">{item.text}</p>
              <a href="#" className="ud-btn btn-thm3">
                {item.linkText}
                <i className="fal fa-arrow-right-long" />
              </a>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Explore;
