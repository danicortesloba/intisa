import CallToActions from "@/components/common/CallToActions";
import DefaultHeader from "@/components/common/DefaultHeader";
import Footer from "@/components/common/default-footer";
import MobileMenu from "@/components/common/mobile-menu";
import Form from "@/components/pages/contact/Form";
import Office from "@/components/pages/contact/Office";

import MetaData from "@/components/common/MetaData";

const metaInformation = {
  title: "Contact  || Homez - Real Estate ReactJS Template",
};

const Contact = () => {
  return (
    <>
    <MetaData meta={metaInformation} />
      {/* Main Header Nav */}
      <DefaultHeader />
      {/* End Main Header Nav */}

      {/* Mobile Nav  */}
      <MobileMenu />
      {/* End Mobile Nav  */}

      {/* Our Contact With Map */}
      
      {/* End Our Contact With Map */}

      {/* Start Our Contact Form */}
      <section>
        <div className="container">
          <div className="row d-flex align-items-end">
            <div className="col-lg-5 position-relative">
              <div className="home8-contact-form default-box-shadow1 bdrs12 bdr1 p30 mb30-md bgc-white">
                <h4 className="form-title mb25">
                  ¿Tienes preguntas? ¡Contáctanos!
                </h4>
                <Form />
              </div>
            </div>
            {/* End .col */}
            {/* End .col */}
          </div>
        </div>
      </section>
      {/* End Our Contact Form */}

      {/* Visit our Office */}
     

      <section className="p-0">
      <h2 className="title" align="center">Visita nuestra oficina</h2>

      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.069019756204!2d-70.3883312!3d-23.5659645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x96ae2a5215aa75e9%3A0x85790f5ffc7b673c!2sSierra%20Nevada%2012961%2C%20Antofagasta!5e0!3m2!1ses-419!2scl!4v1740069249791!5m2!1ses-419!2scl" width="600" height="450" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </section>
      {/* End Visit our Office */}

      {/* Start Our Footer */}
      <section className="footer-style1 pt60 pb-0">
        <Footer />
      </section>
      {/* End Our Footer */}
    </>
  );
};

export default Contact;
