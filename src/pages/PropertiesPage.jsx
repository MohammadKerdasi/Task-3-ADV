import NavBar from "../Components/NavBar/NavBar";
import Head from "../Components/Head/Head";
import HeroBg from "../Components/HeroBg/HeroBg";
import FilterButtons from "../Components/FilterButtons/FilterButtons";
import Property1 from "./../../public/images/property-01.jpg";
import Property2 from "./../../public/images/property-02.jpg";
import Property3 from "./../../public/images/property-03.jpg";
import Property4 from "./../../public/images/property-04.jpg";
import Property5 from "./../../public/images/property-05.jpg";
import Property6 from "./../../public/images/property-06.jpg";
import Properties from "../Components/Properties/Properties";
import { useState } from "react";
import Footer from "../Components/Footer/Footer";
import './../Components/PropertiesPage.css'
import PagesNumber from "../Components/PagesNumber/PagesNumber";

const propertiesArray = [
  {
    image: Property1,
    name: "Luxury Villa",
    price: "$2.264.000",
    address: "18 New Street Miami, OR 97219",
    bedrooms: 8,
    bathrooms: 8,
    area: "545m2",
    floor: 8,
    parking: 8,
    type: "villa",
  },
  {
    image: Property2,
    name: "Luxury Villa",
    price: "$2.264.000",
    address: "18 New Street Miami, OR 97219",
    bedrooms: 8,
    bathrooms: 8,
    area: "545m2",
    floor: 8,
    parking: 8,
    type: "villa",
  },
  {
    image: Property3,
    name: "Luxury Villa",
    price: "$2.264.000",
    address: "18 New Street Miami, OR 97219",
    bedrooms: 8,
    bathrooms: 8,
    area: "545m2",
    floor: 8,
    parking: 8,
    type: "penthouse",
  },
  {
    image: Property4,
    name: "Luxury Villa",
    price: "$1.180.000",
    address: "18 New Street Miami, OR 97219",
    bedrooms: 8,
    bathrooms: 8,
    area: "545m2",
    floor: 8,
    parking: 8,
    type: "villa",
  },
  {
    image: Property5,
    name: "Luxury Villa",
    price: "$1.460.000",
    address: "18 New Street Miami, OR 97219",
    bedrooms: 8,
    bathrooms: 8,
    area: "545m2",
    floor: 8,
    parking: 8,
    type: "Penthouse",
  },
  {
    image: Property6,
    name: "Apartment",
    price: "$584.500",
    address: "18 New Street Miami, OR 97219",
    bedrooms: 8,
    bathrooms: 8,
    area: "545m2",
    floor: 8,
    parking: 8,
    type: "appartment",
  },
  {
    image: Property3,
    name: "Penthouse",
    price: "$925.600",
    address: "18 New Street Miami, OR 97219",
    bedrooms: 8,
    bathrooms: 8,
    area: "545m2",
    floor: 8,
    parking: 8,
    type: "appartment",
  },
  {
    image: Property2,
    name: "Modern Condo",
    price: "$450.000",
    address: "18 New Street Miami, OR 97219",
    bedrooms: 8,
    bathrooms: 8,
    area: "545m2",
    floor: 8,
    parking: 8,
    type: "Penthouse",
  },
  {
    image: Property3,
    name: "Modern Condo",
    price: "$450.000",
    address: "18 New Street Miami, OR 97219",
    bedrooms: 8,
    bathrooms: 8,
    area: "545m2",
    floor: 8,
    parking: 8,
    type: "appartment",
  },
];

const PropertiesPage = () => {
  const [filter, setFilter] = useState("all");

  const handleFilter = (type) => {
    setFilter(type);
  };

  const filteredProperties = propertiesArray.filter(
    (property) => filter === "all" || property.type.toLowerCase() === filter.toLowerCase()
  );

  return (
    <>
      <Head />
      <NavBar />
      <HeroBg subTitle="HOME / PROPERTIES" Title=" PROPERTIES" />
      <FilterButtons onFilterChange={handleFilter} />
      <Properties properties={filteredProperties} showTitle={false} />
      <PagesNumber/>
      <Footer className='Mk-SecCopyRight' />
    </>
  );
};

export default PropertiesPage;
