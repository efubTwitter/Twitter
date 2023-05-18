import styled from "styled-components";
import Trends from "./Trends";

const Search = () => {
  // 해시태그 기능 넣으면 해시태그 개수 기준으로 내림차순 정렬
  return (
    <SearchContainer>
      <SearchBar placeholder="Search Twitter"></SearchBar>
      <TrendsContainer>
        <TrendsTitle>Trends for you</TrendsTitle>
        <Trends />
        <Trends />
        <Trends />
        <Trends />
        <Trends />
        <Trends />
        <Trends />
        <Trends />
        <Trends />
      </TrendsContainer>
    </SearchContainer>
  );
};

const SearchContainer = styled.div`
  margin-left: 30px;
`;

const SearchBar = styled.input`
  width: 320px;
  height: 45px;
  border-radius: 25px;
  color: white;
  background-color: #212327;
  border: none;
  outline: none;
  padding-left: 20px;
  font-size: 15px;
  font-weight: 500;
`;

const TrendsContainer = styled.div`
  background-color: #16171c;
  border-radius: 20px;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 10px;
  padding-top: 0.1px;
  margin-top: 20px;
`;

const TrendsTitle = styled.p`
  font-size: 22px;
  font-weight: 700;
`;

export default Search;
