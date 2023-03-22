import TravelItem from "./TravelItem";
import travelData from "./travelData";

function TravelItems(props) {
  const travelElements = travelData.map(function (travelItem) {
    return <TravelItem {...travelItem} />;
  });

  return <div className="TravelItems">{travelElements}</div>;
}

export default TravelItems;
