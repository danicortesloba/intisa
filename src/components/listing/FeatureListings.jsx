

import { Link } from "react-router-dom";

const FeaturedListings = ({data,colstyle}) => {
  return (
    <>
      {data.map((listing) => (
        <div className={` ${colstyle ? 'col-sm-12':'col-md-6 '}  `} key={listing.id}>
          <div className={colstyle ? "listing-style1 listCustom listing-type stack" : "listing-style1 stack"} >
            <div className="list-thumb" >
              <img
                
                className="w-100  cover"
                style={{height:'354px'}}
                src={listing.image}
                alt="listings"
              />
              <div className="sale-sticker-wrap">
                {!listing.forRent && (
                  <div className="list-tag fz12">
                    <span className="flaticon-electricity me-2" />
                    DESTACADO
                  </div>
                )}
              </div>

              <div className="list-price">
                {listing.price} 
              </div>
            </div>
            <div className="list-content">
              <h6 className="list-title">
                <Link to={`/single-v4/${listing.id}`}>{listing.title}</Link>
              </h6>
              <p className="list-text">{listing.location}</p>
              <div className="list-meta d-flex align-items-center">
                <a href="#">
                  <span className="flaticon-bed" /> {listing.bed} dormitorios
                </a>
                <a href="#">
                  <span className="flaticon-shower" /> {listing.bath} baños
                </a>
                <a href="#">
                  <span className="flaticon-expand" /> {listing.sqft} m2
                </a>
              </div>
              <hr className="mt-2 mb-2" />
              <div className="list-meta2 d-flex justify-content-between align-items-center">
                
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default FeaturedListings;
