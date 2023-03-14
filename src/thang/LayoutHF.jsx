import React from "react";

export default function LayoutHF(props) {
    console.log(props)
  return (
    <div>
      <div>header</div>
      <div>slide</div>
      <div>{props.children}</div>
    </div>
  );
}
