/* React */
import React, { useContext } from "react";

/* Context */
import { ApplicationContext } from "../applicationContext";

/* Components */
import Window from "../windowWrapper/window";

/* Image */
import imagePath from "../../img/dummyApps/dummy_calc.png";

const Calculator = () => {
  const { orderOfApps, setAppOnTheTop } = useContext(ApplicationContext);

  let zIndexNum = orderOfApps.Calculator;

  return (
    <Window
      appName="Calculator"
      zindex={zIndexNum}
      setAppOnTheTop={setAppOnTheTop}
    >
      <img src={imagePath} alt="calculator" />
    </Window>
  );
};

export default Calculator;
