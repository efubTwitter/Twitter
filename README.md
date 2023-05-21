## 💙 Twitter 클론 코딩

### 기능 설명

트위터 클론코딩
- CRUD 완성
- 좋아요 & 유저검색 기능 구현중

<br>

### 페이지
<img width="1413" alt="스크린샷 2023-05-21 오후 11 08 15" src="https://github.com/efubTwitter/twitter-frontend/assets/104717341/67f17623-a267-48aa-92fc-4b74392cb3b2">
<img width="1414" alt="스크린샷 2023-05-21 오후 11 08 33" src="https://github.com/efubTwitter/twitter-frontend/assets/104717341/5b77c7a6-3864-4ed6-891f-e654ba803cca">
<img width="1415" alt="스크린샷 2023-05-21 오후 11 08 43" src="https://github.com/efubTwitter/twitter-frontend/assets/104717341/5588f00e-615d-4339-b5bf-88f8167feb31">
<img width="1418" alt="스크린샷 2023-05-21 오후 11 09 10" src="https://github.com/efubTwitter/twitter-frontend/assets/104717341/8a46dc8a-6c96-4420-88dc-25abb5f16574">
<img width="1417" alt="스크린샷 2023-05-21 오후 11 09 02" src="https://github.com/efubTwitter/twitter-frontend/assets/104717341/60763262-db4f-4670-bdf8-dc2274f67fbf">
<img width="1416" alt="스크린샷 2023-05-21 오후 11 30 29" src="https://github.com/efubTwitter/twitter-frontend/assets/104717341/7e14264e-f1ce-4fab-af19-c75e1be2f4b3">


<br>

### 팀원 구성

: 프론트엔드 1명, 백엔드 1명으로 구성
| POSITION | NAME |
| --- | --- |
| 프론트엔드 | 이주희 |
| 백엔드 | 김예지 |

<br>

### 기술 스택

| POSITION   | STACK                            |
| ---------- | -------------------------------- |
| 프론트엔드 | React, Styled-Components, Vercel |
| 백엔드     | Spring, MySQL, AWS EC2 & RDS     |
| 협업 툴    | Notion                           |

<br>

### 풀더 구조
```
├── node_modules
├── README.md
├── package-lock.json
├── package.json
├── .gitignore
├── public
│   ├── favicon.ico
│   ├── index.html
└── src
    ├── App.js
    ├── index.css
    ├── index.js
    ├── images
    └── components
	      ├── AddTweet.js : 텍스트, 이미지 입력(이미지 미리보기, 삭제), 게시물 업로드 버튼
	      ├── Button.js : 사이즈 별 버튼 컴포넌트
	      ├── DetailPage.js : 트윗 개별 상세페이지
	      ├── Explore.js : Explore 페이지
	      ├── Header.js : Home 페이지의 헤더
	      ├── Main.js : Home 페이지
	      ├── MainUserProfile.js : 메인 유저 전용 프로필 컴포넌트(로그인 기능 부재로 임시 선정)
	      ├── NavBar.js : 좌측 메뉴바, 트윗 버튼, 유저 미니 프로필
	      ├── Profile.js : 개별 상세 프로필
	      ├── Reply.js : 답글 입력 컴포넌트
	      ├── Search.js : Explore 페이지 내부 검색 창
	      ├── Template.js : 자식 요소 가로 방향으로 정렬하는 템플릿
	      ├── Trends.js : Explore 페이지 내부 요소
  	      └── Tweets.js : 개별 트윗 컴포넌트
```
