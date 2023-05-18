import styled from "styled-components";

const Header = () => {
  return (
    <>
      <Title>Home</Title>
      <SelectContainer>
        <OptionContainer>
          <Select1>For you</Select1>
          <Highlight />
        </OptionContainer>
        <Select2>Following</Select2>
      </SelectContainer>
    </>
  );
};

const SelectContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 645px;
  border-bottom: 1px solid #303336;
`;

const Title = styled.p`
  font-size: 1.3rem;
  font-weight: 700;
  margin-top: 0;
  margin-top: 5px;
  padding-left: 18px;
`;

const Select1 = styled.p`
  font-size: 1rem;
  font-weight: 700;
`;

const Select2 = styled(Select1)`
  color: #72767a;
`;

const Highlight = styled.div`
  width: 60px;
  height: 5px;
  background-color: #2099ed;
  border-radius: 5px;
`;

const OptionContainer = styled.div``;

export default Header;
