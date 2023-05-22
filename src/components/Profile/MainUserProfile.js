import styled from "styled-components";
import { ReactComponent as Arrow } from "../../images/arrow_icon.svg";
import Tweets from "../Tweets/Tweets";
import Button from "../Button";
import Search from "../Explore/Search";
import { useNavigate } from "react-router-dom";

const MainUserProfile = ({ main, tweets }) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/");
  };

  return (
    <Container>
      <ProfileContainer>
        <Header>
          <ArrowIcon onClick={handleNavigate} />
          <ColumnTemplate>
            <Name>{main.name}</Name>
            <CountTweets>
              {tweets.filter((u) => u.writer.userId === main.userId).length}
              Tweets
            </CountTweets>
          </ColumnTemplate>
        </Header>
        <Img>
          <BackgroundImg src={main.headerPhoto} />
        </Img>
        <ProfileImg src={main.profilePhoto} />
        <Button text="Edit profile" type="3" />
        <Intro>
          <Name>{main.name}</Name>
          <NickName>@{main.userId}</NickName>
          <Bio>{main.bio}</Bio>
          <NickName>Joined {main.joinedDate.slice(0, 10)}</NickName>
        </Intro>
        <SelectContainer>
          <OptionContainer>
            <Select1>Tweets</Select1>
            <Highlight />
          </OptionContainer>
          <Select2>Replies</Select2>
          <Select2>Media</Select2>
          <Select2>Likes</Select2>
        </SelectContainer>
        {tweets
          .filter((t) => t.writer.userId === "efubteam1")
          .map((n) => (
            <Tweets
              key={main.userId}
              id={main.userId}
              name={main.name}
              profile_photo={main.profilePhoto}
              content={n.content}
              created_date={main.createdDate}
              tweet_id={n.tweetId}
            />
          ))}
      </ProfileContainer>
      <Search />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  width: 40rem;
  height: 100vh;
`;

const SelectContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  border-bottom: 1px solid #303336;
`;

const OptionContainer = styled.div``;

const Highlight = styled.div`
  width: 60px;
  height: 5px;
  background-color: #2099ed;
  border-radius: 5px;
`;

const Select1 = styled.p`
  font-size: 1rem;
  font-weight: 700;
`;

const Select2 = styled(Select1)`
  color: #72767a;
`;

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 270px;
  height: 100%;
  width: 40rem;
  border-right: 1px solid #303336;
  border-left: 1px solid #303336;
`;

const NickName = styled.p`
  color: #72767a;
  font-weight: 500;
  font-size: 17px;
  margin-right: 5px;
  margin-bottom: 3px;
  margin-top: 1px;
`;

const Bio = styled.div`
  word-break: break-all;
  margin-right: 20px;
  margin-top: 10px;
  margin-bottom: 10px;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  height: 60px;
  margin-left: 20px;
  width: 43vw;
`;

const Intro = styled.div`
  height: 100px;
  margin-top: 1.7rem;
  margin-left: 20px;
  margin-bottom: 50px;
`;

const CountTweets = styled.p`
  font-size: 15px;
  color: #72767a;
  font-weight: 500;
  margin-top: 4px;
  margin-bottom: 5px;
`;

const ProfileImg = styled.img`
  width: 9rem;
  height: 9rem;
  margin-left: 18px;
  position: absolute;
  margin-top: 14.5rem;
  border-radius: 50%;
`;

const ColumnTemplate = styled.div`
  display: flex;
  flex-direction: column;
`;

const Name = styled.p`
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 0px;
  margin-top: 2px;
`;

const ArrowIcon = styled(Arrow)`
  width: 20px;
  margin-right: 40px;
  cursor: pointer;
`;

const Img = styled.div`
  height: 200px;
  margin-bottom: 55px;
`;

const BackgroundImg = styled.img`
  height: 250px;
  width: 100%;
  background-color: #343639;
`;

export default MainUserProfile;
