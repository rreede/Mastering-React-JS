function TravelItem(props) {
  return (
    <div className="TravelItem">
      <img className="mainCountryImage" src={props.img} />
      <div>
        <span>
          <p className="country">{props.country}</p>

          <a href="{props.googleMaps}" target="_blank">
            View on Google Maps
          </a>
        </span>
        <p>
          <h2>{props.place}</h2>
        </p>
        <p className="startEndDate">
          {props.startDate} - {props.endDate}
        </p>
        <p className="description">{props.description}</p>
      </div>
    </div>
  );
}

export default TravelItem;
