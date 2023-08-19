import styles from './Reaview.module.css';

function ReadPage({ setReadOpen }){
    // 모달 끄기 
    const closeModal = () => {
        setReadOpen(false);
    };

    const str = `저희 포도는 베넷미용에 안좋은 기억이 있어서
    어딜가나 미용할때마다 스트레스받아하는게 보였어요. 그래서 미
    용 어디에 보낼지 정말 고민 많이하는 편인데 애니모어를 이용하면
    서 봉봉살롱을 알게 되었어요. 처음에는 할인기간인데다 마침 집에
    서 가까워서 한번 맡겨봤는데 정말 평생 단골로 방문해야겠어요 :)
    원장님이 항상 저희 포도 미용전에도 잘 놀아주셔서 그런지 웃으면
    서 미용하는 모습을 볼 수 있더라구요 (감동) 가끔 목욕하기 힘들때
    달마다 목욕도 한 번 맡겨 보려구요 ㅎㅎ 여기 진짜 미용도 잘하니까
    가까이 사시는 견주분들 꼭 방문해보세요 추천추천`

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
                <img src='/img/dog.png'/>
            </div>

            <p className={styles.review_title}>
                <span>포도맘</span>님이 작성하신 후기입니다.</p>
            <p className={styles.review_date}>
                예약일시 : <span>2023년 7월 29일</span></p>
            <p className={styles.review_service}>
                미용+힐링스파목욕</p>

            <div className={styles.review_detail}>
                <p>{str}</p>
            </div>
        </div>
    );
}
export default ReadPage;
