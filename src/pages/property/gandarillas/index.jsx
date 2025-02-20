import DefaultHeader from "@/components/common/DefaultHeader";
import Footer from "@/components/common/default-footer";
import MobileMenu from "@/components/common/mobile-menu";
import FloorPlans from "@/components/property/antofagasta/gandarillas/FloorPlans";
import NearbySimilarProperty from "@/components/property/antofagasta/gandarillas/NearbySimilarProperty";
import OverView from "@/components/property/antofagasta/gandarillas/OverView";
import PropertyAddress from "@/components/property/antofagasta/gandarillas/PropertyAddress";
import PropertyFeaturesAminites from "@/components/property/antofagasta/gandarillas/PropertyFeaturesAminites";
import PropertyHeader from "@/components/property/antofagasta/gandarillas/PropertyHeader";
import ProperytyDescriptions from "@/components/property/antofagasta/gandarillas/ProperytyDescriptions";
import PropertyGallery from "@/components/property/antofagasta/gandarillas";

import MetaData from "@/components/common/MetaData";
import { useParams } from "react-router-dom";

const metaInformation = {
  title: "Gandarillas",
};

const SingleV4 = () => {
  let params = useParams();
  return (
    <>
    <MetaData meta={metaInformation} />
      {/* Main Header Nav */}
      <DefaultHeader />
      {/* End Main Header Nav */}

      {/* Mobile Nav  */}
      <MobileMenu />
      {/* End Mobile Nav  */}

      {/* Property Slider Gallery */}
      <section className="pt20 pb60 bgc-white">
        <PropertyGallery id={params.id} />
      </section>
      {/* End Property Slider Gallery */}

      {/* Property All Single V4 */}
      <section className="pt0 pb90 bgc-white">
        <div className="container">
          <div className="row">
            <PropertyHeader id={1} />
          </div>
          {/* End .row */}

          <div className="row wrap">
            <div className="col-lg-12">
              <div className="ps-widget bgc-white bdrs12 default-box-shadow2 p30 mb30 overflow-hidden position-relative">
                <h4 className="title fz17 mb30">Resumen</h4>
                <div className="row">
                  <OverView id={params.id} />
                </div>
              </div>
              {/* End .ps-widget */}

              <div className="ps-widget bgc-white bdrs12 default-box-shadow2 p30 mb30 overflow-hidden position-relative">
                <h4 className="title fz17 mb30">Descripción</h4>
                <ProperytyDescriptions />
                {/* End property description */}

                
              </div>
              {/* End .ps-widget */}

              <div className="ps-widget bgc-white bdrs12 default-box-shadow2 p30 mb30 overflow-hidden position-relative">
                <h4 className="title fz17 mb30 mt30">Dirección</h4>
                <div className="row">
                  <PropertyAddress />
                </div>
              </div>
              {/* End .ps-widget */}

              <div className="ps-widget bgc-white bdrs12 default-box-shadow2 p30 mb30 overflow-hidden position-relative">
                <h4 className="title fz17 mb30">Características</h4>
                <div className="row">
                  <PropertyFeaturesAminites />
                </div>
              </div>
              {/* End .ps-widget */}

              {/* End .ps-widget */}

              <div className="ps-widget bgc-white bdrs12 default-box-shadow2 p30 mb30 overflow-hidden position-relative">
                <h4 className="title fz17 mb30">Plano</h4>
                <div className="row">
                  <div className="col-md-12">
                    <div className="accordion-style1 style2">
                      <FloorPlans />
                    </div>
                  </div>
                </div>
              </div>     
          </div>
          </div>
          {/* End .row */}

          <div className="row mt30 align-items-center justify-content-between">
            <div className="col-auto">
              <div className="main-title">
                <h2 className="title">Descubre nuestras propiedades</h2>
                <p className="paragraph">
                Contamos con propiedades en Antofagasta y la Región Metropolitana
                </p>
              </div>
            </div>
            {/* End header */}

            <div className="col-auto mb30">
              <div className="row align-items-center justify-content-center">
                <div className="col-auto">
                  <button className="featured-prev__active swiper_button">
                    <i className="far fa-arrow-left-long" />
                  </button>
                </div>
                {/* End prev */}

                <div className="col-auto">
                  <div className="pagination swiper--pagination featured-pagination__active" />
                </div>
                {/* End pagination */}

                <div className="col-auto">
                  <button className="featured-next__active swiper_button">
                    <i className="far fa-arrow-right-long" />
                  </button>
                </div>
                {/* End Next */}
              </div>
              {/* End .col for navigation and pagination */}
            </div>
            {/* End .col for navigation and pagination */}
          </div>
          {/* End .row */}

          <div className="row">
            <div className="col-lg-12">
              <div className="property-city-slider">
                <NearbySimilarProperty />
              </div>
            </div>
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
      </section>
      {/* End Property All Single V4  */}

      {/* Start Our Footer */}
      <section className="footer-style1 pt60 pb-0">
        <Footer />
      </section>
      {/* End Our Footer */}
    </>
  );
};

export default SingleV4;
