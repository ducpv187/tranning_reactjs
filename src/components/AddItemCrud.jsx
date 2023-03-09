import React, { useState } from "react";

export default function AddItemCrud() {
  const [data, setData] = useState([{ id: 1, name: "Mi`", price: 1000 }]);

  const [input, setInput] = useState("1a");
  console.log(input);
  // thêm 1 object khi click :  {id: random ,   name: Nhập  ,  price: random}
  const onClickItem = () => {
    //check ô input ko có gia trị thì return về  div rỗng ( tránh case ko có data input mà cứ add data rỗng -> render ra màn hình)
    //javascipts: logic sẽ chạy từ trên xuống 


    //cach 1:
    //+)b1: n kiểm tra input có data hay ko ?
    // if (!input) {
    //   return;
    // }
    // //+)b2: sau khi  logic chạy hết b1 nếu có data -> b2 else nếu ko thì dừng lại return ra mãng rỗng
    // const obj = {
    //   id: Math.random() * 325235,
    //   price: Math.random(),
    //   name: input,
    // };
    // //+)b3: set usestate vào data mới 
    // setData((data) => [...data, obj]);

    // //+)b4: mỗi lần click xong thì xóa data ô vừa nhập về trạng thái rỗng
    // setInput("");

    //cach 2:
    if(input) {
      const obj = {
        id: Math.random() * 325235,
        price: Math.random(),
        name: input,
      };
      setData((data) => [...data, obj]);
      setInput("");
    }
    else {
      return;
    }   
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
      if (item.id !== itemEdit.id) {
        return item;
      }

      // [  {id:1, price: 1000}  ]   .map   ->  [{id:1, name:"thang",price:1000,   price: 44 }]
      return { ...item, ...inputEdit };
    });

    setData(newData);
  };

  // [1, ,2 , 3].filter(item=> (item!==2) -> true )
  const onDeleteItem = (itemClick) => {
    console.log(itemClick);

    const newData = data.filter((item) => {
      if (item.id !== itemClick.id) {
        console.log(item);
        return true;
      }
      return false;
    });

    setData(newData);
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
        <div>
          {data.map((item) => (
            <div
              key={item.id}
              style={{ background: "white", marginBottom: "20px" }}
            >
              <div>gia tien : {item.price}</div>
              <div>Ten sp : {item.name}</div>
              <button onClick={() => onClickICONSua(item)}>ICON sửa</button>

              <button
                onClick={() => onDeleteItem(item)}
                style={{ marginLeft: "20px" }}
              >
                Xóa thằng này de
              </button>
            </div>
          ))}
        </div>

        <h1> Sua phan tu </h1>
        <input
          name="name"
          onChange={onChangeEdit}
          defaultValue={itemEdit?.name}
        />
        <input
          name="price"
          onChange={onChangeEdit}
          defaultValue={itemEdit?.price}
        />
        <button onClick={onClickEdit}> OK sửa</button>
      </div>
    </div>
  );
}
