import listings from "@/data/listings";

const ProperytyDescriptions = (id) => {

  const data = listings.filter((elm) => elm.id == id)[3] || listings[3];

  return (
    <>
      <p className="text mb5">
        {data.description}
      </p>
      
    </>
  );
};

export default ProperytyDescriptions;
