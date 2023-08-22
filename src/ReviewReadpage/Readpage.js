import { useState, useEffect } from 'react';
import styles from './Reaview.module.css';
import axios from 'axios';

function ReadPage({ setReadOpen, review, token }){
    // 모달 끄기 
    const closeModal = () => {
        setReadOpen(false);
    };

    console.log(review)

    return(
        <div className={styles.container}>
            <button className={styles.close} onClick={closeModal}>
                X
            </button>

            <div className={styles.name_title}>
                <p>미용싫어하는 금쪽이의 변화</p>                
            </div>

            {/*후기 사진*/}
            <div className={styles.read_img}>
                <img src={review.images[0] ? review.images[0].imageUrls : '/img/dog.png'}/>
                {/* <img src={'/img/dog.png'}/> */}
            </div>

            <p className={styles.review_title}>
                <span>{review.userId}</span>님이 작성하신 후기입니다.</p>
            <p className={styles.review_date}>
                예약일시 : <span>{review.modifiedDate.split("T")[0]}</span></p>
            <p className={styles.review_service}>
                별점 : {review.reviewLike}</p>

            <div className={styles.review_detail}>
                <p>{review.reviewContent}</p>
            </div>
        </div>
    );
}
export default ReadPage;
