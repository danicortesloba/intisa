import listings from "@/data/listings";


const OverView = ({id}) => {
  const data = listings.filter((elm) => elm.id == id)[3] || listings[3];
  const overviewData = [
    {
      icon: "flaticon-bed",
      label: "Piezas",
      value: data.bed,
    },
    {
      icon: "flaticon-shower",
      label: "Baños",
      value: data.bath,
    },
   
    {
      icon: "flaticon-expand",
      label: "Metros 2",
      value: data.sqft,
      xs: true,
    },
    {
      icon: "flaticon-home-1",
      label: "Tipo de propiedad",
      value: data.propertyType,
    },
  ];
  
 
  return (
    <>
      {overviewData.map((item, index) => (
        <div
          key={index}
          className={`col-sm-6 col-lg-6 ${item.xs ? "mb25-xs" : "mb25"}`}
        >
          <div className="overview-element d-flex align-items-center">
            <span className={`icon ${item.icon}`} />
            <div className="ml15">
              <h6 className="mb-0">{item.label}</h6>
              <p className="text mb-0 fz15">{item.value}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default OverView;
