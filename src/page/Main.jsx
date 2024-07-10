import React, { useState } from 'react'
import Sidemenu from '../components/Sidemenu'
import ViewPage from '../components/ViewPage'
import { Link } from 'react-router-dom';

const Main = () => {

  const [currentUrl, setCurrentUrl] = useState('');
  return (
    <div className='work_space open'>
        <Link className='back_btn' to={'/order'}>간소화 페이지</Link>
      <Sidemenu setCurrentUrl={setCurrentUrl} />
      <ViewPage currentUrl={currentUrl} />
    </div>
  )
}

export default Main