import React from "react";
import css from "../src/Counter.module.css";

const Controls = ({onIncrement, onDicrement}) => (
  <div>
    <button
      className={css.increment}
      type="button"
      onClick={onIncrement}
    >
      Increment by
    </button>
    <button
      className={css.dicrement}
      type="button"
      onClick={onDicrement}
    >
      Decrement by
    </button>
  </div>
);

export default Controls;
