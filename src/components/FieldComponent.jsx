import React from "react";

export default function FieldComponent({ type, style, name, id }) {
  return (
    <input
      type={type}
      name={"floating_" + name}
      id={"floating_" + id}
      className={style}
      placeholder=' '
      required
    />
  );
}
