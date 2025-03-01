

import listings from "@/data/listings";


const PropertyHeader = ({ id }) => {
  const data = listings.filter((elm) => elm.id == id)[0] || listings[0];
  return (
    <>
      <div className="col-lg-8">
        <div className="single-property-content mb30-md">
          <h2 className="sp-lg-title">{data.title}</h2>
          <div className="pd-meta mb15 d-md-flex align-items-center">
            <p className="text fz15 mb-0 bdrr1 pr10 bdrrn-sm">
              {data.location}
            </p>
            <a
              className="ff-heading text-thm fz15 bdrr1 pr10 ml0-sm ml10 bdrrn-sm"
              href="#"
            >
              <i className="fas fa-circle fz10 pe-2" />
              En {data.forRent ? "alquiler" : "venta"}
            </a>
           
            
          </div>
          <div className="property-meta d-flex align-items-center">
            <a className="text fz15" href="#">
              <i className="flaticon-bed pe-2 align-text-top" />
              {data.bed} dormitorios
            </a>
            <a className="text ml20 fz15" href="#">
              <i className="flaticon-shower pe-2 align-text-top" />
              {data.bath} baños
            </a>
            <a className="text ml20 fz15" href="#">
              <i className="flaticon-expand pe-2 align-text-top" />
              {data.sqft} m2
            </a>
          </div>
        </div>
      </div>
      {/* End .col-lg--8 */}

      <div className="col-lg-4">
        <div className="single-property-content">
          <div className="property-action text-lg-end">
            
            <h3 className="price mb-0">{data.price}</h3>
          </div>
        </div>
      </div>
      {/* End .col-lg--4 */}
    </>
  );
};

export default PropertyHeader;
