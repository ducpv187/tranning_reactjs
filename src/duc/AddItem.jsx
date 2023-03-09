import React, { useState } from "react";



export default function AddItem(props) {    
  const [valueInput, setValueInput] = useState();
//   console.log(valueInput);
  const handleChangeInput = (e) => {
    const obj = {id: Math.random() , name: e.target.value}
    setValueInput(obj); // Băt buộc
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
      <button onClick={handleCLickAddItem}>them item</button>
    </div>
  );
}
