import React, { useState } from 'react'

export default function CrudSite() {
  //create state cua mang data ban dau
  const [data, setData] = useState([]); 
  console.log(data); 

  const handleClickAddItem = () => {
    setData((prevData) => [...prevData, valueInput]);
    // cai nay cua no se return ve mot mang ma so luong phan tu ko doi + update them value moi khi changeInput
  }


  //create state cua mang khi ma changeInput
  const [valueInput , setValueInput ] = useState();  
   console.log(valueInput);
  const handleChangeValueInput = (e) => {
    setValueInput(e.target.value);  
    // const value = e.target.value
    // console.log(e);
    // console.log(value);    
  }



  return (
    <div style={{margin: "20px"}}>
      <div>
        AddItems: <input type="text" onChange={handleChangeValueInput} /> <button onClick={handleClickAddItem}> ADD </button>
      </div>
      <div>List Item</div>
      <div>
        {
          data.map( (value) => 
            <div >{value}</div>
          )
        }
      </div>
    </div>
  )
}


//b1: tao mang data ban dau (co the là rong ) -> map cac phan tu trong mang ra man hinh 
//b2: event onchange -> get data  input ->  lưu 1 cái usestate -> de  mỗi lần change input thì data lại đc push vào mảng 
//b3: event  onclick -> setData([...data , valueInput])


//logic trainner
// B1: Map danh sách ra dòng 23
// b2: làm sự kiện onCHange lưu vô 1  cái useState
// B3: Hàm onClick setData([...data, valueInput ] );