const listings = [
  {

    id: 1,
    image: "/images/seminario/seminarioportada.jpg",
    title: "Departamento Avenida Seminario",
    city:'Santiago',location: "Providencia, Región Metropolitana",
    región: "Metropolitana",
    comuna: "Providencia",
    barrio: "Barrio Italia",
    dirección: "Seminario 181, Providencia, Santiago",
    bed: "3",
    bath: "3",
    sqft: 120,
    price: "7.250 UF",
    forRent: false,
    tags: ["Apartment", "Providencia", "Santiago"],
    propertyType:'Departamento',yearBuilding:1980,
    featured:true,
    lat: -33.4433403,
        long: -70.6321314,
    features:[
      
      "Piso parqué",
      "Remodelado",
      "Cocina cerrada"
  ],
  gastos: "$45.000",
  link: "/seminario",
  description:"En venta amplio e iluminado departamento de tres dormitorios y tres baños recientemente remodelado. Fantástica ubicación a tres cuadras del Barrio Italia y a dos cuadras del metro. Cuenta con preciosos pisos parquet originales en fantástico estado. Comedor y living independientes muy amplios. El espacio asignado para el living se puede usar tranquilamente como living/comedor, lo que podría dejar el espacio comedor para una amplia oficina. Dos de las habitaciones tienen closets muy amplios y el tercer dormitorio tiene baño ensuite. La cocina tiene espacio para comedor de diario. Al estar en un cuarto piso todo el departamento cuenta con lindas vistas despejadas. Las ventanas son termopanel. Cuenta con una pequeña bodega desarmable en el patio del edificio. 120m2 totales. Gastos comunes $45,000 mensuales"
  },
  {

    id: 2,
    image: "/images/gandarillas/gandarillasportada.jpg",
    title: "Departamento Gandarillas",
    city:'Antofagasta',location: "Playa Blanca, Antofagasta, Segunda Región",
    región: "Antofagasta",
    comuna: "Antofagasta",
    barrio: "Playa Blanca",
    dirección: "Gandarillas 564, Antofagasta",
    lat: -23.680304,
    long: -70.412552,
    bed: "4",
    bath: "2",
    sqft: 120,
    price: "7.400 UF",
    propertyType:'Departamento',yearBuilding:2000,
    forRent: false,
   
    tags: ["Apartment", "Playa Blanca", "Antofagasta"],
    features:[
      "Patio",
      "Cocina cerrada",
  ],
  gastos: "25.000",
  link: "/gandarillas",
  description: "En venta amplio e independiente departamento de cuatro dormitorios y dos baños en Playa blanca. Fantástica ubicación a dos cuadras de Parque Croacia y tres cuadras de la Universidad Católica del Norte. Barrio residencial tranquilo. Este iluminado departamento se encuentra en un primer piso elevado, lo que otorga vista al mar desde el living. Cuenta con estacionamiento con portón independiente para un vehículo, como también un patio y lavandería independiente. 120m2 totales. Gastos comunes $25,000 mensuales"
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
    image: "/images/mall/mallbanner.jpg",
    title: "Mall Plaza Antofagasta",
    city:'Antofagasta',location: "Antofagasta, II Región",
    lat: -23.6464797,
    long: -70.4020678,
    región: "Antofagasta",
    comuna: "Antofagasta",
    barrio: "Mall Plaza",
    dirección: "Av. Balmaceda 2355, Antofagasta",
    bed: "2",
    bath: "2",
    sqft: 76,
    price: "7.100 UF",
    forRent: false,
     propertyType:'Departamento',yearBuilding:2017,
    tags: [ "apartments", "house"],
    featured:true,
    features:[
      "Amoblado",
      "Piscina",
      "Bar",
  ],
  gastos: "$30.000",
  link: "/mallplaza",
  description:"En venta moderno y seguro departamento amoblado en inigualable ubicación, al lado del Mall Plaza Antofagasta y a pasos del centro. Cuenta con dos dormitorios y dos baños. Ambos en suite y con espacio para un escritorio. Amplio balcón con una linda vista desde el piso 15. También cuenta con un estacionamiento y bodega. Fantástica oportunidad de inversión o para llegar y mudarse. Completamente equipado con muebles de primer nivel. El edificio cuenta con conserjería 24/7, piscina con preciosa vista, lavandería, restaurante y bar en el piso 28. El primer piso cuenta con boulevard comercial el que incluye un gimnasio. 76m2 totales. Gastos comunes 180,000 mensuales"
  }
];

export default listings
