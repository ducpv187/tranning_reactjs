import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Sinhvien from './components/Sinhvien';
import FormEvent from './components/FormChange';
import FormClick from './components/FormClick';
import FormChange from './components/FormChange';

import ListData from './components/ListData';
import CrudSite from './components/CrudSite';


// them danh sach sinh vien
function App() {
  return (
    <div className="App">
      {/* <Header/> */}
      {/* <Sinhvien/> */}
      <FormChange />
     {/* <FormClick /> */}
     <ListData />
     {/* <CrudSite /> */}
    </div>
  );
}

export default App;
