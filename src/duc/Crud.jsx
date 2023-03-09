import React, { useState } from 'react'
import AddItem from './AddItem'
import ListData from './ListData'

export default function Crud() {
    const [data ,setData] = useState([{id:1 , name: 'duc'}, { id:2 , name: 'thang'}])
  return (
    <div>
        <h1>CRUD</h1>
        <AddItem />    
        <ListData dataList={data} setData={setData}/>    
    </div>
    
  )
}
// NOTE

// mỗi một  khôi sẽ được chia thành một components => tách nhỏ và import vào thằng cha
