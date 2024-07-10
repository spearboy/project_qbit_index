import React from 'react';
import { menuClient, menuServer, teamTools } from '../constant/data';
import { Link } from 'react-router-dom';

const Sidemenu = ({ setCurrentUrl }) => {
  const handleClick = (url) => {
    if (url !== '-') {
      setCurrentUrl(url);
    }
  };

  return (
    <div className='side_wrapper'>
      <div className='main_logo'>
        <div className='logo'></div>
        <div className='qr'></div>
      </div>
      <div className='list_wrapper'>
        <h2>클라이언트 사이드</h2>
        <ul>
          {menuClient.map((list, i) => (
            <li className='list_item' key={i}>
              <Link to="#" onClick={() => handleClick(list.url)}>
                <span className={list.status === '미진행' ? 'not' : list.status === '완료' ? 'ok' : list.status === '진행중' ? 'work' : ''}>{list.status}</span>
                <p>{list.title}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className='list_wrapper'>
        <h2>서버 사이드</h2>
        <ul>
          {menuServer.map((list, i) => (
            <li className='list_item' key={i}>
              <Link to="#" onClick={() => handleClick(list.url)}>
                <span className={list.status === '미진행' ? 'not' : list.status === '완료' ? 'ok' : list.status === '진행중' ? 'work' : ''}>{list.status}</span>
                <p>{list.title}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className='list_wrapper'>
        <h2>팀 일정 및 작업물</h2>
        <ul>
          {teamTools.map((list, i) => (
            <li className='list_item' key={i}>
              <Link to="#" onClick={() => handleClick(list.url)}>
                <span className={list.status === '미진행' ? 'not' : list.status === '완료' ? 'ok' : list.status === '진행중' ? 'work' : ''}>{list.status}</span>
                <p>{list.title}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidemenu;
