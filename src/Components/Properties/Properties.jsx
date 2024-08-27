import "./Properties.css";
import PropertyCard from "../PropertyCard/PropertyCard";
import Title from "./../Title/Title";
 import Property1 from "./../../../public/images/property-01.jpg";
 import Property2 from "./../../../public/images/property-02.jpg";
 import Property3 from "./../../../public/images/property-03.jpg";
 import Property4 from "./../../../public/images/property-04.jpg";
 import Property5 from "./../../../public/images/property-05.jpg";
 import Property6 from "./../../../public/images/property-06.jpg";

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
    type: "villa"
  },
  {
    image: Property2,
    name: "Luxury Villa",
    price: "$1.180.000",
    address: "18 New Street Miami, OR 97219",
    bedrooms: 8,
    bathrooms: 8,
    area: "545m2",
    floor: 8,
    parking: 8,
    type: "villa"
  },
  {
    image: Property3,
    name: "Luxury Villa",
    price: "$1.460.000",
    address: "18 New Street Miami, OR 97219",
    bedrooms: 8,
    bathrooms: 8,
    area: "545m2",
    floor: 8,
    parking: 8,
    type: "villa"
  },
  {
    image: Property4,
    name: "Apartment",
    price: "$584.500",
    address: "18 New Street Miami, OR 97219",
    bedrooms: 8,
    bathrooms: 8,
    area: "545m2",
    floor: 8,
    parking: 8,
    type: "appartment"
  },
  {
    image: Property5,
    name: "Penthouse",
    price: "$925.600",
    address: "18 New Street Miami, OR 97219",
    bedrooms: 8,
    bathrooms: 8,
    area: "545m2",
    floor: 8,
    parking: 8,
    type: "Penthouse"
  },
  {
    image: Property6,
    name: "Modern Condo",
    price: "$450.000",
    address: "18 New Street Miami, OR 97219",
    bedrooms: 8,
    bathrooms: 8,
    area: "545m2",
    floor: 8,
    parking: 8,
    type: "Penthouse"
  },
];

const Properties = ({ properties = propertiesArray , showTitle }) => {
  
  return (
    <div className="Mk-Sixth">
      {showTitle && (
        <div className="Mk-SixthTitle">
          <Title
            subTitle="Properties"
            Title="Best Appartment & Sea View"
            className="Mk-sixthTitleEdit"
          />
        </div>
      )}
       <div className="Mk-Cards">
        {Array.isArray(properties) && properties.map((property, index) => (
          <PropertyCard key={index} property={property} />
        ))}
      </div>
    </div>
  );
};


export default Properties;
