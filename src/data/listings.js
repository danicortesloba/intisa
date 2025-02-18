const listings = [
  {

    id: 1,
    image: "/public/images/seminario/seminarioportada.jpg",
    title: "Departamento Avenida Seminario",
    city:'Santiago',location: "Providencia, Región Metropolitana",
    bed: "3",
    bath: "3",
    sqft: 120,
    price: "7.280 UF",
    forRent: false,
    tags: ["Apartment", "Providencia", "Santiago"],
    propertyType:'Departamento',yearBuilding:1980,
    featured:true,
    lat: -33.4433403,
        long: -70.62957,
    features:[
      
      "Piso parqué",
      "Remodelado",
      "Cocina cerrada"
  ],
  gastos: "$45.000"
  },
  {

    id: 2,
    image: "/public/images/gandarillas/gandarillasportada.jpg",
    title: "Departamento Gandarillas",
    city:'Región Metropolitana',location: "Playa Blanca, Antofagasta, Segunda Región",
    lat: -23.680304,
    long: -70.412552,
    bed: "4",
    bath: "2",
    sqft: 120,
    price: "7.280 UF",
    propertyType:'Apartment',yearBuilding:2000,
    forRent: false,
   
    tags: ["Apartment", "Playa Blanca", "Antofagasta"],
    features:[
      "Patio",
      "Cocina cerrada",
  ],
  gastos: "25.000"
  },
  {
    id: 3,
    image: "/images/listings/g1-3.jpg",
    title: "Chicureo",
    ciudad:'Santiago',location:"Chicureo, Colina, Región Metropolitana",

    lat: 29.38690953884771,
    long: -94.91651439187791,
    bed: "0",
    bath: "0",
    sqft: 9600,
    price: "11.000 UF",
     propertyType:'Terreno',yearBuilding:2019,
    forRent: true,
    tags: ["terreno", "chicureo"],
    features:[
      "Terreno",
      "Condominio",
  ],
  gastos: "$30.000"
  },
  {
    id: 4,
    image: "/images/listings/g1-4.jpg",
    title: "Mall Plaza Antofagasta",
    city:'Antofagasta',location: "Antofagasta, II Región",
    lat: 39.62158564223682,
    long: -80.15625432727268,

    bed: "3",
    bath: "2",
    sqft: 70,
    price: "7.000 UF",
    forRent: false,
     propertyType:'Apartment',yearBuilding:2017,
    tags: [ "apartments", "house"],
    featured:true,
    features:[
      "Amoblado",
      "Piscina",
      "Bar",
  ],
  gastos: "$30.000"
  }
];

export default listings
