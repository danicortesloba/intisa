import MobileMenu from "@/components/common/mobile-menu";
import Explore from "@/components/home/home-v2/Explore";
import FeaturedListings from "@/components/home/home-v2/FeatuerdListings";
import Header from "@/components/home/home-v2/Header";
import Hero from "@/components/home/home-v2/hero";
import Footer from "@/components/common/default-footer";
import { Link } from "react-router-dom";
import MetaData from "@/components/common/MetaData";

const metaInformation = {
  title: "INTISA Propiedades",
};

const Home_V2 = () => {
  return (
    <> <MetaData meta={metaInformation} />
      {/* Main Header Nav */}
      <Header />
      {/* End Main Header Nav */}

      {/* Mobile Nav  */}
      <MobileMenu />
      {/* End Mobile Nav  */}

      {/* Home Banner Style V2 */}
      <section className="home-banner-style2 p0">
        <div className="home-style2">
          <div className="container maxw1600">
            <div className="home2-hero-banner bdrs12"></div>
            <div className="row">
              <div className="col-xl-10 mx-auto">
                <Hero />
              </div>
            </div>
          </div>
          {/* End .container */}
        </div>
      </section>
      {/* End Home Banner Style V2 */}

      {/* Explore Apartment */}
      <section className="pb90 pb30-md">
       
      </section>
      {/* End Explore Apartment */}

      {/* Featured Listings */}
      <section className="pt0 pb60 pb30-md bgc-white">
        <div className="container">
          <div className="row align-items-center" data-aos="fade-up">
            <div className="col-lg-9">
              <div className="main-title2">
                <h2 className="title">Descubre nuestras propiedades</h2>
                <p className="paragraph">
                  Contamos con propiedades en Antofagasta y la Región Metropolitana
                </p>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="text-start text-lg-end mb-3">
                <Link className="ud-btn2" to="/grid-full-2-col">
                  Ver todas las propiedades
                  <i className="fal fa-arrow-right-long" />
                </Link>
              </div>
            </div>
          </div>
          {/* End header */}

          <div className="row">
            <div className="col-lg-12" data-aos="fade-up" data-aos-delay="200">
              <div className="feature-listing-slider">
                <FeaturedListings />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Explore Featured Listings */}


      {/* Explore Apartment */}
      <section className="p-0">
        <div className="how-we-help position-relative mx-auto bgc-thm-light maxw1600 pt120 pt60-md pb90 pb30-md bdrs12 mx20-lg">
          <div className="container">
            <div className="row">
              <div
                className="col-lg-6 m-auto wow fadeInUp"
                data-wow-delay="300ms"
              >
                <div className="main-title text-center">
                  <h2 className="title">Deja que Intisa te ayude</h2>
                  <p className="paragraph">
                    Permite que te ayudemos a arrendar, comprar, o vender una propiedad.
                  </p>
                </div>
              </div>
            </div>
            {/* End .row */}

            <div className="row">
              <Explore />
            </div>
          </div>
        </div>
      </section>
      {/* End Explore Apartment */}

      {/* Start Our Footer */}
      <section className="footer-style1 at-home2 pb-0">
        <Footer />
      </section>
      {/* End Our Footer */}
    </>
  );
};

export default Home_V2;
