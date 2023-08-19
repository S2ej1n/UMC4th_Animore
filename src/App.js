import './App.css';
import { Routes, Route, Link } from 'react-router-dom'
import './Nav.css';
import Book from './Bookpage/Book.js'
import Company from './CompPage/Company.js'
import Search from './SearchPage/Searchcopy'

/*곧 삭제할거임*/
import ExampleAx from './AxiosExample/exam.js';

function App() {
  return (
    <div className="App">
      
      <div className="Navbar">
        <img id="logo" src="/img/logo.png"></img>
        <div className='nav_menu'>
          <Link className='navbarMenu' to={'/'}>홈</Link>
          <span> | </span>
          <Link className='navbarMenu' to={'/book'}>미용실</Link>
          <span> | </span>
          <Link className='navbarMenu' to={'/impupload'}>예약내역</Link>
          <span> | </span>
          <Link className='navbarMenu' to={'/'}>마이페이지</Link>
          <span> | </span>
          <Link className='navbarMenu' to={'/'}>로그아웃</Link>
        </div>
      </div>

      <Routes>
        <Route path="/book" element={ <Book /> } />
        <Route path="/company" element={ <Company/> } />
        <Route path="/search/:searchText" element={ <Search/> } />

        <Route path="/examax" element={ <ExampleAx/> } />
      </Routes>
    </div>
  );
}

export default App;
