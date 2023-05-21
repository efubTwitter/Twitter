import styled from "styled-components";
import { ReactComponent as Arrow } from "../images/arrow_icon.svg";
import Tweets from "./Tweets";
import Search from "./Search";
import Reply from "./Reply";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

const DetailPage = ({ tweets }) => {
  const params = useParams();
  const tweetId = params.tweet_id;

  console.log(tweetId);
  // 왜 아래에 일치하는 tweetId가 안찾아지나 했더니 tostring()으로 바꾸니까 해결! 자료형이 안맞아서 안됐던 것 같다.

  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(-1);
  };

  return (
    <>
      <DetailPageContainer>
        <Header>
          <ArrowIcon onClick={handleNavigate} />
          <Category>Tweet</Category>
        </Header>
        {tweets
          .filter((u) => u.tweetId.toString() === tweetId.toString())
          .map((tweet) => (
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
        <Reply />
      </DetailPageContainer>
      <Search />
    </>
  );
};

const DetailPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 270px;
  height: 100vh;
  border-right: 1px solid #303336;
  border-left: 1px solid #303336;
  width: 40rem;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  height: 55px;
  margin-left: 20px;
  width: 43vw;
`;

const ArrowIcon = styled(Arrow)`
  width: 20px;
  margin-right: 40px;
  cursor: pointer;
`;

const Category = styled.p`
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 0px;
  margin-top: 2px;
`;

export default DetailPage;
