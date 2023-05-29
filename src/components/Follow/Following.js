import styled from "styled-components";
import { ReactComponent as Arrow } from "../../images/arrow_icon.svg";
import User from "../Explore/User";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const Following = ({ main }) => {
  const [following, setFollowing] = useState([]);
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(-1);
  };

  const handleNavigateFollower = () => {
    navigate("/users/efubteam1/follower");
  };

  // Following get 요청
  const getFollowing = async () => {
    try {
      const response = await axios.get(
        "http://3.38.233.150:8080/follows/efubteam1/followings"
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

  return (
    <ExploreContainer>
      <Header>
        <ArrowIcon onClick={handleNavigate} />
        <NameContainer>
          <TrendsTitle>{main.name}</TrendsTitle>
          <NickName>@{main.userId}</NickName>
        </NameContainer>
      </Header>
      <SelectContainer>
        <OptionContainer onClick={handleNavigateFollower}>
          <Select1>Followers</Select1>
        </OptionContainer>
        <OptionContainer>
          <Select2>Following</Select2>
          <Highlight />
        </OptionContainer>
      </SelectContainer>
      <FollowContainer>
        {following.map((n) => (
          <User
            key={n.userId}
            id={n.userId}
            name={n.name}
            photo={n.profilePhoto}
            bio={n.bio}
          />
        ))}
      </FollowContainer>
    </ExploreContainer>
  );
};

const FollowContainer = styled.div`
  margin-left: 20px;
  margin-right: 20px;
  margin-top: 15px;
`;

const SelectContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  border-bottom: 1px solid #303336;
`;

const OptionContainer = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  background-color: black;
  border: none;
  cursor: pointer;
  :hover {
    background-color: #181818;
  }
`;

const Select1 = styled.p`
  font-size: 1.1rem;
  font-weight: 700;
  border: none;
  color: #72767a;
  margin-bottom: 20px;
  margin-top: 20px;
`;

const Select2 = styled(Select1)`
  color: white;
`;

const Highlight = styled.div`
  width: 62px;
  height: 5px;
  background-color: #2099ed;
  border-radius: 5px;
`;

const NameContainer = styled.div`
  display: flex;
  flex-direction: column;
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

const ExploreContainer = styled.div`
  margin-left: 270px;
  height: 100vh;
  width: 40rem;
  border-right: 1px solid #303336;
  border-left: 1px solid #303336;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  padding-left: 20px;
  margin-top: 5px;
`;

const ArrowIcon = styled(Arrow)`
  width: 20px;
  margin-right: 40px;
  cursor: pointer;
`;

const TrendsTitle = styled.p`
  font-size: 22px;
  font-weight: 700;
  margin: 0px;
`;

export default Following;
