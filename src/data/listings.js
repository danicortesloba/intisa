const listings = [
  {

    id: 1,
    image: "/public/images/seminario/seminarioportada.jpg",
    title: "Departamento Avenida Seminario",
    city:'Santiago',location: "Providencia, Región Metropolitana",
    región: "Metropolitana",
    comuna: "Providencia",
    barrio: "Barrio Italia",
    dirección: "Seminario 181",
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
  gastos: "$45.000",
  link: "/seminario",
  description:"En venta amplio e iluminado departamento de cuatro dormitorios y tres baños recientemente remodelado. Fantástica ubicación a tres cuadras del Barrio Italia y a dos cuadras del metro. Cuenta con preciosos pisos parquet originales en fantástico estado. Dos de las habitaciones tienen closets muy amplios. La cocina tiene espacio para comedor de diario. Al estar en un cuarto piso todo el departamento cuenta con lindas vistas despejadas. Las ventanas son termopanel. Cuenta con una pequeña bodega desarmable en el patio del edificio.  120m2 totales. Gastos Comunes $45,000"
  },
  {

    id: 2,
    image: "/public/images/gandarillas/gandarillasportada.jpg",
    title: "Departamento Gandarillas",
    city:'Antofagasta',location: "Playa Blanca, Antofagasta, Segunda Región",
    región: "Antofagasta",
    comuna: "Antofagasta",
    barrio: "Playa Blanca",
    dirección: "Gandarillas",
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
  gastos: "25.000",
  link: "/gandarillas",
  description: "En venta amplio e independiente departamento de cuatro dormitorios y dos baños en Playa blanca. Fantástica ubicación a dos cuadras de Parque Croacia y tres cuadras de la Universidad Católica del Norte. Barrio residencial tranquilo. Este iluminado departamento se encuentra en un primer piso elevado, lo que otorga vista al mar desde el living. Cuenta con estacionamiento con portón independiente para un vehículo, como también un patio y lavandería independiente. 120m2 totales-90m2 interior. Gastos comunes $25,000 mensual."
  },
  {
    id: 3,
    image: "/images/listings/g1-3.jpg",
    title: "Chicureo",
    ciudad:'Santiago',location:"Chicureo, Colina, Región Metropolitana",
    región: "Metropolitana",
    comuna: "Colina",
    barrio: "Chicureo",
    dirección: "X",

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
  gastos: "$30.000",
  link: "/chicureo",
  description:"To come"
  },
  {
    id: 4,
    image: "/images/listings/g1-4.jpg",
    title: "Mall Plaza Antofagasta",
    city:'Antofagasta',location: "Antofagasta, II Región",
    lat: 39.62158564223682,
    long: -80.15625432727268,
    región: "Antofagasta",
    comuna: "Antofagasta",
    barrio: "Mall Plaza",
    dirección: "X",
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
  gastos: "$30.000",
  link: "/mallplaza",
  description:"To come"
  }
];

export default listings
