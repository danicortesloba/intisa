import listings from "@/data/listings";

const ProperytyDescriptions = (id) => {

  const data = listings.filter((elm) => elm.id == id)[2] || listings[2];

  return (
    <>
      <p className="text mb5">
        {data.description}
      </p>
      
    </>
  );
};

export default ProperytyDescriptions;
