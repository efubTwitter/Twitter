import styled from "styled-components";
import Header from "./Header";
import AddTweet from "./AddTweet";
import Tweets from "./Tweets";
import Search from "./Search";

const Main = () => {
  return (
    <>
      <Container>
        <MainContainer>
          <Header />
          <AddTweet />
          <Tweets />
          <Tweets />
          <Tweets />
        </MainContainer>
        <Search />
      </Container>
    </>
  );
};

const Container = styled.div`
  display: flex;
`;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-right: 1px solid #303336;
  border-left: 1px solid #303336;
  margin-left: 270px;
`;

export default Main;
