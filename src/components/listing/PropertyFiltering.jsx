import listings from "@/data/listings";
import FeaturedListings from "./FeatureListings";

export default function PropertyFiltering() {
  
  return (
    <section className="pt0 pb90 bgc-f7">
      <div className="container">
        <div className="row">
          <FeaturedListings colstyle={"col-12"} data={listings} />
        </div>
        {/* End .row */}

        
      </div>
      {/* End .container */}
    </section>
  );
}
