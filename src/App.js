import React from 'react';
import './assets/scss/main.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './page/Main';
import OrderView from './components/OrderView';

const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/order' element={<OrderView/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
