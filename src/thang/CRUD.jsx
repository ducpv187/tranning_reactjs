import React, { useState } from "react";
import { ListData } from "./ListData";
import { SectionEdit } from "./SectionEdit";

const setLocalStorageData = (data) => {
  //  '[{}]'
  localStorage.setItem("key-data", JSON.stringify(data));
};

export default function CRUD() {
  const [data, setData] = useState(
    JSON.parse(localStorage.getItem("key-data")) || []
  );

  const [input, setInput] = useState("");
  console.log(input);
  // thêm 1 object khi click :  {id: random ,   name: Nhập  ,  price: random}
  const onClickItem = () => {
    if (!input) {
      return;
    }
    const obj = {
      id: Math.random() * 325235,
      price: Math.random(),
      name: input,
    };

    setData((data) => [...data, obj]);
    setLocalStorageData([...data, obj]);
    setInput("");
  };

  // click
  const [itemEdit, setItemEdit] = useState(null);

  const onClickICONSua = (dataItem) => {
    setItemEdit(dataItem);
    // call api xoa id    fetch('./api/product/${dataItem.id})
  };
  console.log(itemEdit);

  // o input
  const [inputEdit, setInputEdit] = useState({});
  const onChangeEdit = (e) => {
    setInputEdit((inputEdit) => {
      return {
        ...inputEdit,
        [e.target.name]: e.target.value,
      };
    });
  };

  //   [1,2,3].map(item =>   item!==1 ? item: item*2)
  const onClickEdit = () => {
    const newData = data.map((item) => {
      // nếu item cũ có id trùng với id edit thì đổi gia trị ,  nếu không trùng thì giữ nguyên
      if (item.id !== itemEdit?.id) {
        return item;
      }

      // [  {id:1, price: 1000}  ]   .map   ->  [{id:1, name:"thang",price:1000,   price: 44 }]
      return { ...item, ...inputEdit };
    });

    setData(newData);
    setLocalStorageData(newData);
  };

  // [1, ,2 , 3].filter(item=> (item!==2) -> true )
  const onDeleteItem = (itemClick) => {
    console.log(itemClick);
    const newData = data.filter((item) => {
      if (item.id !== itemClick.id) {
        return true;
      }
      return false;
    });
    //  [ {id: 1} , {id:2  } , {id:3}]      -           itemclickdelete : {id:2}

    // mảng mới = filter |
    // b1:  {id:1} so voi itemClick khong trung -> true  -> giữ lại vào mảng mới
    // b2  {id :2 } so voi itemClick  Trung ->  false     -> cút
    // b3:  {id:3} so voi itemClick khong trung -> true  -> giữ lại vào mảng mới
    // kết lại : mảng mới gồm id 1, id3

    // let newData1 = [];
    // data.forEach(item => {
    //   if (item.id !== itemClick.id) {
    //     return newData1.push(item);
    //   }
    // });

    setData(newData);
    setLocalStorageData(newData);
  };

  console.log("inputEdit", inputEdit);
  return (
    <div>
      <div>
        <div>Nhap ten muon them</div>
        <div>
          <input value={input} onChange={(e) => setInput(e.target.value)} />
          <button onClick={onClickItem}> Enter them</button>
        </div>
        <h3>List data</h3>
        <ListData
          data={data}
          onClickEdit={onClickICONSua}
          onClickDelete={onDeleteItem}
        />

        <SectionEdit
          onChangeEdit={onChangeEdit}
          itemEdit={itemEdit}
          onClickEdit={onClickEdit}
        />
      </div>
    </div>
  );
}
