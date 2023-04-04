import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Sinhvien from './components/Sinhvien';
import FormEvent from './components/FormChange';
import FormClick from './components/FormClick';
import FormChange from './components/FormChange';
import ListData from './components/ListData';
import CRUD from './thang/CRUD';
import AddItems from './components/AddItems';
import AddItemCrud from './components/AddItemCrud';
import Crud from './duc/Crud';
import LayoutHF from './thang/LayoutHF';
import ChiTiet from './thang/ChiTiet';
import ReactForm from './thang/ReactForm';
import RefComponent from './thang/RefComponent';
import UseEffectComponent from './thang/UseEffectComponent';
import AppContext from './thang/context/AppContext';
import ApiData from './thang/api_data/ApiData';
import AppReducer from './thang/context/AppReducer';

// them danh sach sinh vien
function App() {
  return (
    <div className="App">
      {/* <Header/> */}
      {/* <Sinhvien/> */}
      {/* <FormChange /> */}
      {/* <FormClick /> */}
      {/* <ListData /> */}
      {/* <AddItems />     */}
      {/* <AddItemCrud /> */}
      {/* <CRUD /> */}
      {/* <Crud /> */}
      {/* <LayoutHF>
        <ChiTiet />
      </LayoutHF> */}

      {/* Xu li form :    - React hook form,  Formik, antd  */}
      <ReactForm/>

      {/* <RefComponent /> */}

      {/* <UseEffectComponent /> */}

      {/* <AppContext /> */}

      {/* <AppReducer /> */}

      <ApiData />
    </div>
  );
}

export default App;
