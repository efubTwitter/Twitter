import styled from "styled-components";
import User from "./User";

const Search = ({ tweets }) => {
  let users = tweets.map((n) => n.writer);
  let filteredUsers = users.filter((user, index, array) => {
    // 현재 userId와 이전 요소들의 userId를 비교하여 다른 것만 필터링
    return array.findIndex((el) => el.userId === user.userId) === index;
  });
  return (
    <SearchContainer>
      <SearchBar placeholder="Search Twitter"></SearchBar>
      <TrendsContainer>
        <TrendsTitle>Connect</TrendsTitle>
        {filteredUsers.map((u) => (
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
  height: 45px;
  border-radius: 25px;
  color: white;
  background-color: #212327;
  border: none;
  padding-left: 20px;
  font-size: 15px;
  font-weight: 500;
  :focus {
    outline: 1.5px solid #2099ed;
  }
`;

const TrendsContainer = styled.div`
  background-color: #16171c;
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
`;

export default Search;
