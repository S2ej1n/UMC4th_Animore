import './Company.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Container, Nav} from 'react-bootstrap';
import { useState } from 'react';
import Review from '../Reviewpage/Review.js';
import ReadPage from '../ReviewReadpage/Readpage';

function Company(){

    //예약창 열고 닫기
    const [modalOpen, setModalOpen] = useState(false);
    // 모달창 노출
    const showModal = () => {
        setModalOpen(true);
    };

    //리뷰창 열고 닫기
    const [readOpen, setReadOpen] = useState(false);
    // 모달창 노출
    const showRead = () => {
        setReadOpen(true);
    };


    return(
        <div>
           <div className="info">
            <div className='comp_image_box'>
                <div className="comp_image">
                    <img id='comp_img' src='img/example2.png'></img>  
                </div>
            </div>

            <div className='comp_info_box'>
                <div className="comp_info">
                    <div className='info_text'>
                        <p id='title'>봉봉살롱<span id='tag'>#가위컷 전문 #베넷미용 #포메라니안</span></p>
                        <p id='intr'>사장님이 포메라니안 '뽀뽀'를 키우는 찐 가위컷 맛집!<br/>
                        이웃집 댕댕이도 우리집 댕댕이처럼! 스트레스없는 힐링 미용✨</p>
                        <p id='locat'>위치: 부산광역시 OO구 OO로 OO번길</p>
                        <p id='ph_num'>전화번호: 010-000-0000</p>
                        <p id='rec_book'>최근 예약건수: 10회</p>
                        <img id='pickbut' src='img/pickup.png'/>
                        <img id='catbut' src='img/cat.png'/>
                        <div className='button3'>
                            <button id='heart_but'><span id="h_icon">♡</span> 200</button>
                            <button id='book_but'>예약하기</button>
                            <button id='review_but' onClick={showModal}>후기 작성</button>
                            {modalOpen && <Review setModalOpen={setModalOpen}/>}
                        </div>
                    </div>
                </div>
            </div>
           </div>
           
           <div className="review_box">
            <p id='re_text'>이용후기</p>
            <div className="review">
                <div className='re1' onClick={showRead}>
                    <img src='img/dog.png' />
                    <p>미용 싫어하는 금쪽이의 변화</p>
                </div>
                {readOpen && <ReadPage setReadOpen={setReadOpen}/>}
                <div className='re1'>
                    <img src='img/image58.png' />
                    <p>미용 싫어하는 금쪽이의 변화</p>
                </div>
                <div className='re1'>
                    <img src='img/image59.png' />
                    <p>미용 싫어하는 금쪽이의 변화</p>
                </div>
            </div>
           </div>
        </div>
    );
}

export default Company;