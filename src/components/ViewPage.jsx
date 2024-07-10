import React from 'react';

const ViewPage = ({ currentUrl }) => {
  return (
    <div className='view_area'>
      <iframe src={currentUrl} title="View Page"></iframe>
    </div>
  );
};

export default ViewPage;
