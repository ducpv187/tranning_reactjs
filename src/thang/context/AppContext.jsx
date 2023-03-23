import React, { useContext } from 'react';
import { useState } from 'react';
import Children from './../Children';

export const DataContext = React.createContext();

export const DataContextProvider = ({ children }) => {
  const [data, setData] = useState([{ id: 1, name: 'thang' }]);
  return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
};

const ListData = () => {
  return (
    <div>
      <h1>List Data</h1>
      <ul>
        {/* {data.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))} */}
      </ul>
    </div>
  );
};

const FormClickParent = () => {
  return (
    <DataContextProvider>
      <FormClick />
    </DataContextProvider>
  );
};

const FormClick = () => {
  const dayLaData = useContext(DataContext);
  const onClickButton = () => {
    console.log(dayLaData);
  };
  return (
    <div>
      <button onClick={onClickButton}>
        {' '}
        CLick vao console log gia tri data
      </button>
    </div>
  );
};

const Button = () => {
  const dataNe = useContext(DataContext);

  const clickLogData = () => {
    console.log('hihi', dataNe);
  };
  return (
    <button style={{ marginTop: '59px' }} onClick={clickLogData}>
      onCLick data APp context
    </button>
  );
};
export default function AppContext() {
  return (
    <DataContextProvider>
      <h1>AppContext</h1>

      <div>
        <ListData />

        <FormClickParent />

        <>
          <Button />
        </>
      </div>
    </DataContextProvider>
  );
}
