/* React */
import React from "react";

/* Components */
import Window from "../windowWrapper/window";

/* Image */
import imagePath from "../../img/dummyApps/dummy_calc.png";

const Calculator = () => {
  return (
    <Window appName="Calculator">
      <img src={imagePath} alt="calculator" draggable={false} />
    </Window>
  );
};

export default Calculator;
