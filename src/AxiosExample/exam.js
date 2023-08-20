import axios from 'axios';
import { useState, useEffect } from 'react';

function ExampleAx(){

  const [shopInfoArray, setShopInfoArray] = useState([]);

  // useEffect(() => {
  //   // shopInfoArray 상태가 업데이트될 때마다 실행됨
  //   shopInfoArray.forEach((shop) => {
  //     console.log('Store ID:', shop.storeId);
  //     console.log('Store Name:', shop.storeName);
  //     console.log('Store Explain:', shop.storeExplain);
  //     console.log('Store Image URL:', shop.storeImageUrl);
  //     console.log('--------------------'); // 구분용 줄
  //   });
  // }, [shopInfoArray]); // shopInfoArray 상태가 변경될 때만 실행됨

    async function getData() {
        try {
          let token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJjb3PthqDtgbAiLCJpZCI6MSwiZXhwIjoxNjkyNzg1NzE4LCJ1c2VybmFtZSI6Imtha2FvXzI4OTgyMDI5NDQifQ.yFK4TqoT7I2ckMp-pQAytO5vg_IjPr1A3co2iAZMU1OJFkt1H0J2ZxGFSP4Tm-2hnwmvo1OljdxXJCyrHq25Tw';

          const response = await axios.get('/search/1', {
            headers: {
              Authorization: `Bearer ${token}`,
            },

          });
          // setShopInfoArray(response.data.result);
          console.log(response.data.result)

        } catch (error) {
          //응답 실패
           console.error('데이터 가져오기 오류:', error);
        }
      }

    return(
        <div>
            <button onClick={getData}>데이터 불러오기</button>
        </div>
        
    );
  }

export default ExampleAx;