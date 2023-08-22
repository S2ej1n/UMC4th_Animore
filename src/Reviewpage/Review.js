import styles from './ModalBasic.module.css';
import './Upload.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Company from '../CompPage/Company';

function Review({ setModalOpen, shopInfoList, storeId, token}){

    // 모달 끄기 
    const closeModal = () => {
        setModalOpen(false);
    };

    const [inputCount, setInputCount] = useState(0);

    //후기 내용 저장
    const [inputValue, setInputValue] = useState('');
    const onInputHandler = (e) => {
        const inputText = e.target.value.length
        setInputCount(inputText);
        setInputValue(inputText.length);
    };

    //이미지 업로드
    const [imageSrc, setImageSrc] = useState('');
    const [imageSrc2, setImageSrc2] = useState('');
    const [imageSrc3, setImageSrc3] = useState('');
    // 이미지 업로드 여부 상태 추가
    const [imageUploaded, setImageUploaded] = useState(false); 
    const [imageUploaded2, setImageUploaded2] = useState(false); 
    const [imageUploaded3, setImageUploaded3] = useState(false); 

    //첫번째 이미지
    const encodeFileToBase64 = (fileBlob) => {
        //객체 생성
        const reader = new FileReader();
        reader.readAsDataURL(fileBlob);
        return new Promise((resolve) => {
          reader.onload = () => {
            setImageSrc(reader.result);
            resolve();
          };
        });
      };

    const FileUploadHandler = (e) => {
        const file = e.target.files[0];
        if (file) {
            encodeFileToBase64(file).then(() => {
                setImageUploaded(true); // 이미지 업로드가 완료되면 상태 업데이트
            });
        } else {
            setImageSrc('');
            setImageUploaded(false); // 이미지가 없는 경우 상태 업데이트
        }
    };

    //두번째이미지
    const encodeFileToBase64_2 = (fileBlob) => {
        //객체 생성
        const reader = new FileReader();
        reader.readAsDataURL(fileBlob);
        return new Promise((resolve) => {
          reader.onload = () => {
            setImageSrc2(reader.result);
            resolve();
          };
        });
      };

    const FileUploadHandler2 = (e) => {
        const file = e.target.files[0];
        if (file) {
            encodeFileToBase64_2(file).then(() => {
                setImageUploaded2(true); // 이미지 업로드가 완료되면 상태 업데이트
            });
        } else {
            setImageSrc2('');
            setImageUploaded2(false); // 이미지가 없는 경우 상태 업데이트
        }
    };

    //세번째 이미지
    const encodeFileToBase64_3 = (fileBlob) => {
        //객체 생성
        const reader = new FileReader();
        reader.readAsDataURL(fileBlob);
        return new Promise((resolve) => {
          reader.onload = () => {
            setImageSrc3(reader.result);
            resolve();
          };
        });
      };

    const FileUploadHandler3 = (e) => {
        const file = e.target.files[0];
        if (file) {
            encodeFileToBase64_3(file).then(() => {
                setImageUploaded3(true); // 이미지 업로드가 완료되면 상태 업데이트
            });
        } else {
            setImageSrc3('');
            setImageUploaded3(false); // 이미지가 없는 경우 상태 업데이트
        }
    };

    //이미지 지우기
    const handleImageDelete = () => {
        setImageSrc('');
      };

    //-----0822리뷰전송API----------------------------------------------------------
    const encodeinputValue = encodeURIComponent(inputValue)

    const data = {
        reviewContent: inputValue
    }
    const post_Reivew_Server = () => {
        axios.post(`/reviews/create?storeId=${storeId}&petId=1&reviewContent=${encodeinputValue}&reviewLike=4.0`,
            {reviewContent: inputValue}, 
            {
            headers: {
              Authorization: `Bearer ${token}`
            }
            })
          .then(response => {
            console.log('서버 응답:', response.data);
          })
          .catch(error => {
            console.error('오류 발생:', error);
          });
      };
    //----------------------------------------------------------------

    return (
        <div className={styles.container}>
            <button className={styles.close} onClick={closeModal}>
                X
            </button>
            <p className={styles.review_title}>후기작성</p>
            <div>
            <div className={styles.review_line}></div>

            <div className={styles.r_info_Box}>
                {/* <div className={styles.comp_r_image_box}>
                    <div className={styles.comp_r_image}>
                        <img id='comp_img' src='img/example2.png'></img>  
                    </div>
                </div> */}

                <div className={styles.comp_info_box}>
                    <div className="comp_info">
                        <div className={styles.info_text}>
                            <p id={styles.title}>{shopInfoList.storeName}
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
                                )}</p>
                            <p id={styles.locat}>위치: {shopInfoList.storeLocation}</p>
                            <p id={styles.ph_num}>전화번호: {shopInfoList.storeNumber}</p>
                            <p id={styles.rec_book}>최근 예약건수: {shopInfoList.storeRecent}회</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.review_line}></div>
            <div className={styles.star_Box}>
                <div className={styles.starline}>
                    <p className={styles.review_text2}>전반적인 서비스가 어떠셨나요? </p>
                    <img className={styles.review_star} src='/img/star5.png'/>
                </div>
            </div>
            <p className={styles.review_text}>솔직한 방문 후기를 남겨주세요
            <img src='/img/moreinfo.png'/></p>
            <textarea onChange={onInputHandler} maxLength="999" 
                className={styles.review_input}></textarea>
            <p id={styles.text_length}><span>{inputCount}</span><span>/1000</span></p>
            <p className={styles.review_text}>사진 업로드</p>

            <div className={styles.imgUpload_Box}>

            {/*이미지 업로드*/}
            <div className={styles.imgUpload}>
                {/*첫번째 이미지 업로드*/}
                <div className={styles.im1}>

                    <label htmlFor="UploadImg1" className={styles.UploadImgButton}>
                        {imageUploaded ? null : <img src="/img/plusicon.png" className={styles.plusImage} />}
                    </label>
                    <input
                        type="file"
                        accept="image/*"
                        id="UploadImg1"
                        onChange={FileUploadHandler}
                    />
                    {imageSrc && <img src={imageSrc} alt="preview-img" className={styles.uploadedImage} />}
                </div>
                
                {/*두번째 이미지 업로드*/}
                <div className={styles.im1}>
                    <label htmlFor="UploadImg2" className={styles.UploadImgButton}>
                        {imageUploaded2 ? null : <img src="/img/plusicon.png" className={styles.plusImage} />}
                    </label>
                    <input
                        type="file"
                        accept="image/*"
                        id="UploadImg2"
                        onChange={FileUploadHandler2}
                    />
                    {imageSrc2 && <img src={imageSrc2} alt="preview-img" className={styles.uploadedImage} />}
                </div>

                {/*세번째 이미지 업로드*/}
                <div className={styles.im1}>
                    <label htmlFor="UploadImg3" className={styles.UploadImgButton}>
                        {imageUploaded3 ? null : <img src="/img/plusicon.png" className={styles.plusImage} />}
                    </label>
                    <input
                        type="file"
                        accept="image/*"
                        id="UploadImg3"
                        onChange={FileUploadHandler3}
                    />
                    {imageSrc3 && <img src={imageSrc3} alt="preview-img" className={styles.uploadedImage} />}
                </div>
            </div>
            </div>

            <button className={styles.review_button}
            onClick={post_Reivew_Server}>작성하기</button>
            </div>
        </div>
    );
}

export default Review;