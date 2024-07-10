import React from 'react';

const ViewPage = ({ currentUrl }) => {
  return (
    <div className='view_area'>
      <p className='alert'>(http,github,)페이지 로드가 안될 시 간소화 페이지에서 확인 바랍니다.</p>
      <iframe src={currentUrl} title="View Page"></iframe>
    </div>
  );
};

export default ViewPage;
