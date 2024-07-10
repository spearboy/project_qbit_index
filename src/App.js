import React, { useState } from 'react';
import './assets/scss/main.scss';
import Sidemenu from './components/Sidemenu';
import ViewPage from './components/ViewPage';
import { BrowserRouter } from 'react-router-dom';

const App = () => {
  const [currentUrl, setCurrentUrl] = useState('');

  return (
    <BrowserRouter>
      <div className='work_space open'>
        <Sidemenu setCurrentUrl={setCurrentUrl} />
        <ViewPage currentUrl={currentUrl} />
      </div>
    </BrowserRouter>
  );
};

export default App;
