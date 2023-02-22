import React, { useState } from 'react'

export default function FormEvent() {
  const [valueForm, setValueForm] = useState({});
  function handleSubmit(e) {
    e.preventDefault();
    console.log("You clicked submit.", e);
    // ddaary len du lieu form len server
  }

  const onChangeValueInput = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    const input = { [name]: value };

    const dulieuchualuu = { ...valueForm, ...input };
    // cach 1 : setValueForm(dulieuchualuu)
    setValueForm((prevValue) => ({ ...prevValue, [name]: value }));
  };


    
  return (
    <form
    style={{ margin: "20px" }}
    //  onSubmit={handleSubmit}
  >
    <div>Email: </div>
    <input name="email" onChange={onChangeValueInput} />
    <div>Password: </div>
    <input name="password" onChange={onChangeValueInput} />
    {/* <input type={"checkbox"} onChange={onChangeValueInput} /> */}
    <div>
      <button onClick={handleSubmit} type="submit">
        Submit
      </button>
    </div>
  </form>
  )
}
