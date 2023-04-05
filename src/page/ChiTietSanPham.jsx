import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { API_FAKE } from '../thang/api_data/apiFake';

export default function ChiTietSanPham() {
  const [dataItem, setDataItem] = useState();
  let { sanphamid } = useParams();
  const location = useLocation();
  console.log({ location, sanphamid, dataItem });

  useEffect(() => {
    if (!sanphamid) {
      return;
    }
    async function run() {
      const result = await fetch(`${API_FAKE}/${sanphamid}`);
      const data = await result.json();
      setDataItem(data);
    }
    run();
  }, [sanphamid]);

  // call api get san pham voi id = 2
  return (
    <div>
      <div
        style={{
          background: '#888888',
          marginBottom: '20px',
          cursor: 'pointer',
        }}
      >
        <div>id: {dataItem?.id}</div>
        <div>title: {dataItem?.title}</div>
        <input
          type="checkbox"
          checked={dataItem?.completed}
          name="vehicle1"
          value="Bike"
        />
        <div>
          Trang thai: {dataItem?.completed ? 'Haon thanh' : 'Dang tien trinh'}
        </div>
      </div>
    </div>
  );
}
