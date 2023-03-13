import React, { useState } from "react";

export default function AddItem(props) {
//   console.log(props);
  const [valueInput, setValueInput] = useState();
//   console.log(valueInput);
  const handleChangeInput = (e) => {
    const value = e.target.value; // chuỗi
    const obj = { id: Math.random(), name: value };
    setValueInput(obj); // Băt buộgic
  };

  const handleCLickAddItem = () => {
    // props.setData((prevData) => {
    //    return [...prevData , valueInput]
    // })

    props.handleCLickAddValueItem(valueInput);
    console.log("con",valueInput);
  };

  return (
    <div className="addItem">
      <h1>AddItem</h1>
      <input
        type="text"
        placeholder="Nhap ten item"
        onChange={handleChangeInput}
      />
      <button onClick={handleCLickAddItem}>them item</button>
    </div>
  );
}
