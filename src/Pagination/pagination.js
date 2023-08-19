import styled from "styled-components";

/*Post 컴포넌트로부터 총 게시물수(total), 페이지당 게시물수(limit), 
현재 페이지 번호(page)를 props로 받음 */
function Pagination({ total, limit, page, setPage }) {

  const numPages = Math.ceil(total / limit);
  //필요한 페이지의 개수 numPages
  // Math.ceil() = 소수점 이하를 올림한다. 총게시물수랑 페이지당 나누기

  return (
    <>
      <Nav>
        {/* 앞으로 가는 버튼 */}
        <Button onClick={() => setPage(page - 1)} disabled={page === 1}>
          &lt; {/* < 지 알아서 이 화살표 만들어주는거임 */}
          {/*disabled = 해당 요소가 비활성화됨을 명시함 page가 1일때 사용불가*/}
        </Button>

        {/* 페이지 번호 생성~ 해서 버튼 */}
        {Array(numPages)
          .fill()
          .map((_, i) => (
            <Button
              key={i + 1}
              onClick={() => setPage(i + 1)}
              aria-current={page === i + 1 ? "page" : null}
              //삼항연산자 "조건식? 참일때 실행 : 거짓일때 실행"
              //현재 페이지가 가리키는 버튼을 aria-current 속성으로 표시
            >
              {i + 1}
            </Button>
          ))}

        <Button onClick={() => setPage(page + 1)} disabled={page === numPages}>
          &gt;
        </Button>
      </Nav>
    </>
  );
}

//버튼 스타일
const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  margin: 16px;
`;

const Button = styled.button`
  border: none;
  border-radius: 8px;
  background: none;
  padding: 8px;
  margin: 0;
  color: #B4B4B4;
  font-weight: bold;
  font-size: 1.01rem;

  &:hover {
    color: #191919;
    cursor: pointer;
    transform: translateY(-2px);
  }

  &[disabled] {
    cursor: revert;
    transform: revert;
  }

  &[aria-current] {
    font-weight: bold;
    color: #191919;
    cursor: revert;
    transform: revert;
  }
`;

export default Pagination;