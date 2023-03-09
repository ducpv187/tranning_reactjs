import React, { useState } from "react";



export default function AddItem(props) {
  const [valueInput, setValueInput] = useState();
  console.log(valueInput);
  const handleChangeInput = (e) => {
    setValueInput(e.target.value); // Băt buộc
  };

  const handleCLickAddItem = () => {
    // props.setData((prevData) => {
    //    return [...prevData , valueInput]
    // })

    props.handleCLickAddValueItem(valueInput);
  };

  return (
    <div className="addItem">
      <h1>AddItem</h1>
      <input
        type="text"
        placeholder="Nhap ten item"
        onChange={handleChangeInput}
      />
      <button onclick={handleCLickAddItem}>them item</button>
    </div>
  );
}
