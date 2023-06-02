## 💙 Twitter 클론 코딩

### 🔗 기능 설명
### 필수 기능 구현 완료(5/17 ~ 5/21)
- [x] 좌측 네비게이션 바의 라우팅 부분
- [x] 메인 화면의 전체 트윗 보기 기능(GET) 및 화면
- [x] 세부 화면의 트윗 개별 보기 기능(GET) 및 화면
- [x] 프로필 화면의 사용자 정보 불러오기 기능(GET) 및 화면
- [x] 트윗 작성 기능(POST)
- [x] 트윗 삭제 기능(DELETE)

### 추가 구현 기능(5/22 ~ 5/30)
- [x] 좋아요 버튼(POST, DELETE)
- [x] 좋아요 누른 게시글만 모아보기 (각 트윗에 있는 좋아요 누른 사람들의 id 리스트에서 일치하는 id만 필터링)
- [x] 팔로잉 기능(POST)
- [x] 팔로잉 / 팔로워 모아보기(GET)
- [x] 팔로잉하는 유저들의 게시글만 모아보기 (팔로잉하는 유저 리스트에 있는 id와 전체 트윗 작성자 id를 비교해 일치하는 것만 필터링)
- [x] 화이트모드 / 다크모드 전환하기(Redux 활용)

### 디자인 디테일 추가
- [x] 트윗 내용 입력 유무에 따라 버튼 활성화/비활성화 디자인
- [x] 메뉴바의 각 메뉴 hover 효과
- [x] home 화면의 header 뒷배경 블러 효과
- [x] option 선택에 따른 하이라이트 효과

<br>

### 🔗 상세 페이지
### 1. home 페이지 - 전체 트윗 조회
<img width="1419" alt="스크린샷 2023-05-30 오전 3 11 52" src="https://github.com/efubTwitter/twitter-frontend/assets/104717341/00bb6c20-5d02-41e6-a33e-f79d756ad8cb">

### 2. home 페이지 - 팔로잉하는 유저들의 트윗만 조회
<img width="1417" alt="스크린샷 2023-05-30 오전 3 12 11" src="https://github.com/efubTwitter/twitter-frontend/assets/104717341/661d03ed-e2e9-41b7-be3f-f41b3348f25d">

### 3. 개별 트윗 조회
<img width="1418" alt="스크린샷 2023-05-30 오전 3 13 01" src="https://github.com/efubTwitter/twitter-frontend/assets/104717341/e869afee-f2ca-40f8-a65f-eb54cde94e76">

### 4. 유저들만 조회
<img width="1419" alt="스크린샷 2023-05-30 오전 3 12 29" src="https://github.com/efubTwitter/twitter-frontend/assets/104717341/5eaa601a-3731-49ba-94eb-674e88349517">

### 5. 프로필 조회 - 유저가 작성한 트윗만 조회
<img width="1416" alt="스크린샷 2023-05-30 오전 3 12 37" src="https://github.com/efubTwitter/twitter-frontend/assets/104717341/7d295d86-d09d-4ad8-9e59-1fb715266b42">

### 6. 프로필 조회 - 유저가 좋아요 누른 트윗만 조회
<img width="1421" alt="스크린샷 2023-05-30 오전 3 12 47" src="https://github.com/efubTwitter/twitter-frontend/assets/104717341/4eddcd96-69ff-454a-b801-5ddf1d885820">

### 7. 팔로잉하는 유저 리스트 조회

<img width="1423" alt="스크린샷 2023-05-30 오전 3 13 18" src="https://github.com/efubTwitter/twitter-frontend/assets/104717341/6d6d35bc-fd7c-4908-8f1a-4b8a72dbd8f1">

### 8. 팔로워 유저 리스트 조회

<img width="1420" alt="스크린샷 2023-05-30 오전 3 13 28" src="https://github.com/efubTwitter/twitter-frontend/assets/104717341/4869fc5c-fe08-4fb4-af21-33da0eb036c7">

### 9. 화이트모드
<img width="1426" alt="스크린샷 2023-05-30 오전 3 13 40" src="https://github.com/efubTwitter/twitter-frontend/assets/104717341/b7da46d8-1af7-430c-9d2d-5d148b4b16f4">
<img width="1423" alt="스크린샷 2023-05-30 오전 3 13 47" src="https://github.com/efubTwitter/twitter-frontend/assets/104717341/045b8011-08c7-4cdb-9590-f0c4761fb9f5">
<img width="1422" alt="스크린샷 2023-05-30 오전 3 14 04" src="https://github.com/efubTwitter/twitter-frontend/assets/104717341/7b80e327-7c3c-466c-8638-ebe1fe6364c5">


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
| 프론트엔드 | React, Redux, Styled-Components |
| 백엔드     | Spring, MySQL, AWS EC2 & RDS     |
| 협업 툴    | Notion                           |

<br>

### 🔗 팀 노션 링크 
#### [EFUB 1팀 Notion](https://www.notion.so/fa7b4ac9bdce4f7b8f41d9e6effaccc8?v=ae541729529e4db6a833c9d9645c5060&pvs=4)

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
