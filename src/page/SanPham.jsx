import React, { useState } from 'react';
import { useEffect } from 'react';
import { API_FAKE } from '../thang/api_data/apiFake';

export default function SanPham() {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function run() {
      const result = await fetch(API_FAKE);
      const data = await result.json();
      setData(data);
    }
    run();
  }, []);

  console.log({ data });

  const onRemoveItem = (itemClick) => {
    // const newData = data.filter((data) => data.id !== itemClick.id);
    // setData(newData);
    // cach 2 :
    setData((data) => data.filter((data) => data.id !== itemClick.id));
  };

  const onEditItemClick = (itemClick) => {
    console.log(itemClick);
    const newData = data.map((item) => {
      if (item.id === itemClick.id) {
        return { ...item, completed: !item.completed };
      }
      return item;
    });
    setData(newData);
  };
  return (
    <div>
      <h1>San pham</h1>

      <div>
        <ul>
          {data.map((item) => (
            <li
              style={{
                background: '#888888',
                marginBottom: '20px',
                cursor: 'pointer',
              }}
              key={item.id}
            >
              <div>id: {item.id}</div>
              <div>title: {item.title}</div>
              <input
                onClick={() => onEditItemClick(item)}
                type="checkbox"
                checked={item.completed}
                name="vehicle1"
                value="Bike"
              />
              <div>
                Trang thai: {item.completed ? 'Haon thanh' : 'Dang tien trinh'}
              </div>

              <button onClick={() => onRemoveItem(item)}> Xoa item</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
