import React, { useEffect, useState } from "react";

const Phu = () => {
  const [count, setCount] = useState(1);

  useEffect(() => {
    // setTimeout, setInterval
    const interval = setInterval(() => {
      setCount((seconds) => seconds + 1);
    }, 1000);

    function handleResize() {
      console.log("Do resize stuff");
    }
    window.addEventListener("resize", handleResize);

    return function cleanupListener() {
      window.removeEventListener("resize", handleResize);
    };

    // return function () {
    //   clearInterval(interval);
    // }; // return của useEffect là unmount ( return là function )

    //
  }, []);

  return <div>phu {count}</div>;
};
export default function UseEffectComponent() {
  const [count, setCount] = useState(1);

  // U1: useEffect 1 tham số đầu tiên -> chạy lại khi hàm render
  //   useEffect(() => {
  //     console.log("effect");
  //   });

  // U2:
  // Note:  Nếu 2 tham số, bắt buộc tham số 2 là mảng |   tham số 2 gọi là dependency

  // TH1:  useEffect 2 tham số / Nhưng tham số thứ 2 là mảng rỗng -> chạy lại khi first render

  // Th1 -> Nó chỉ chạy đúng 1 lần đầu khi component được first render
  //   useEffect(() => {
  //     console.log("effect với dependency rỗng ");
  //   }, []);

  // TH2:    useEffect 2 tham số / Nhưng tham số thứ 2 là mảng có giá trị -> chạy lại khi tham số phụ thuộc thay đổi
  //   useEffect(() => {
  //     console.log("effect với dependency là biến có thay đổi ");
  //   }, [count]);

  //  Luuw ý :  return của useEffect là unmount ( return là function )
  //   useEffect(() => {
  //     return console.log(1);
  //   }, []);

  const [data, setData] = useState([]);
  useEffect(() => {
    //call api
    const getData = () => {
      fetch("https://jsonplaceholder.typicode.com/users")
        .then((res) => res.json())
        .then((json) => {
          setData(json);
          // console.log({ json });
        });
    };
    getData();
  }, []);
  return (
    <div>
      <h1>UseEffectComponent</h1>
      <div>count : {count}</div>
      <button onClick={() => setCount((pre) => pre + 1)}>Tang count</button>
      {count === 2 && <Phu />}

      <div>Mang data</div>
      {data.map((item) => (
        <div style={{ background: "red", marginBottom: "20px" }}>
          <div>{item?.name}</div>
          <div>{item?.email}</div>
        </div>
      ))}
    </div>
  );
}
