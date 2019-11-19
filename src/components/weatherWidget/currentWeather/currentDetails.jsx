import React from "react";
import DetailsIcon from "./detailsIcon";

const CurrentWeatherDetails = () => {
  return (
    <div>
      <h3>Details</h3>
      <DetailsIcon iconType="humidity" />
      {/* TODO: I must use a new umbrella icon which fits mush more better to the current elements */}
      <DetailsIcon iconType="umbrella" />
      <DetailsIcon iconType="wind" />
    </div>
  );
};

export default CurrentWeatherDetails;
