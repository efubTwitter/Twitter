import styled from "styled-components";
import { ReactComponent as Arrow } from "../../images/arrow_icon.svg";
import { ReactComponent as ArrowWhite } from "../../images/arrow_white.svg";
import { ReactComponent as Write } from "../../images/write_icon.svg";
import Tweets from "../Tweets/Tweets";
import Search from "../Explore/Search";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { Link } from "react-router-dom";

const Profile = ({ tweets }) => {
  const [page, setPage] = useState("tweets");
  const [following, setFollowing] = useState([]);
  const [follower, setFollower] = useState([]);
  const params = useParams();
  const userId = params.id;
  const navigate = useNavigate();

  const color = useSelector((state) => state.color);
  const bgcolor = useSelector((state) => state.backgroundColor);
  const hover = useSelector((state) => state.hover);

  const user = tweets.find((u) => u.writer.userId === userId);

  const handleNavigate = () => {
    navigate("/");
  };

  // Following get 요청
  const getFollowing = async () => {
    try {
      const response = await axios.get(
        `http://3.38.233.150:8080/follows/${userId}/followings`
      );
      const data = await response.data;
      setFollowing(data);
    } catch (error) {
      console.log("Error while fetching tweets:", error);
    }
  };

  useEffect(() => {
    getFollowing();
  }, []);

  // Followers get 요청
  const getFollower = async () => {
    try {
      const res = await axios.get(
        `http://3.38.233.150:8080/follows/${userId}/followers`
      );
      const d = await res.data;
      setFollower(d);
    } catch (error) {
      console.log("Error while fetching tweets:", error);
    }
  };

  useEffect(() => {
    getFollower();
  }, []);

  return (
    <Container>
      <ProfileContainer>
        <Header>
          {color === "white" ? (
            <ArrowIcon onClick={handleNavigate} />
          ) : (
            <ArrowWhiteIcon onClick={handleNavigate} />
          )}

          <ColumnTemplate>
            <Name color={color}>{user.writer.name}</Name>
            <CountTweets>
              {tweets.filter((u) => u.writer.userId === userId).length} Tweets
            </CountTweets>
          </ColumnTemplate>
        </Header>
        <Img>
          <BackgroundImg src={user.writer.headerPhoto} />
        </Img>
        <ProfileImg src={user.writer.profilePhoto} />
        <Intro>
          <Name color={color}>{user.writer.name}</Name>
          <NickName>@{user.writer.userId}</NickName>
          <Bio color={color}>{user.writer.bio}</Bio>
          <NickName>
            <WriteIcon />
            Joined {user.writer.joinedDate.slice(0, 10)}
          </NickName>
          <FollowContainer>
            <Link
              key={user.writer.name}
              to={`/users/${userId}/following`}
              style={{ textDecoration: "none", color: "white" }}
            >
              <Follow>
                <FollowingNum color={color}>{following.length}</FollowingNum>
                <NickName>Following</NickName>
              </Follow>
            </Link>
            <Link
              key={user.writer.name}
              to={`/users/${userId}/follower`}
              style={{ textDecoration: "none", color: "white" }}
            >
              <Follow>
                <FollowingNum color={color}>{follower.length}</FollowingNum>
                <NickName>Followers</NickName>
              </Follow>
            </Link>
          </FollowContainer>
        </Intro>
        <SelectContainer>
          <OptionContainer
            onClick={() => setPage("tweets")}
            bgcolor={bgcolor}
            hover={hover}
          >
            <Select1 show={page} color={color}>
              Tweets
            </Select1>
            <Highlight
              style={{ display: page === "tweets" ? "block" : "none" }}
            />
          </OptionContainer>
          <OptionContainer
            onClick={() => setPage("likes")}
            bgcolor={bgcolor}
            hover={hover}
          >
            <Select2 show={page} color={color}>
              Likes
            </Select2>
            <Highlight
              style={{ display: page === "likes" ? "block" : "none" }}
            />
          </OptionContainer>
        </SelectContainer>
        {page === "tweets" &&
          tweets
            .filter((u) => u.writer.userId === userId)
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
        {page === "likes" &&
          tweets
            .filter((t) => t.heartUserList.includes(userId))
            .map((n) => (
              <Tweets
                key={n.writer.userId}
                id={n.writer.userId}
                name={n.writer.name}
                profile_photo={n.writer.profilePhoto}
                content={n.content}
                created_date={n.createdDate}
                tweet_id={n.tweetId}
                heartList={n.heartUserList}
              />
            ))}
      </ProfileContainer>
      <Search tweets={tweets} />
    </Container>
  );
};

const Bio = styled.div`
  word-break: break-all;
  margin-right: 20px;
  margin-top: 10px;
  margin-bottom: 10px;
  color: ${(props) => props.color};
`;

const FollowContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
`;

const Follow = styled.div`
  display: flex;
  align-items: center;
  margin: 0;
  margin-right: 15px;
  cursor: pointer;
  :hover {
    text-decoration: underline;
  }
`;

const FollowingNum = styled(Bio)`
  font-weight: 600;
  margin: 0px;
  padding-right: 6px;
  color: ${(props) => props.color};
`;

const ArrowWhiteIcon = styled(ArrowWhite)`
  width: 20px;
  margin-right: 40px;
  cursor: pointer;
`;

const WriteIcon = styled(Write)`
  width: 20px;
  height: 20px;
  margin-top: 0px;
  margin-right: 5px;
`;

const Container = styled.div`
  display: flex;
  width: 40rem;
  height: 80rem;
`;

const SelectContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  border-bottom: 1px solid #303336;
`;

const OptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  background-color: ${(props) => props.bgcolor};
  border: none;
  cursor: pointer;
  :hover {
    background-color: ${(props) => props.hover};
  }
`;

const Highlight = styled.div`
  width: 60px;
  height: 5px;
  background-color: #2099ed;
  border-radius: 5px;
`;

const Select1 = styled.p`
  font-size: 1.1rem;
  font-weight: 700;
  border: none;
  color: ${(props) => (props.show === "tweets" ? props.color : "#72767a")};
  margin-bottom: 20px;
  margin-top: 20px;
`;

const Select2 = styled(Select1)`
  color: ${(props) => (props.show === "likes" ? props.color : "#72767a")};
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
  display: flex;
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
  margin-top: 4.5rem;
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
  color: ${(props) => props.color};
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

export default Profile;
