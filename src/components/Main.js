import styled from "styled-components";
import Header from "./Header";
import AddTweet from "./AddTweet";
import Tweets from "./Tweets";
import Search from "./Search";

const Main = ({ tweets, main }) => {
  return (
    <>
      <Container>
        <MainContainer>
          <Header />
          <AddTweet main={main} />
          {tweets.map((tweet) => (
            <Tweets
              key={tweet.tweetId}
              id={tweet.writer.userId}
              name={tweet.writer.name}
              profile_photo={tweet.writer.profilePhoto}
              content={tweet.content}
              created_date={tweet.createdDate}
              tweet_id={tweet.tweetId}
            />
          ))}
        </MainContainer>
        <Search />
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
