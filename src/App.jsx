import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "@/components/common/ScrollTop";
import Aos from "aos";
import "aos/dist/aos.css";
import "../public/scss/main.scss";
import { useEffect } from "react";
import Home_V2 from "./pages/homes/home-v2";
import GridFull2Col from "./pages/listings";
import About from "./pages/pages/about";
import Contact from "./pages/pages/contact";
import NotFound from "./pages/not-found";
import Seminario from "./pages/property/seminario";
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
              <Route path="inicio" element={<Home_V2 />} />
              <Route path="propiedades" element={<GridFull2Col />} />
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
