import styled from "styled-components";
import Trends from "./Trends";

const Explore = () => {
  return (
    <ExploreContainer>
      <SearchBar placeholder="Search Twitter"></SearchBar>
      <TrendsContainer>
        <TrendsTitle>Trends for you</TrendsTitle>
        <Trends margin="340px" />
        <Trends margin="340px" />
        <Trends margin="340px" />
        <Trends margin="340px" />
        <Trends margin="340px" />
        <Trends margin="340px" />
      </TrendsContainer>
    </ExploreContainer>
  );
};

const ExploreContainer = styled.div`
  margin-left: 270px;
  height: 100vh;
  width: 40rem;
  border-right: 1px solid #303336;
  border-left: 1px solid #303336;
`;

const SearchBar = styled.input`
  width: 480px;
  height: 45px;
  border-radius: 25px;
  color: white;
  background-color: #212327;
  border: none;
  outline: none;
  padding-left: 20px;
  font-size: 15px;
  font-weight: 500;
  margin-left: 30px;
  :focus {
    outline: 1.5px solid #2099ed;
  }
`;

const TrendsContainer = styled.div`
  padding-left: 20px;
  width: 93%;
`;

const TrendsTitle = styled.p`
  font-size: 22px;
  font-weight: 700;
`;

export default Explore;
