import React from "react";

export default function LabelComponent({ style, name, _for }) {
  return (
    <label htmlFor={"repeating_" + _for} className={style}>
      {name}
    </label>
  );
}
