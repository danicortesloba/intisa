
import { Link } from "react-router-dom";
import ContactMeta from "./ContactMeta";
import AppWidget from "./AppWidget";
import Copyright from "./Copyright";

const Footer = () => {
  return (
    <>
      <div className="container">
        <div className="row" align="center">
          <div>
            <div className="footer-widget mb-4 mb-lg-5">
              <Link className="footer-logo" to="/">
                <img
                 
                  className="mb40"
                  src="/public/images/intisa.png"
                  alt=""
                />
              </Link>
              <ContactMeta />
              <AppWidget />
              <div className="social-widget">
                <h6 className="text-white mb20">Follow us on social media</h6>
              </div>
            </div>
          </div>
          {/* End .col-lg-5 */}

         
        </div>
        {/* End .row */}
      </div>
      {/* End .container */}

      <Copyright />
      {/* End copyright */}
    </>
  );
};

export default Footer;
