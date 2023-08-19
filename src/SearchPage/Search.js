import './Search.css'
import { useState, useEffect } from 'react';
import ShopInfo from '../shopSample.js';
import Pagination from '../Pagination/pagination.js';
import { useParams, useNavigate } from 'react-router-dom';
import Company from '../CompPage/Company.js';
import axios from 'axios';

function Search() {
  const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJjb3PthqDtgbAiLCJpZCI6MiwiZXhwIjoxNjkyNzg1ODEzLCJ1c2VybmFtZSI6Im5hdmVyX1BPbXlOMlNCSndaUmNXbXNUak05YWR6WnNrQ1Qta1Jxd0lick1STHI2LWsifQ.ndm6Q9GkjJZiwkXZae8VV5QDP7ydWp7YBN-ECVyQDWBe0OTwbecCkA11ebrqrrgEw-zqK1p0JHl16F1yz8Pu-g';

  //정렬 상태관리
  const [popularColor, setPopularColor] = useState(true);
  const [reviewColor, setReviewColor] = useState(false);
  const [distanceColor, setDistanceColor] = useState(false);

  const handlePopularClick = () => {
    setPopularColor(true);
    setReviewColor(false);
    setDistanceColor(false);
  };

  const handleReviewClick = () => {
    setPopularColor(false);
    setReviewColor(true);
    setDistanceColor(false);
  };

  const handleDistanceClick = () => {
    setPopularColor(false);
    setReviewColor(false);
    setDistanceColor(true);
  };

  //페이지이동 
  const navigate = useNavigate()
  const navigateToCompany = () => {
    navigate("/company");
  }

  //검색어 전달받는 친구
  const { searchText } = useParams();

  //상태변수랑 다른 변수명 사용해야함. 이거때문에 오류뜸
  let [ShopInfoList] = useState(ShopInfo)
  //임시로 만든 데이터 불러온거에요

  //const [ShopInfoList, setShopInfoList] = useState([]);

  //API연결 부분
  // 검색 결과 정렬에 따라 API 호출하기
  // useEffect(() => {
  //   let sortedShopInfo = []; //샵 정보 담을 친구

  //   if (popularColor) {
  //     // try {
  //       // 인기순 정렬에 따른 API 호출
  //     //   const response = axios.get('/search/name/best', {
  //     //     params: { query: searchText },
  //     //     Authorization: `Bearer ${token}`
  //     //   });

  //     //   sortedShopInfo = response.data;
  //     //   setShopInfoList(sortedShopInfo);
  //     //   setPage(1); // 페이지를 첫 번째로 리셋
  //     //   console.log(response);
        
  //     // } catch (error) {
  //     //   console.error('에러발생함:', error);
  //     // }

  //   } else if (reviewColor) {
  //     // 후기많은순 정렬에 따른 API 호출
  //     // sortedShopInfo = 호출된 API 응답 데이터;
  //   } else if (distanceColor) {
  //     // 거리순 정렬에 따른 API 호출
  //     // sortedShopInfo = 호출된 API 응답 데이터;
  //   }

  //   // 정렬된 데이터를 상태로 업데이트
  //   setShopInfoList(sortedShopInfo);
  //   setPage(1); // 페이지를 첫 번째로 리셋
  // }, [popularColor, reviewColor, distanceColor]);


  {/*페이지네이션을 위한 state들 */ }
  const [limit] = useState(4);
  const [page, setPage] = useState(1);

  const offset = (page - 1) * limit;
  const currentShopInfo = ShopInfoList.slice(offset, offset + limit);


  const mapShopInfo = () => {
    return currentShopInfo.map((shop) => (
      <div key={shop.id} className='co1'>
        <img src='/img/rectangle76.png' alt='shop_image' />
        <p id='com_name'>{shop.com_name}</p>
        <div id='com_info'>
          <p>{shop.location}</p>
          <p>{shop.tag}</p>
          <div id='num_but'>
            <p>전화번호: {shop.shop_num}</p>
            <button id='b_but' onClick={navigateToCompany}>지금바로 예약하기</button>
          </div>
        </div>
      </div>
    ));
  };

  return (
    <div>
      <div className="search_result">
        <p><span id="search_text">{searchText}</span> 의 검색결과입니다.</p>
      </div>
      <div id='line'></div>
      <div className='how_range'>
        <p id='popular_ran' onClick={handlePopularClick}
          style={{ color: popularColor ? '#A0136A' : 'black' }}
        >인기순</p>
        <p id='review_ran' onClick={handleReviewClick}
          style={{ color: reviewColor ? '#A0136A' : 'black' }}>후기많은순</p>
        <p id='distance_ran' onClick={handleDistanceClick}
          style={{ color: distanceColor ? '#A0136A' : 'black' }}>거리순</p>
      </div>
      <div id='line'></div>

      <div className="company_box">
        <div className="company_info">
          {mapShopInfo()}
        </div>
      </div>

      {/*페이지네이션 버튼 */}
      <footer className="Pagina">
        <Pagination
          total={ShopInfoList.length}
          limit={limit}
          page={page}
          setPage={setPage} />
      </footer>
      <div id='line'></div>
    </div>
  );
}

export default Search;