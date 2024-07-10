import React from 'react'
import { Link } from 'react-router-dom'

const OrderView = () => {
  return (
    <div className='order_wrapper'>
        <Link className='back_btn' to={'/'}>프레임 페이지</Link>
    <div className="title_wrapper">
        <h1>프로젝트 큐빗 | Qbit</h1>
        <div className="title_inner">
            <p>팀장</p>
            <p>조병현</p>
        </div>
        <div className="title_inner">
            <p>팀원</p>
            <p>강서연, 김이현</p>
        </div>
        <div className="title_inner">
            <p>사용 스텍</p>
            <p>Next.js Node.js Scss</p>
        </div>
        <div className="title_inner_col">
            <div className='qr_sample'></div>
            <p className="desc_title">프로젝트 진행률</p>
            <div className="progress">
                <div></div>
            </div>
            <p className="desc">- 클라이언트 사이드 마크업 및 소켓 적용 (완료)</p>
            <p className="desc">- 클라이언트 사이드 마크업 및 소켓 수정 (진행중)</p>
            <p className="desc">- 관리자 페이지 작업 (진행중)</p>
            <p className="desc">- 서버사이드 라이브 적용 (진행중)</p>

        </div>
        <div className="title_inner_col">
            <p className="desc_title">프로젝트 개요</p>
            <p className="desc">프로젝트 큐빗은 기존의 불편했던 메뉴판과 키오스크를 대체할 QR주문을 제시합니다. 멀리 붙어있는 메뉴판, 테이블당 한두개 있는 메뉴판, 줄서서 주문해야하는 키오스크, 이제 큐빗을 이용해 기다림과 불편함 없이 QR스캔으로 여러명이 같이 메뉴판을 보며 주문합니다. 큐빗은 동시에 메뉴판을 보며 서로의 메뉴를 확인하며 주문이 가능합니다.</p>
        </div>
    </div>
    <div className="link_wrapper">
        <div className="cate_wrapper">
            <h2>클라이언트 사이드</h2>
            <ul>
                <li><Link to="http://qbitorder.com" target="_blank">Randing(초기 진입) 페이지</Link></li>
                <li><Link to="http://qbitorder.com/main" target="_blank">Main(메인) 페이지</Link></li>
                <li><Link to="http://qbitorder.com/detail?id=1" target="_blank">Detail(디테일) 페이지</Link></li>
                <li><Link to="http://qbitorder.com/bag" target="_blank">Bag(장바구니) 페이지</Link></li>
                <li><Link to="http://qbitorder.com/result" target="_blank">Result(결과-주문현황) 페이지</Link></li>
                <li><Link to="http://qbitorder.com/complete" target="_blank">Finish(완료) 페이지</Link></li>
            </ul>
            <ul>
                <li><Link to="http://qbitorder.com/login" target="_blank">로그인 회원 가입 (작업중)</Link></li>
                <li><Link className="not-yet" to="#" target="_blank">Pos(포스) 페이지</Link></li>
                <li><Link className="not-yet" to="#" target="_blank">Table(포스 테이블) 페이지</Link></li>
                <li><Link className="not-yet" to="#" target="_blank">Add menu(포스 수동 메뉴 추가) 페이지</Link></li>
                <li><Link className="not-yet" to="#" target="_blank">Check(포스 계산) 페이지</Link></li>
                <li><Link to="http://qbitorder.com/admin" target="_blank">Admin(관리자) 페이지 (작업중)</Link></li>
                <li><Link className="not-yet" to="#" target="_blank">테이블 QR 코드 확인</Link></li>
                <li><Link className="not-yet" to="#" target="_blank">대시보드</Link></li>
                <li><Link className="not-yet" to="#" target="_blank">매출 통계 화면 (년,월,주,일 단위)</Link></li>
                <li><Link className="not-yet" to="#" target="_blank">메뉴 생성,삭제, 수정, 인기 메뉴탭</Link></li>
            </ul>
        </div>
        <div className="cate_wrapper">
            <h2>서버 사이드</h2>
            <ul>
                <li><Link to="https://raw.githubusercontent.com/spearboy/project_qbit/main/server.js" target="_blank">서버 동작 페이지</Link></li>
                <li><Link className="not-yet" href="#" target="_blank">메뉴판&포스 데이터 연결</Link></li>
                <li><Link to="https://raw.githubusercontent.com/spearboy/project_qbit/main/server.js" target="_blank">웹 소캣 설정</Link></li>
            </ul>
        </div>
        <div className="cate_wrapper">
            <h2>작업 프로세스</h2>
            <ul>
                <li><Link to="https://github.com/spearboy/project_qbit" target="_blank">깃허브 레파지토리</Link></li>
                <li><Link to="https://creatie.ai/goto/BAA5ZKQM?file=131389580566211" target="_blank">크리에이티 디자인 시스템</Link></li>
                <li><Link to="https://creatie.ai/goto/BAA8Llnj?file=131399536796514" target="_blank">크리에이티 디자인 산출물</Link></li>
            </ul>
        </div>
    </div>
    </div>
  )
}

export default OrderView