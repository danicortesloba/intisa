
import { Link } from "react-router-dom";
import ContactMeta from "./ContactMeta";
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
                 
                  className="mb30"
                  src="/public/images/intisa.png"
                  alt=""
                />
              </Link>
              <ContactMeta />
              
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
