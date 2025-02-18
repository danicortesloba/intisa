import {
  homeItems,
  antofagasta,
  santiago
} from "@/data/navItems";
import { Link} from "react-router-dom";
import {useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const MainMenu = () => {
  const { pathname } = useLocation()

  const [topMenu, setTopMenu] = useState("");



  useEffect(() => {
    homeItems.forEach((elm) => {
      if (elm.href.split("/")[1] == pathname.split("/")[1]) {
        setTopMenu("home");
      }
    });
    santiago.forEach((elm) => {
      if (elm.href.split("/")[1] == pathname.split("/")[1]) {
        setTopMenu("santiago");
      }
    });
    antofagasta.forEach((elm) => {
      if (elm.href.split("/")[1] == pathname.split("/")[1]) {
        setTopMenu("antofagasta");
      }
    });

  
  }, [pathname]);

  const handleActive = (link) => {
    if (link.split("/")[1] == pathname.split("/")[1]) {
      return "menuActive";
    }
  };
  return (
    <ul className="ace-responsive-menu">
      <li className="visible_list dropitem">
        <a className="list-item" href="#">
          <span className={topMenu == "home" ? "title menuActive" : "title"}>
            Inicio
          </span>
          <span className="arrow"></span>
        </a>
        {/* Level Two*/}
        <ul className="sub-menu">
          {homeItems.map((item, index) => (
            <li key={index}>
              <Link className={`${handleActive(item.href)}`} to={item.href}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </li>
      {/* End homeItems */}
      <li className="visible_list dropitem">
        <a className="list-item" href="#">
          <span className={topMenu == "home" ? "title menuActive" : "title"}>
            Santiago
          </span>
          <span className="arrow"></span>
        </a>
        {/* Level Two*/}
        <ul className="sub-menu">
          {santiago.map((item, index) => (
            <li key={index}>
              <Link className={`${handleActive(item.href)}`} to={item.href}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </li>

      <li className="visible_list dropitem">
        <a className="list-item" href="#">
          <span className={topMenu == "home" ? "title menuActive" : "title"}>
            Antofagasta
          </span>
          <span className="arrow"></span>
        </a>
        {/* Level Two*/}
        <ul className="sub-menu">
          {antofagasta.map((item, index) => (
            <li key={index}>
              <Link className={`${handleActive(item.href)}`} to={item.href}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </li>
    
      {/* End listings */}

     
      {/* End property Items */}

     
      {/* End blog Items */}

      
      {/* End pages Items */}
    </ul>
  );
};

export default MainMenu;
