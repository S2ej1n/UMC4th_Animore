import axios from 'axios';
import { useState, useEffect } from 'react';

function ExampleAx(){

  const [shopInfoArray, setShopInfoArray] = useState([]); // 상태로 배열 선언

  useEffect(() => {
    // shopInfoArray 상태가 업데이트될 때마다 실행됨
    shopInfoArray.forEach((shop) => {
      console.log('Store ID:', shop.storeId);
      console.log('Store Name:', shop.storeName);
      console.log('Store Explain:', shop.storeExplain);
      console.log('Store Image URL:', shop.storeImageUrl);
      console.log('--------------------'); // 구분용 줄
    });
  }, [shopInfoArray]); // shopInfoArray 상태가 변경될 때만 실행됨

    async function getData() {
        try {
          let token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJjb3PthqDtgbAiLCJpZCI6MSwiZXhwIjoxNjkyNzg1NzE4LCJ1c2VybmFtZSI6Imtha2FvXzI4OTgyMDI5NDQifQ.yFK4TqoT7I2ckMp-pQAytO5vg_IjPr1A3co2iAZMU1OJFkt1H0J2ZxGFSP4Tm-2hnwmvo1OljdxXJCyrHq25Tw';

          const response = await axios.get('/search/name/best?query=apple', {
            headers: {
              Authorization: `Bearer ${token}`,
            },

          });
          console.log(response.data.result[0].storeName); //0번째 리스트
          setShopInfoArray(response.data.result);

        } catch (error) {
          //응답 실패
          // console.error(error);
        }
      }

    return(
        <div>
            <button onClick={getData}>데이터 불러오기</button>
        </div>
        
    );
  }

export default ExampleAx;