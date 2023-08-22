import './Company.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Review from '../Reviewpage/Review.js';
import ReadPage from '../ReviewReadpage/Readpage';
import axios from 'axios';

function Company() {
    const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJjb3PthqDtgbAiLCJpZCI6NCwiZXhwIjoxNjkyNzYxMDA0LCJ1c2VybmFtZSI6Imdvb2dsZV8xMDg1OTYwMzM2NDczMDk5ODQ3ODUifQ.uBYZMFGYe2wq6w3LzO1TPdmg6evnMtEZGQHmSszo8yaqUtGeraBjeA-YQepR5pQn1Mi_IqkMWPOFGdMTI47EFA';

    //예약창 열고 닫기
    const [modalOpen, setModalOpen] = useState(false);
    // 모달창 노출
    const showModal = () => {
        setModalOpen(true);
    };


    //리뷰 정보 저장
    const [selectedReview, setSelectedReview] = useState(null);
    //리뷰창 열고 닫기
    const [readOpen, setReadOpen] = useState(false);
    // 모달창 노출
    const showRead = (review) => {
        setSelectedReview(review);
        setReadOpen(true);
    };

    //샵 정보 담는 배열
    const [shopInfoList, setShopInfoList] = useState([]);

    //--0820 API호출----------------------
    const { storeId } = useParams();

    const [heartCount, setHeartCount] = useState(0);
    const [isLiked, setIsLiked] = useState(false);

    const HeartClick = () => {
        if (isLiked) {
            setHeartCount(heartCount - 1); 
          } else {
            setHeartCount(heartCount + 1);
          }
          setIsLiked(!isLiked); 
    };

    //------0823 샵 리뷰 모아보기 상태 저장---------
    const [reviewState, setReviewState] = useState([])

    useEffect(() => {
        axios.get(`/search/${storeId}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then(response => {
                // API 호출 성공 시 데이터를 상태에 저장
                setShopInfoList(response.data.result);
                console.log('불러온 데이터', shopInfoList);
                setHeartCount(response.data.result.storeLike);
            })
            .catch(error => {
                // API 호출 실패 시 에러 처리
                console.error('API 호출 에러:', error);
            });

        //(0823)2. 리뷰 api 호출---------------
        axios.get(`/reviews/store/${storeId}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .then(response => {
            //상태저장
            setReviewState(response.data.result);
            console.log(reviewState);
        })
        .catch(error => {
            // 두 번째 API 호출 실패 시 처리
            console.error('두 번째 API 호출 에러:', error);
        });
    }, []);

    console.log(reviewState);
    return (
        <div>
            <div className="info">
                <div className='comp_image_box'>
                    <div className="comp_image">
                        <img id='comp_img'
                        src={shopInfoList.storeImageUrl ? shopInfoList.storeImageUrl : '/img/example2.png'}>
                        </img>
                    </div>
                </div>

                <div className='comp_info_box'>
                    <div className="comp_info">
                        <div className='info_text'>
                            <p id='title'>{shopInfoList.storeName}
                                {shopInfoList.tags && (
                                    <span id='tag'>
                                        {shopInfoList.tags.map((tag, index) => (
                                            <span key={index}>
                                                {index > 0 ? " " : ""}
                                                #{tag}
                                            </span>
                                        ))}
                                        {/*#가위컷 전문 #베넷미용 #포메라니안*/}
                                    </span>
                                )}
                            </p>
                            <p id='intr'>{shopInfoList.storeExplain}{/*사장님이 포메라니안 '뽀뽀'를 키우는 찐 가위컷 맛집!<br />
                                이웃집 댕댕이도 우리집 댕댕이처럼! 스트레스없는 힐링 미용✨*/}</p>
                            <p id='locat'>위치: {shopInfoList.storeLocation}</p>
                            <p id='ph_num'>전화번호: {shopInfoList.storeNumber}</p>
                            <p id='rec_book'>최근 예약건수: {shopInfoList.storeRecent}회</p>
                            <img id='pickbut' src='/img/pickup.png' />
                            <img id='catbut' src='/img/cat.png' />
                            <div className='button3'>
                                <button id='heart_but' onClick={HeartClick}><span id="h_icon">{isLiked ? '♥' : '♡'}</span>{heartCount}</button>
                                <button id='book_but'>예약하기</button>
                                <button id='review_but' onClick={showModal}>후기 작성</button>
                                {modalOpen && 
                                <Review setModalOpen={setModalOpen} 
                                shopInfoList = {shopInfoList}
                                storeId={storeId}
                                token={token}
                                />}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="review_box">
                <p id='re_text'>이용후기</p>
                <div className="review">
                    {reviewState.map((review, index) => (
                        <div key={index} className='re1' onClick={() => showRead(review)}>
                            <img src={review.images[0] ? review.images[0].imageUrls : '/img/dog.png'}/>
                            <div>
                                <p>미용 싫어하는 금쪽이의 변화</p>
                                <p>{review.reviewContent}</p>
                            </div>
                        </div>
                    ))}
                    {readOpen && <ReadPage setReadOpen={setReadOpen}
                    token={token} review={selectedReview}/>}
                </div>
            </div>
        </div>
    );
}

export default Company;