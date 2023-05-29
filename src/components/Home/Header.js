import styled from "styled-components";
import { useSelector } from "react-redux";

const Header = () => {
  const color = useSelector((state) => state.color);
  const bgcolor = useSelector((state) => state.backgroundColor);
  const hover = useSelector((state) => state.hover);

  return (
    <HeaderContainer bgcolor={bgcolor} color={color} hover={hover}>
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
  padding-top: 12px;
  border-right: 1px solid #303336;
  background-color: ${(props) => props.bgcolor};
  color: ${(props) => props.color};
  /* background-color: rgba(0, 0, 0, 0.65); */
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
