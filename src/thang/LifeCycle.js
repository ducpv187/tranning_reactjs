import React, { Component, useEffect, useState } from "react";

// func thuong  :   render -> mount  -> did mount -> unMount
export function LifeCycleFunc() {
  const a = 1;
  console.log(1);
  const [status, setStatus] = useState(false);
  const [count,setCount] = useState(1);

//     didMount(()=>{
//       setTimeout(()=>{
//   setStatus(true)
//       },2000)
//       console.log('Ddax render html thanh cong');

//       if(count===3){
// alert('render lan 3 ')
//       }
//     })


  //   unMount (()=>{
  //     console.log(3)
  //   })

  console.log(5);
  return (
    <div>
      LifeCycle the div
      {status && <div>Modal xin chao</div>}
      <div>count click</div>
    </div>
  ); // mount
}
