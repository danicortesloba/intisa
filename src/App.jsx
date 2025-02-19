import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "@/components/common/ScrollTop";
import Aos from "aos";
import "aos/dist/aos.css";
import "../public/scss/main.scss";
import { useEffect } from "react";
import Home_V2 from "./pages/homes/home-v2";

import BannerSearchV1 from "./pages/listings/(grid-view)/banner-search-v1";
import BannerSearchV2 from "./pages/listings/(grid-view)/banner-search-v2";
import GridDefault from "./pages/listings/(grid-view)/grid-default";
import GridFull1ColV1 from "./pages/listings/(grid-view)/grid-full-1-col-v1";
import GridFull1ColV2 from "./pages/listings/(grid-view)/grid-full-1-col-v2";
import GridFull2Col from "./pages/listings/(grid-view)/grid-full-2-col";
import GridFull3Col from "./pages/listings/(grid-view)/grid-full-3-col";
import GridFull4Col from "./pages/listings/(grid-view)/grid-full-4-col";

import ListV1All from "./pages/listings/(list-view)/list-all-style";
import HeaderMapStyle from "./pages/listings/(map-style)/header-map-style";
import MapV1 from "./pages/listings/(map-style)/map-v1";
import MapV2 from "./pages/listings/(map-style)/map-v2";
import MapV3 from "./pages/listings/(map-style)/map-v3";
import MapV4 from "./pages/listings/(map-style)/map-v4";


import About from "./pages/pages/about";

import Contact from "./pages/pages/contact";

import NotFound from "./pages/not-found";

import Seminario from "./pages/property/seminario";


import ListV1 from "./pages/listings/(list-view)/list-v1";
import ScrollTopBehaviour from "./components/common/ScrollTopBehaviour";

if (typeof window !== "undefined") {
  import("bootstrap");
}

function App() {
  useEffect(() => {
    Aos.init({
      duration: 1200,
      once: true,
    });
  }, []);

  return (
    <>
      <div className="wrapper ovh">
        <BrowserRouter>
          <ScrollTopBehaviour />
          <Routes>
            <Route path="/">
              <Route index element={<Home_V2 />} />

              <Route path="home-v2" element={<Home_V2 />} />
              

              <Route path="grid-default" element={<GridDefault />} />
              <Route path="grid-full-3-col" element={<GridFull3Col />} />
              <Route path="grid-full-4-col" element={<GridFull4Col />} />
              <Route path="grid-full-2-col" element={<GridFull2Col />} />
              <Route path="grid-full-1-col-v1" element={<GridFull1ColV1 />} />
              <Route path="grid-full-1-col-v2" element={<GridFull1ColV2 />} />
              <Route path="banner-search-v1" element={<BannerSearchV1 />} />
              <Route path="banner-search-v2" element={<BannerSearchV2 />} />
              <Route path="list-all-style" element={<ListV1All />} />
              <Route path="list-v1" element={<ListV1 />} />

              <Route path="header-map-style" element={<HeaderMapStyle />} />
              <Route path="map-v1" element={<MapV1 />} />
              <Route path="map-v2" element={<MapV2 />} />
              <Route path="map-v3" element={<MapV3 />} />
              <Route path="map-v4" element={<MapV4 />} />



              <Route path="about" element={<About />} />
              <Route path="contact" element={<Contact />} />
            
              <Route path="not-found" element={<NotFound />} />
        

              <Route path="seminario" element={<Seminario />} />
      

              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
        <ScrollToTop />
      </div>
    </>
  );
}

export default App;
