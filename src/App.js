import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Sinhvien from "./components/Sinhvien";
import FormEvent from "./components/FormChange";
import FormClick from "./components/FormClick";
import FormChange from "./components/FormChange";
import ListData from "./components/ListData";
import CRUD from "./thang/CRUD";
import AddItems from "./components/AddItems";
import AddItemCrud from "./components/AddItemCrud";

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
      <CRUD />
    </div>
  );
}

export default App;
