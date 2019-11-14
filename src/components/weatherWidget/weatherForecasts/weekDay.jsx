import React from "react";
import moment from "moment";

const WeekDay = props => {
  return <h3>{moment(props.date).format("dddd")}</h3>;
};

export default WeekDay;
