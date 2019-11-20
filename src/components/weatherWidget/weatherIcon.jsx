import React from "react";
import weather_icon_0 from "../../img/weather_icon_0.png";
import weather_icon_01 from "../../img/weather_icon_01.png";
import weather_icon_02 from "../../img/weather_icon_02.png";
import weather_icon_03 from "../../img/weather_icon_03.png";
import weather_icon_04 from "../../img/weather_icon_04.png";
import weather_icon_05 from "../../img/weather_icon_05.png";
import weather_icon_06 from "../../img/weather_icon_06.png";
import weather_icon_08 from "../../img/weather_icon_08.png";
import weather_icon_11 from "../../img/weather_icon_11.png";
import weather_icon_12 from "../../img/weather_icon_12.png";
import weather_icon_13 from "../../img/weather_icon_13.png";
import weather_icon_14 from "../../img/weather_icon_14.png";
import weather_icon_15 from "../../img/weather_icon_15.png";
import weather_icon_17 from "../../img/weather_icon_17.png";
import weather_icon_19 from "../../img/weather_icon_19.png";
import weather_icon_20 from "../../img/weather_icon_20.png";
import weather_icon_21 from "../../img/weather_icon_21.png";
import weather_icon_23 from "../../img/weather_icon_23.png";
import weather_icon_28 from "../../img/weather_icon_28.png";
import weather_icon_29 from "../../img/weather_icon_29.png";
import weather_icon_32 from "../../img/weather_icon_32.png";
import weather_icon_33 from "../../img/weather_icon_33.png";
import weather_icon_34 from "../../img/weather_icon_34.png";
import weather_icon_35 from "../../img/weather_icon_35.png";
import weather_icon_40 from "../../img/weather_icon_40.png";
import weather_icon_44 from "../../img/weather_icon_44.png";

/*TODO: I should change the statical image import to a webpack solution like this: 
https://stackoverflow.com/questions/53762640/how-to-import-all-images-from-a-folder-in-reactjs */

/* TODO: I would be great if I can define the size of weather icon based on incoming prop */

const WeatherIcon = props => {
  switch (props.weatherIconNumber) {
    case 1:
    case 2:
      return <img src={weather_icon_01} alt="weather_icon_01" />;
    case 3:
    case 4:
      return <img src={weather_icon_11} alt="weather_icon_11" />;
    case 5:
    case 6:
      return <img src={weather_icon_12} alt="weather_icon_12" />;
    case 7:
      return <img src={weather_icon_03} alt="weather_icon_03" />;
    case 8:
      return <img src={weather_icon_13} alt="weather_icon_13" />;
    case 11:
      return <img src={weather_icon_08} alt="weather_icon_11" />;
    case 12:
      return <img src={weather_icon_14} alt="weather_icon_14" />;
    case 13:
    case 14:
      return <img src={weather_icon_17} alt="weather_icon_17" />;
    case 15:
      return <img src={weather_icon_04} alt="weather_icon_04" />;
    case 16:
      return <img src={weather_icon_19} alt="weather_icon_19" />;
    case 17:
      return <img src={weather_icon_20} alt="weather_icon_20" />;
    case 18:
      return <img src={weather_icon_15} alt="weather_icon_15" />;
    case 19:
    case 21:
    case 32:
      return <img src={weather_icon_05} alt="weather_icon_05" />;
    case 20:
    case 43:
      return <img src={weather_icon_23} alt="weather_icon_23" />;
    case 22:
    case 23:
    case 44:
      return <img src={weather_icon_28} alt="weather_icon_28" />;
    case 24:
      return <img src={weather_icon_06} alt="weather_icon_06" />;
    case 25:
    case 29:
      return <img src={weather_icon_29} alt="weather_icon_29" />;
    case 26:
      return <img src={weather_icon_21} alt="weather_icon_21" />;
    case 30:
      return <img src={weather_icon_40} alt="weather_icon_40" />;
    case 31:
      return <img src={weather_icon_44} alt="weather_icon_44" />;
    case 33:
      return <img src={weather_icon_02} alt="weather_icon_02" />;
    case 34:
    case 35:
    case 36:
      return <img src={weather_icon_32} alt="weather_icon_32" />;
    case 37:
    case 38:
      return <img src={weather_icon_33} alt="weather_icon_33" />;
    case 39:
    case 40:
      return <img src={weather_icon_35} alt="weather_icon_35" />;
    case 41:
    case 42:
      return <img src={weather_icon_34} alt="weather_icon_34" />;
    default:
      return <img src={weather_icon_0} alt="weather_icon_0" />;
  }
};

export default WeatherIcon;
