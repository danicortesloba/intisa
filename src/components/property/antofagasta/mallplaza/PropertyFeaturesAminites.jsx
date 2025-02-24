import listings from "@/data/listings";


const PropertyFeaturesAminites = (id) => {
  const data = listings.filter((elm) => elm.id == id)[3] || listings[3];

  return (
    <>
  
        <div  className="col-sm-6 col-md-4">
          <div className="pd-list">
            {data.features.map((item, index) => (
              <p key={index} className="text mb10">
                <i className="fas fa-circle fz6 align-middle pe-2" />
                {item}
              </p>
            ))}
          </div>
        </div>
 
    </>
  );
};

export default PropertyFeaturesAminites;
