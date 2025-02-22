import DefaultHeader from "@/components/common/DefaultHeader";
import Footer from "@/components/common/default-footer";
import MobileMenu from "@/components/common/mobile-menu";
import Mission from "@/components/pages/about/Mission";
import MetaData from "@/components/common/MetaData";

const metaInformation = {
  title: "Conócenos  || Intisa Propiedades",
};

const About = () => {
  return (
    <>
    <MetaData meta={metaInformation} />
      {/* Main Header Nav */}
      <DefaultHeader />
      {/* End Main Header Nav */}

      {/* Mobile Nav  */}
      <MobileMenu />
      {/* End Mobile Nav  */}

      {/* Breadcrumb Sections */}
      <section className="breadcumb-section2 p-0 white">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcumb-style1">
                <h2 className="title white">Sobre Nosotros</h2>
                <div className="breadcumb-list white">
                  <a href="/" className="white">Inicio</a>
                  <a href="/about" className="white">Conócenos</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Breadcrumb Sections */}

      {/* Our About Area */}
      <section className="our-about pb90">
        <div className="container">
          <div className="row" data-aos="fade-up" data-aos-delay="300">
            <div className="col-lg-6">
              <h2>
                Nuestra misión es encontrar{" "}
                <br className="d-none d-lg-block" /> la propiedad ideal para ti.
              </h2>
            </div>
            <div className="col-lg-6">
              <p className="text mb25">
                INTISA nace en 2024 con la misión de invertir, remodelar y
                revender propiedades en la Segunda Región y Región Metropolitana,
                siempre con la calidad como nuestro norte y el profesionalismo como nuestro
                pilar.
              </p>
              <p className="text mb55">
                Desde entonces nos hemos dedicado a ofrecer a nuestros clientes
                la mejor experiencia de compra, venta y arriendo de propiedades con precios
                competitivos y un excelente servicio.
              </p>
              <div className="row">
                <Mission />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Our About Area */}


      {/* Start Our Footer */}
      <section className="footer-style1 pt60 pb-0">
        <Footer />
      </section>
      {/* End Our Footer */}
    </>
  );
};

export default About;
