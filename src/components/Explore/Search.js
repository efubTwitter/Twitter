import styled from "styled-components";
import User from "./User";
import { useSelector } from "react-redux";

const Search = ({ tweets }) => {
  let users = tweets.map((n) => n.writer);
  let filteredUsers = users.filter((user, index, array) => {
    // 현재 userId와 이전 요소들의 userId를 비교하여 다른 것만 필터링
    return array.findIndex((el) => el.userId === user.userId) === index;
  });

  const color = useSelector((state) => state.color);
  const hover = useSelector((state) => state.hover);

  return (
    <SearchContainer>
      <SearchBar placeholder="Search Twitter" hover={hover}></SearchBar>
      <TrendsContainer hover={hover}>
        <TrendsTitle color={color}>Who to Follow</TrendsTitle>
        {filteredUsers
          .filter((el) => el.userId !== "efubteam1")
          .map((u) => (
            <User
              margin="340px"
              key={u.userId}
              id={u.userId}
              name={u.name}
              photo={u.profilePhoto}
            />
          ))}
      </TrendsContainer>
    </SearchContainer>
  );
};

const SearchContainer = styled.div`
  margin-left: 35px;
  width: 25rem;
`;

const SearchBar = styled.input`
  width: 370px;
  height: 50px;
  border-radius: 25px;
  color: white;
  margin-top: 10px;
  background-color: ${(props) => props.hover};
  border: none;
  padding-left: 20px;
  font-size: 15px;
  font-weight: 500;
  :focus {
    outline: 1.5px solid #2099ed;
  }
`;

const TrendsContainer = styled.div`
  background-color: ${(props) => props.hover};
  border-radius: 20px;
  padding-left: 20px;
  padding-right: 25px;
  padding-bottom: 10px;
  padding-top: 0.1px;
  margin-top: 20px;
  width: 350px;
`;

const TrendsTitle = styled.p`
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 30px;
  color: ${(props) => props.color};
`;

export default Search;
