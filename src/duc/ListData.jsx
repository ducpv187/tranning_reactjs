import React from 'react'
//  const arrData = [{id:1 , name: 'duc'}, { id:2 , name: 'thang'}];
export default function ListData(props) {
    // console.log(props.dataList);
    
  return (
    <div className="listdataList" >
        <h1>List Data</h1>
        {
            props.dataList.map((item)=> {
                // return chỉ trả về một thẻ div cha(bên trong dc bọc nhieuf div con)
                return <div> 
                    <div>{item.id}</div>
                    <div>{item.name}</div>
                </div>
            })
        }
    </div>
  )
}
