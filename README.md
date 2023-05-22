## 💙 Twitter 클론 코딩

### 🔗 기능 설명
필수 기능 구현 완료(5/17 ~ 5/21)
- [x] 좌측 네비게이션 바의 라우팅 부분
- [x] 메인 화면의 전체 트윗 보기 기능(GET) 및 화면
- [x] 세부 화면의 트윗 개별 보기 기능(GET) 및 화면
- [x] 프로필 화면의 사용자 정보 불러오기 기능(GET) 및 화면
- [x] 트윗 작성 기능(POST)
- [x] 트윗 삭제 기능(DELETE)

추가로 구현중인 기능(5/22 ~ )
- [ ] 좋아요 버튼
- [ ] 좋아요 누른 게시글 모아보기  
- [ ] 유저검색 기능

<br>

### 🔗 상세 페이지
<img width="1413" alt="스크린샷 2023-05-21 오후 11 08 15" src="https://github.com/efubTwitter/twitter-frontend/assets/104717341/67f17623-a267-48aa-92fc-4b74392cb3b2">
<img width="1414" alt="스크린샷 2023-05-21 오후 11 08 33" src="https://github.com/efubTwitter/twitter-frontend/assets/104717341/5b77c7a6-3864-4ed6-891f-e654ba803cca">
<img width="1415" alt="스크린샷 2023-05-21 오후 11 08 43" src="https://github.com/efubTwitter/twitter-frontend/assets/104717341/5588f00e-615d-4339-b5bf-88f8167feb31">
<img width="1418" alt="스크린샷 2023-05-21 오후 11 09 10" src="https://github.com/efubTwitter/twitter-frontend/assets/104717341/8a46dc8a-6c96-4420-88dc-25abb5f16574">
<img width="1417" alt="스크린샷 2023-05-21 오후 11 09 02" src="https://github.com/efubTwitter/twitter-frontend/assets/104717341/60763262-db4f-4670-bdf8-dc2274f67fbf">
<img width="1416" alt="스크린샷 2023-05-21 오후 11 30 29" src="https://github.com/efubTwitter/twitter-frontend/assets/104717341/7e14264e-f1ce-4fab-af19-c75e1be2f4b3">


<br>

### 🔗 팀원 구성

: 프론트엔드 1명, 백엔드 1명으로 구성
| POSITION | NAME |
| --- | --- |
| 프론트엔드 | 이주희 |
| 백엔드 | 김예지 |

<br>

### 🔗 기술 스택

| POSITION   | STACK                            |
| ---------- | -------------------------------- |
| 프론트엔드 | React, Styled-Components, Vercel |
| 백엔드     | Spring, MySQL, AWS EC2 & RDS     |
| 협업 툴    | Notion                           |

<br>

### 🔗 풀더 구조
```javascript
├── node_modules
├── README.md
├── package-lock.json
├── package.json
├── .gitignore
├── public
│   ├── favicon.ico (넣을 예정)
│   ├── index.html
└── src
    ├── App.js
    ├── index.css
    ├── index.js
    ├── images
    └── components
	├── Explore
	│   ├── Explore.js : Explore 페이지
	│   ├── Search.js : Explore 페이지 내부 검색 창	    
	│   └── Trends.js : Explore 페이지 내부 요소
	├── Home
	│   ├── AddTweet.js : 텍스트, 이미지 입력(이미지 미리보기, 삭제), 게시물 업로드 버튼
	│   ├── Header.js : Home 페이지 헤더
	│   └── Main.js : Home 페이지
	├── Profile
	│   ├── MainUserProfile.js : 메인 유저 전용 프로필 컴포넌트
	│   └── Profile.js : 개별 상세 프로필
	├── Tweets
	│   ├── DetailPage.js : 트윗 개별 상세페이지
	│   ├── Reply.js : 답글 입력 컴포넌트
	│   └── Tweets.js : 개별 트윗 컴포넌트
	├── Button.js : 사이즈 별 버튼 컴포넌트
	├── NavBar.js : 좌측 메뉴바, 트윗 버튼, 유저 미니 프로필
	└── Template.js : 자식 요소 가로 방향으로 정렬하는 템플릿
  	   
```
