import React, { useRef, useState } from "react";

export default function RefComponent() {
  const inputRef = useRef();
  const [status, setStatus] = useState(true);
  const statusRef = useRef(true); // statusRef.current = true
  //   console.log(inputRef.current);
  const focusInput = () => {

    //c1: cach tuong tac DOM truyen thong
    // document.querySelector(".input").focus();
    // console.log(inputRef?.current?.value);
    //console.log(1);

    // statusRef.current = false;

    // if (statusRef.current === true) {
    //   console.log(2);
    // }

    //c2: cach dung voi useRef
    if(inputRef.current){
     inputRef.current.focus(); 
    }
  };

  const h1Ref = useRef();
  console.log( h1Ref);

  const onClickGetHeight = () => {
    if (h1Ref.current) {
      console.log(h1Ref.current);
      const h1 = h1Ref.current.offsetHeight;
      console.log(h1);
    }
  };
  return (
    <div>
      <h1 ref={h1Ref} onClick={focusInput}>
        RefComponent
      </h1>
      <div onClick={onClickGetHeight}>Layt chieu cao h1</div>

      <input ref={inputRef} defaultValue={123} className="input" />

      <button onClick={() => console.log(inputRef?.current?.value)}>
        Gui form
      </button>
    </div>
  );
}
