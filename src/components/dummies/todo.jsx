/* React */
import React, { useContext } from "react";

/* Context */
import { ApplicationContext } from "../applicationContext";

/* Components */
import Window from "../windowWrapper/window";

/* Image */
import imagePath from "../../img/dummyApps/dummy_todo.png";

const Todo = () => {
  const { orderOfApps, setAppOnTheTop } = useContext(ApplicationContext);

  let zIndexNum = orderOfApps.Todo;

  return (
    <Window appName="Todo" zindex={zIndexNum} setAppOnTheTop={setAppOnTheTop}>
      <img src={imagePath} alt="todo" />
    </Window>
  );
};

export default Todo;
