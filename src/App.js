import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Sinhvien from './components/Sinhvien';
import FormEvent from './components/FormEvent';
import FormClick from './components/FormClick';


// them danh sach sinh vien
function App() {
  return (
    <div className="App">
      {/* <Header/>
      <Sinhvien/> */}
     {/* <FormEvent/> */}
     <FormClick />
    </div>
  );
}

export default App;
