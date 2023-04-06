// This is a React Router v6 app
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import TrangChu from './../page/TrangChu';
import ChiTietSanPham from './../page/ChiTietSanPham';
import TinTuc from './../page/TinTuc';
import SanPham from './../page/SanPham';

const routes = [
  { id: 1, path: '/', Element: TrangChu },
  { id: 2, path: '/san-pham', Element: SanPham },
  { id: 3, path: '/tin-tuc', Element: TinTuc },
  { id: 4, path: '/chi-tiet-san-pham', Element: ChiTietSanPham },
  { id: 5, path: '/chi-tiet-san-pham/:sanphamid', Element: ChiTietSanPham },
];
export default function RouteApp() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<TrangChu />} />
        <Route path="san-pham" element={<SanPham />} />
        <Route path="tin-tuc" element={<SanPham />} /> */}
        {routes.map(({ id, path, Element }) => (
          <Route key={id} path={path} element={<Element path={path} />} />
        ))}
      </Routes>
    </BrowserRouter>
  );
}
