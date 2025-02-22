import GalleryBox from "./GalleryBox";


const PropertyGallery = ({id}) => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            
          </div>
        </div>
      </div>
      {/* End container */}

      <div className="ps-v4-hero-tab">
        <div className="tab-content overflow-visible" id="pills-tabContent2">
          <div
            className="tab-pane fade show active"
            id="pills-home"
            role="tabpanel"
            aria-labelledby="pills-home-tab"
          >
            <div className="container">
              <div className="row" data-aos="fade-up" data-aos-delay="300">
                <div className="col-lg-12">
                  <div className="ps-v4-hero-slider">
                    <GalleryBox id={id} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* End tab-pane gallery */}

          
          {/* End tab-pane map */}

          
          {/* End tab-pane real location */}
        </div>
        {/* End tab-content */}
      </div>
    </>
  );
};

export default PropertyGallery;
