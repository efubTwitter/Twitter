## 💙 Twitter 클론 코딩

### 기능 설명

트위터 클론코딩(CRUD, 좋아요, 해시태그 기능 구현 예정)

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
