import "../CSS/Home.css";

function Home() {
  return (
    <div className="home">
      <div id="home-box">
        <div id="home-header">안녕하세요 웹 개발자 김희은입니다 :) </div>
        <hr />
        <div id="home-main">
          <p>느리지만 꾸준히 성장해 나가는 웹 개발자입니다.</p>
          <p>
            사용자의 편의성을 최우선으로 생각하는 프론트엔드 개발자가 되고
            싶습니다.
          </p>
          <br />
          {/* <p>※ 가상의 포트폴리오입니다 ※ </p> */}
        </div>
      </div>
    </div>
  );
}

export default Home;
