import listings from "@/data/listings";


const PropertyAddress = (id) => {
  const data = listings.filter((elm) => elm.id == id)[0] || listings[0];


  return (
    <>
      
        <div
          className="col-md-6 col-lg-6"
        >
          <div className="d-flex justify-content-between">
            <div className="pd-list">
              <p className="fw600 mb10 ff-heading dark-color">Región</p>
              <p className="fw600 mb10 ff-heading dark-color">Ciudad</p>
              <p className="fw600 mb-0 ff-heading dark-color">Comuna</p>
            </div>
            <div className="pd-list">
              <p className="text mb10">{data.región}</p>
              <p className="text mb10">{data.city}</p>
              <p className="text mb-0">{data.comuna}</p>
            </div>
          </div>
        </div>
        <div
          className="col-md-6 col-lg-6"
        >
          <div className="d-flex justify-content-between">
            <div className="pd-list">
              <p className="fw600 mb10 ff-heading dark-color">Barrio</p>
              <p className="fw600 mb10 ff-heading dark-color">Dirección</p>
            </div>
            <div className="pd-list">
              <p className="text mb10">{data.barrio}</p>
              <p className="text mb10">{data.dirección}</p>
            </div>
          </div>
        </div>
      
      {/* End col */}

      <div className="col-md-12">
        <iframe
          className="position-relative bdrs12 mt30 h250"
          loading="lazy"
          src={`https://maps.google.com/maps?q=${data.dirección}&t=m&z=14&output=embed&iwloc=near`}
          title={data.dirección}
          aria-label={data.dirección}
        />
      </div>
      {/* End col */}
    </>
  );
};

export default PropertyAddress;
