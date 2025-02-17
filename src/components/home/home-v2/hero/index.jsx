import HeroContent from "./HeroContent";

const Hero = () => {
  return (
    <>
      <div className="inner-banner-style2 text-center position-relative">
        <HeroContent />
        <h2 className="hero-title" data-aos="fade-up" data-aos-delay="150">
          Encuentra tu hogar
        </h2>
        <p className="hero-text fz15" data-aos="fade-up" data-aos-delay="250">
          Encontremos la propiedad perfecta para ti
        </p>
      </div>
      {/* End Hero content */}

      {/* <!-- Advance Feature Modal Start --> */}
    
      {/* <!-- Advance Feature Modal End --> */}
    </>
  );
};

export default Hero;
