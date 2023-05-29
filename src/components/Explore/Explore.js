import styled from "styled-components";
import { ReactComponent as Arrow } from "../../images/arrow_icon.svg";
import User from "./User";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Explore = ({ tweets }) => {
  let users = tweets.map((n) => n.writer);
  let filteredUsers = users.filter((user, index, array) => {
    // 현재 userId와 이전 요소들의 userId를 비교하여 다른 것만 필터링
    return array.findIndex((el) => el.userId === user.userId) === index;
  });

  const color = useSelector((state) => state.color);

  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(-1);
  };

  return (
    <ExploreContainer>
      <TrendsContainer>
        <Header>
          <ArrowIcon onClick={handleNavigate} />
          <TrendsTitle color={color}>Connect</TrendsTitle>
        </Header>
        <H1 color={color}>Suggested for you</H1>
        {filteredUsers
          .filter((el) => el.userId !== "efubteam1")
          .map((u) => (
            <User
              key={u.userId}
              id={u.userId}
              name={u.name}
              photo={u.profilePhoto}
              bio={u.bio}
            />
          ))}
      </TrendsContainer>
    </ExploreContainer>
  );
};

const H1 = styled.h1`
  font-size: 25px;
  margin-top: 9px;
  margin-bottom: 25px;
  color: ${(props) => props.color};
`;

const Header = styled.div`
  display: flex;
  align-items: center;
`;

const ArrowIcon = styled(Arrow)`
  width: 20px;
  margin-right: 40px;
  cursor: pointer;
`;

const ExploreContainer = styled.div`
  margin-left: 270px;
  height: 80rem;
  width: 40rem;
  border-right: 1px solid #303336;
  border-left: 1px solid #303336;
`;

const TrendsContainer = styled.div`
  padding-left: 20px;
  width: 93%;
`;

const TrendsTitle = styled.p`
  font-size: 22px;
  font-weight: 700;
  margin: 0px;
  color: ${(props) => props.color};
`;

export default Explore;
