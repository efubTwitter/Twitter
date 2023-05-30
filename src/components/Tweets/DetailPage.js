import styled from "styled-components";
import { ReactComponent as Arrow } from "../../images/arrow_icon.svg";
import { ReactComponent as ArrowWhite } from "../../images/arrow_white.svg";
import Tweets from "./Tweets";
import Search from "../Explore/Search";
import Reply from "./Reply";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const DetailPage = ({ tweets, main }) => {
  const params = useParams();
  const tweetId = params.tweet_id;

  const color = useSelector((state) => state.color);

  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(-1);
  };

  return (
    <>
      <DetailPageContainer>
        <Header>
          {color === "white" ? (
            <ArrowIcon onClick={handleNavigate} />
          ) : (
            <ArrowWhiteIcon onClick={handleNavigate} />
          )}
          <Category color={color}>Tweet</Category>
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
              heartList={tweet.heartUserList}
            />
          ))}
        <Reply key={main.userId} main={main} />
      </DetailPageContainer>
      <Search tweets={tweets} />
    </>
  );
};

const ArrowWhiteIcon = styled(ArrowWhite)`
  width: 20px;
  margin-right: 40px;
  cursor: pointer;
`;

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
  color: ${(props) => props.color};
`;

export default DetailPage;
