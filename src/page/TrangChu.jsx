import React from 'react';
import { Link } from 'react-router-dom';

export default function TrangChu() {
  return (
    <div>
      <h1>TrangChu</h1>

      <Link style={{ margin: '39px' }} to="/">
        Trang chu
      </Link>
      <Link to="/san-pham">Trang san pham</Link>
      <Link style={{ margin: '39px' }} to="tin-tuc">
        Tin tuc
      </Link>
    </div>
  );
}
