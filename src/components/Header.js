import styled from "styled-components";

const Header = () => {
  return (
    <HeaderContainer>
      <Title>Home</Title>
      <SelectContainer>
        <OptionContainer>
          <Select1>For you</Select1>
          <Highlight />
        </OptionContainer>
        <Select2>Following</Select2>
      </SelectContainer>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.div`
  position: fixed;
  width: 40rem;
  top: 0px;
  border-right: 1px solid #303336;
  background-color: rgba(0, 0, 0, 0.65);
  backdrop-filter: blur(6px);
`;

const SelectContainer = styled.div`
  display: flex;
  justify-content: space-around;
  border-bottom: 1px solid #303336;
`;

const Title = styled.p`
  font-size: 1.3rem;
  font-weight: 700;
  padding-left: 18px;
  margin-top: 0px;
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
