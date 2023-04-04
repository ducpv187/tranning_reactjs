import React, { useContext } from 'react';
import { useState } from 'react';
import Children from './../Children';

export const DataContext = React.createContext(); // Khởi tạo context  -> mặc định sẽ có DataContext.Provider

export const DataContextProvider = ({ children }) => {
  const [data, setData] = useState([{ id: 1, name: 'thang' }]);
  const [count, setCount] = useState(0)
  const incrementCount = () => {
    setCount(pre => pre + 1)
  }
  const logData = () => {
    console.log(222, data);
  };

  const obj = { data: data, functionLog: logData, count, incrementCount };
  return <DataContext.Provider value={obj}>{children}</DataContext.Provider>;
  // ->  DataContextProvider Bọc component nào thì component đó nhận được data  ( là = useContext(DataContext)  )
};

const ComponentTestGetValueProvider = () => {
  // const dayLaDataValue = useContext(DataContext)  // cách 1
  // dayLaDataValue.functionLog()
  return <div>
    <DataContext.Consumer>
      {(dayLaDataValue) => {
        console.log(3333, dayLaDataValue)
        return <div> ComponentTestGetValueProvider</div>
      }}
    </DataContext.Consumer>
  </div>
}
export default function AppContext() {
  return (
    <DataContextProvider>
      <ComponentTestGetValueProvider />
    </DataContextProvider>
  );
}
