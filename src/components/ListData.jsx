import React, { useState } from "react";

export default function ListData() {

  const [data, setData] = useState([]); 
  console.log(data);

  //b2: get value -> setvalue state
  const [value, setValue] = useState();
  console.log(value);
  const onChangeValueInput = (e) => {
    setValue(e.target.value);    
    console.log(e);
  }


  //b3: tao event click 
  const clickAddData = () => {
    setData( (prevValue) => [...prevValue , value]);
    // setData( function(prevValue){
    //   return [...prevValue,value]
    // })

    // const newData = data.push(value);
    // setData( newData) ;
    // state là cái không đổi được mà phải xài setState mà
    // hiểu đơn giản hơn thì :
    // const newValue = clone lại data = [...data];
    // newValue.push( value );
    // setData( newValue ) ;
  }


  return (
    <div style={{ margin: "20px" }}>
      <div>
        <div>
          Them phan tu : <input onChange={onChangeValueInput} />
          <button style={{ marginLeft: "10px" }} onClick={clickAddData}>
            Them
          </button>
        </div>
        <div>danh sach</div>
        {/* //b1: render mang data ra màn hình  */}
        <div>
            {data.map((item)=> (
                <div>{item}</div>
            ))}
        </div>
      </div>
    </div>
  );
}


// logic
  //b1: map danh sach (danh sach luc đầu là mảng rỗng -> sau change input -> set data rồi map -> render ra div return)


  //b2: event onchange -> get data  input ->  lưu 1 cái usestate -> de  mỗi lần change input thì data lại đc push vào mảng 


  //b3: event  onclick -> setData([...data , valueInput])


  //logic trainner
    //   B1: Map danh sách ra dòng 23
    // b2: làm sự kiện onCHange lưu vô 1  cái useState
    // B3: Hàm onClick setData([...data, valueInput ] );


