import React from "react";
import weather_icon_0 from "../../img/weather_icon_0.png";
import weather_icon_01 from "../../img/weather_icon_01.png";
import weather_icon_02 from "../../img/weather_icon_02.png";
import weather_icon_03 from "../../img/weather_icon_03.png";
import weather_icon_04 from "../../img/weather_icon_04.png";
import weather_icon_05 from "../../img/weather_icon_05.png";
import weather_icon_06 from "../../img/weather_icon_06.png";
import weather_icon_07 from "../../img/weather_icon_07.png";
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
import weather_icon_45 from "../../img/weather_icon_45.png";

/*TODO: I should change the statical image import to a webpack solution like this: 
https://stackoverflow.com/questions/53762640/how-to-import-all-images-from-a-folder-in-reactjs */

/* TODO: I would be great if I can define the size of weather icon based on incoming prop */

const WeatherIcon = props => {
  const { style, weatherIconType } = props;

  switch (weatherIconType) {
    case 1:
    case 2:
      return <img src={weather_icon_01} style={style} alt="weather_icon_01" />;
    case 3:
    case 4:
      return <img src={weather_icon_11} style={style} alt="weather_icon_11" />;
    case 5:
    case 6:
      return <img src={weather_icon_12} style={style} alt="weather_icon_12" />;
    case 7:
      return <img src={weather_icon_03} style={style} alt="weather_icon_03" />;
    case 8:
      return <img src={weather_icon_13} style={style} alt="weather_icon_13" />;
    case 11:
      return <img src={weather_icon_08} style={style} alt="weather_icon_11" />;
    case 12:
      return <img src={weather_icon_14} style={style} alt="weather_icon_14" />;
    case 13:
    case 14:
      return <img src={weather_icon_17} style={style} alt="weather_icon_17" />;
    case 15:
      return <img src={weather_icon_04} style={style} alt="weather_icon_04" />;
    case 16:
      return <img src={weather_icon_19} style={style} alt="weather_icon_19" />;
    case 17:
      return <img src={weather_icon_20} style={style} alt="weather_icon_20" />;
    case 18:
      return <img src={weather_icon_15} style={style} alt="weather_icon_15" />;
    case 19:
    case 21:
    case 32:
      return <img src={weather_icon_05} style={style} alt="weather_icon_05" />;
    case 20:
    case 43:
      return <img src={weather_icon_23} style={style} alt="weather_icon_23" />;
    case 22:
    case 23:
    case 44:
      return <img src={weather_icon_28} style={style} alt="weather_icon_28" />;
    case 24:
      return <img src={weather_icon_06} style={style} alt="weather_icon_06" />;
    case 25:
    case 29:
      return <img src={weather_icon_29} style={style} alt="weather_icon_29" />;
    case 26:
      return <img src={weather_icon_21} style={style} alt="weather_icon_21" />;
    case 30:
      return <img src={weather_icon_40} style={style} alt="weather_icon_40" />;
    case 31:
      return <img src={weather_icon_44} style={style} alt="weather_icon_44" />;
    case 33:
      return <img src={weather_icon_02} style={style} alt="weather_icon_02" />;
    case 34:
    case 35:
    case 36:
      return <img src={weather_icon_32} style={style} alt="weather_icon_32" />;
    case 37:
    case 38:
      return <img src={weather_icon_33} style={style} alt="weather_icon_33" />;
    case 39:
    case 40:
      return <img src={weather_icon_35} style={style} alt="weather_icon_35" />;
    case 41:
    case 42:
      return <img src={weather_icon_34} style={style} alt="weather_icon_34" />;

    /* Until that point the icon numbers come from the API */

    case "Umbrella":
      return <img src={weather_icon_45} style={style} alt="weather_icon_45" />;
    case "Humidity":
      return <img src={weather_icon_07} style={style} alt="weather_icon_07" />;
    case "Wind":
      return <img src={weather_icon_05} style={style} alt="weather_icon_05" />;

    default:
      return <img src={weather_icon_0} style={style} alt="weather_icon_0" />;
  }
};

export default WeatherIcon;
