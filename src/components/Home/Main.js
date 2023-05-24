import styled from "styled-components";
import Header from "./Header";
import AddTweet from "./AddTweet";
import Tweets from "../Tweets/Tweets";
import Search from "../Explore/Search";

const Main = ({ tweets, main, setTweets }) => {
  // tweets 배열을 최신 날짜 순으로 정렬(createdDate가 문자열 형식이라 new Date로 바꿔준다.)
  const sortedTweets = [...tweets].sort(
    (a, b) => new Date(b.createdDate) - new Date(a.createdDate)
  );

  return (
    <>
      <Container>
        <MainContainer>
          <Header />
          <AddTweet main={main} tweets={tweets} setTweets={setTweets} />
          {sortedTweets.map((tweet) => (
            <Tweets
              key={tweet.tweetId}
              id={tweet.writer.userId}
              name={tweet.writer.name}
              profile_photo={tweet.writer.profilePhoto}
              content={tweet.content}
              created_date={tweet.createdDate}
              tweet_id={tweet.tweetId}
              heartList={tweet.heartUserList}
            />
          ))}
        </MainContainer>
        <Search tweets={tweets} />
      </Container>
    </>
  );
};

const Container = styled.div`
  display: flex;
  height: 100vh;
`;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-right: 1px solid #303336;
  border-left: 1px solid #303336;
  margin-left: 270px;
  width: 40rem;
`;

export default Main;
