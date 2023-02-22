import React, { useState } from 'react'

export default function FormClick() {

    const [menu, setMenu] = useState([
    {
        id: 1,
        name: "Tab 1 ",
        link: "/home",
    },
    {
        id: 2,
        name: "Tab 2 ",
        link: "/qc",
    },
    {
        id: 3,
        name: "Tabv 3 ",
        link: "/st",
    },
    ]);
    const listContent = [
        { id: 1, content: "THang" },
        { id: 2, content: "Duc" },
        { id: 3, content: "suc" },
      ];
      //  -> find :  { }   1 phan tu   ->   content.id  === Click.id
      //  -> Map:   [ ]   3 phan tu
      //  -> filter:  [ ]   < =  3 phan tu
      //  -> forEach   ->  underfine
    
      const [itemClick, setItemClick] = useState(); // 3
      const onClickItem = (data) => {
        // lay du lieu click
        setItemClick(data);
    
        // xoa phan tu 3 :
        // const newMenu = menu.filter((m) => m.i
    }
    // const newRenderMenu = menu.filter((m) => m.id !== itemClick?.id); //  1 -2
    // const menu = menu.filter((m) => m.id !== itemClick?.id); //  1 -2
    return (
        <div style={{ display: "flex", margin: "20px" }}>
        {menu?.map((dataItem) => (
            <div
            onClick={() => onClickItem(dataItem)}
            key={dataItem?.id}
            style={{
                margin: "10px",
                background: itemClick?.id === dataItem.id ? "blue" : "red",
            }}
            >
            {dataItem.name}
            </div>
        ))}
        {listContent.find((d) => d.id === itemClick?.id)?.content}
        </div>
    )
}
