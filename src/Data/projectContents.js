import project1 from "../image/project1.png";
import project2 from "../image/project2.png";
import project3 from "../image/project3.png";
import project4 from "../image/project4.jpg";
import project5 from "../image/project5.png";
import project6 from "../image/project6.PNG";

const projectContents = [
  {
    projectImg: project1,
    title: "코코아톡 클론코딩",
    period: "2023.11.13 ~ 2023.11.19",
    skill: "HTML5, CSS",
    content: [
      "코코아톡의 외부 모습을 따라 만들어 본다.",
      "기본적인 HTML, CSS를 활용하여 프로필, 채팅창을 만들어본다",
    ],
  },
  {
    projectImg: project2,
    title: "바닐라 JS로 크롬 앱 만들기",
    period: "2023.11.20 ~ 2023.12.03",
    skill: "HTML5, CSS, JavaScript",
    content: [
      "JS Clock 구현",
      "JS To Do List 구현",
      "Get Geolocation 구현",
      "Get Weather Information 구현",
      "Deploy to Github Pages",
    ],
  },
  {
    projectImg: project3,
    title: "ReactJS로 영화 웹 서비스 만들기",
    period: "2023.12.04 ~ 2023.12.10",
    skill: "React, HTML5, CSS, JavaScript, NodeJS",
    content: ["JSX", "State", "Props", "Class Component", "Data Fetching"],
  },
  {
    projectImg: project4,
    title: "쇼핑몰을 만들며 배우는 React",
    period: "2023.12.11 ~ 2023.12.17",
    skill: "React, HTML5, CSS, JavaScript",
    content: [
      "컴포넌트, props, state를 이용한 모던 웹 개발",
      "JSX for 반복문, 이벤트 핸들러 등 UI기능 구현",
      "라우터로 페이지 나누기",
      "Redux와 context API로 state 관리하기",
      "Ajax 등으로 서버 API 통신하는 법",
      "외부 라이브러리 (Bootstrap, Styled component, SASS) 이용",
      "서버프로젝트와 리액트 연동",
    ],
  },
  {
    projectImg: project5,
    title: "웹 버전 인스타그램 만들기",
    period: "2023.12.18 ~ 2023.12.24",
    skill: "Vue.js, HTML5, CSS, JavaScript",
    content: [
      "탭 만들기 & 탭으로 사진 업로드 페이지 만들기",
      "서버없이 업로드한 이미지 다루기",
      "글 발행기능 만들기 ",
      "업로드한 이미지 인스타그램 필터 기능 만들기",
      "좋아요 & 좋아요 취소기능 만들기",
      "팔로워 페이지 만들기",
    ],
  },
  {
    projectImg: project6,
    title: "Portfolio",
    period: "2023.11.01 ~ 2023.11.08",
    skill: "React, HTML5, CSS, JavaScript",
    content: [
      "나만의 웹 포트폴리오 만들기",
      "반복되는 요소는 컴포넌트로 만들어 주기",
      "map함수를 사용하여 반복되는 컴포넌트를 효율적으로 보여주기",
      "React Router (리액트 라우터) 사용",
      "useNavigate 훅을 사용하여 페이지 이동",
      "useParams, useLocation 훅을 이용해 데이터를 가져와 상세페이지 구현",
    ],
  },
];

export default projectContents;
