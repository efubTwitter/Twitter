## 💙 Twitter 클론 코딩

### 🔗 기능 설명
필수 기능 구현 완료(5/17 ~ 5/21)
- [x] 좌측 네비게이션 바의 라우팅 부분
- [x] 메인 화면의 전체 트윗 보기 기능(GET) 및 화면
- [x] 세부 화면의 트윗 개별 보기 기능(GET) 및 화면
- [x] 프로필 화면의 사용자 정보 불러오기 기능(GET) 및 화면
- [x] 트윗 작성 기능(POST)
- [x] 트윗 삭제 기능(DELETE)

추가 구현 기능(5/22 ~ )
- [x] 유저 리스트 
- [x] 좋아요 기능
- [x] 좋아요 누른 게시글 모아보기
- [ ] 팔로잉 기능

<br>

### 🔗 상세 페이지

<img width="1440" alt="스크린샷 2023-05-25 오전 4 02 31 1" src="https://github.com/efubTwitter/twitter-frontend/assets/104717341/56959775-a5b1-4b96-a512-d0a15a35daee">
<img width="1440" alt="스크린샷 2023-05-25 오전 4 02 41" src="https://github.com/efubTwitter/twitter-frontend/assets/104717341/34bab2e2-bbc6-4032-b5b3-06754ca63927"><img width="1440" alt="스크린샷 2023-05-25 오전 4 02 49" src="https://github.com/efubTwitter/twitter-frontend/assets/104717341/0b8deea1-2ce7-42d6-bf4b-58da43544bfc">
<img width="1436" alt="스크린샷 2023-05-25 오전 4 03 31" src="https://github.com/efubTwitter/twitter-frontend/assets/104717341/8f6b0786-a55c-4ede-8ce8-427f7326fba9">
<img width="1439" alt="스크린샷 2023-05-25 오전 4 06 00" src="https://github.com/efubTwitter/twitter-frontend/assets/104717341/3e89f74c-1a08-4572-b21d-9c6b51e4347c">



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
