import styled from "styled-components";
import { ReactComponent as Arrow } from "../images/arrow_icon.svg";
import { ReactComponent as ExampleImg } from "../images/profile_example.svg";
import { ReactComponent as ExampleBackImg } from "../images/background_img_example.svg";
import Tweets from "./Tweets";
import Button from "./Button";
import Search from "./Search";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  // Name, NickName, ProfileImg, Tweets 받아오기
  // CountTweets 계산
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
            <Name>World Of History</Name>
            <CountTweets>2 Tweets</CountTweets>
          </ColumnTemplate>
        </Header>
        <Img>
          <BackgroundImg />
        </Img>
        <ProfileImg />
        <Button text="Edit profile" type="3" />
        <Intro>
          <Name>World Of History</Name>
          <NickName>@UmerBzv</NickName>
          <Bio>
            🔸History from all around the world. 🔸Historical Photos and
            videos.🔸Let’s go through different phases of history.
          </Bio>
          <NickName>Joined May 2023</NickName>
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
        <Tweets />
        <Tweets />
      </ProfileContainer>
      <Search />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
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
  width: 650px;
  border-right: 1px solid #303336;
  border-left: 1px solid #303336;
`;

const NickName = styled.p`
  color: #72767a;
  font-weight: 500;
  font-size: 16px;
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

const ProfileImg = styled(ExampleImg)`
  width: 8.5rem;
  height: 8.5rem;
  padding-left: 18px;
  position: absolute;
  margin-top: 11.5rem;
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
`;

const BackgroundImg = styled(ExampleBackImg)`
  height: 200px;
  width: 100%;
  background-color: #343639;
`;

export default Profile;
