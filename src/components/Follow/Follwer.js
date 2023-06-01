import styled from "styled-components";
import { ReactComponent as Arrow } from "../../images/arrow_icon.svg";
import { ReactComponent as ArrowWhite } from "../../images/arrow_white.svg";
import User from "../Explore/User";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import axios from "axios";

const Follower = ({ main, tweets }) => {
  const [follower, setFollower] = useState([]);

  const params = useParams();
  const userId = params.id;

  const color = useSelector((state) => state.color);
  const bgcolor = useSelector((state) => state.backgroundColor);
  const hover = useSelector((state) => state.hover);

  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(-1);
  };

  const handleNavigateFollowing = () => {
    navigate(`/users/${userId}/following`);
  };

  // Followers get 요청
  const getFollower = async () => {
    try {
      const res = await axios.get(
        `http://3.38.233.150:8080/follows/${userId}/followers`
      );
      const d = await res.data;
      setFollower(d);
      console.log(d);
    } catch (error) {
      console.log("Error while fetching tweets:", error);
    }
  };

  useEffect(() => {
    getFollower();
  }, []);

  let user = tweets.filter((el) => el.writer.userId === userId);
  let name = user[0].writer.name;

  return (
    <ExploreContainer>
      <Header>
        {color === "white" ? (
          <ArrowIcon onClick={handleNavigate} />
        ) : (
          <ArrowWhiteIcon onClick={handleNavigate} />
        )}
        <NameContainer>
          <TrendsTitle color={color}>{name}</TrendsTitle>
          <NickName>@{userId}</NickName>
        </NameContainer>
      </Header>
      <SelectContainer>
        <OptionContainer bgcolor={bgcolor} hover={hover}>
          <Select1 color={color}>Followers</Select1>
          <Highlight />
        </OptionContainer>
        <OptionContainer
          onClick={handleNavigateFollowing}
          bgcolor={bgcolor}
          hover={hover}
        >
          <Select2>Following</Select2>
        </OptionContainer>
      </SelectContainer>
      <FollowContainer>
        {follower.map((n) => (
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

const ArrowWhiteIcon = styled(ArrowWhite)`
  width: 20px;
  margin-right: 40px;
  cursor: pointer;
`;

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
  background-color: ${(props) => props.bgcolor};
  border: none;
  cursor: pointer;
  :hover {
    background-color: ${(props) => props.hover};
  }
`;

const Select1 = styled.p`
  font-size: 1.1rem;
  font-weight: 700;
  border: none;
  color: ${(props) => props.color};
  margin-bottom: 20px;
  margin-top: 20px;
`;

const Select2 = styled(Select1)`
  color: #72767a;
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
  color: ${(props) => props.color};
`;

export default Follower;
