
const PropertyCard = ({property}) => {

    if (!property) {
        return <div>Property data is not available</div>;
      }

    return (
        
        <div className='Mk-SingleCard'>
            <img style={{ borderRadius: "8px" }} src={property.image} alt="" /> 
            <div className='Mk-PriceWithName'>
            <div className='Mk-proName'>{property.name}</div>
            <div className='Mk-Price'><b>{property.price}</b></div>
          </div>
          <b style={{ fontSize: "20px", marginBottom: "20px" }}>{property.address}</b>
          <div className='Mk-roomsInfo'>
            <p>Bedrooms: <b>{property.bedrooms}</b></p>
            <p>Bethrooms: <b>{property.bathrooms}</b></p>
            <p>Area: <b>{property.area}</b></p>
            <p>Floor: <b>{property.floor}</b></p>
            <p>Parking: <b>{property.parking}</b></p>
          </div>
          <div className='Mk-btnDiv'>
            <button className='Mk-VisitBtn'>Schedule a visit</button>
          </div>
        </div>
      );
    };

export default PropertyCard