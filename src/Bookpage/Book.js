import './Book.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import { useState } from 'react';
import Search from '../SearchPage/Search.js';
import { useNavigate } from 'react-router-dom';

function Book(){
    const [searchText, setSearchText] = useState('');
    const navigate = useNavigate();

    {/*엔터키 눌렀을 때 동작*/}
    const onSubmitSearch = (e) =>{
        if (e.key === "Enter") {
            navigate(`/search/${searchText}`);
          }
    }

    return(
        <div>
            <div className="searchBox">
                <img src='img/search_icon1.png'/>
                <input id="searchBox" type="text" placeholder="포메라니안 가위컷 전문 샵"
                onKeyDown={onSubmitSearch} 
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}/>
            </div>
            <div className='recent'>
                <Container>
                    <div className="container">
                    <p id="nic_text">OOO님의 최근 방문 기록</p>
                        <div className="row">
                            <div className="col">
                            </div>
                            <div className="col"></div>
                            <div className="col"></div>
                        </div>
                    </div>
                </Container>
            </div>
            <div className='many'>
                <Container>
                    <div className="container">
                    <p id="nic_text">OOO님이 사시는 동네 예약 많은 순</p>
                        <div className="row">
                            <div className="col"></div>
                            <div className="col"></div>
                            <div className="col"></div>
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    );
}

export default Book;