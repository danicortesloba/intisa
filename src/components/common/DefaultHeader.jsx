import MainMenu from "@/components/common/MainMenu";
import { Link } from "react-router-dom";
import  { useEffect, useState } from "react";

const DefaultHeader = () => {
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 10) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, []);

  return (
    <>
      <header
        className={`header-nav nav-homepage-style light-header menu-home4 main-menu ${
          navbar ? "sticky slideInDown animated" : ""
        }`}
      >
        <div className="row flexRow">

          <div className="col-auto">
        <nav className="posr">
          <div className="container posr menu_bdrt1">
            <div className="row align-items-center justify-content-between">
              <div className="col-auto">
                <div className="d-flex align-items-center justify-content-between">
                  <div className="logos mr40">
                    <Link className="header-logo logo1" to="/">
                      <img
                        
                        src="/images/Intisa.png"
                        alt="Header Logo"
                        height={50}
                        width={50}
                      />
                    </Link>
                    <Link className="header-logo logo2" to="/">
                      <img
                       
                        src="/images/Intisa.png"
                        alt="Header Logo"
                        height={70}
                        width={70}
                      />
                    </Link>
                  </div>
                  {/* End Logo */}

                  <MainMenu />
                  {/* End Main Menu */}
                </div>
              </div>
              {/* End .col-auto */}

              
              {/* End .col-auto */}
            </div>
            {/* End .row */}
          </div>
        </nav>
        </div>

        <div className="col-auto">
                <div className="d-flex align-items-center">
                  <a
                    className=" d-flex align-items-center me-3 "
                    href="tel:+56978621643"
                  >
                    <i className="far fa-phone fz16 me-2"></i>{" "}
                    <span className="d-none d-xl-block">+56978621643</span>
                  </a>
                 
                
                
                   

                   
                </div>
        </div>

        </div>
        
      </header>
      

      
    </>
  );
};

export default DefaultHeader;
