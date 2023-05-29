import styled from "styled-components";
import { useSelector } from "react-redux";
import { useState } from "react";

const Header = ({ option, setOption }) => {
  const color = useSelector((state) => state.color);
  const bgcolor = useSelector((state) => state.backgroundColor);
  const blur = useSelector((state) => state.blur);

  return (
    <HeaderContainer bgcolor={bgcolor} color={color} blur={blur}>
      <Title>Home</Title>
      <SelectContainer>
        <OptionContainer onClick={() => setOption("foryou")} bgcolor={bgcolor}>
          <Select1 show={option}>For you</Select1>
          <Highlight
            style={{ display: option === "foryou" ? "block" : "none" }}
          />
        </OptionContainer>
        <OptionContainer
          onClick={() => setOption("following")}
          bgcolor={bgcolor}
        >
          <Select2 show={option}>Following</Select2>
          <Highlight
            style={{ display: option === "following" ? "block" : "none" }}
          />
        </OptionContainer>
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
  background-color: ${(props) => props.blur};
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
  border: none;
  color: ${(props) => (props.show === "foryou" ? "white" : "#72767a")};
  margin-bottom: 20px;
  margin-top: 20px;
`;

const Select2 = styled(Select1)`
  color: ${(props) => (props.show === "following" ? "white" : "#72767a")};
`;

const Highlight = styled.div`
  width: 60px;
  height: 5px;
  background-color: #2099ed;
  border-radius: 5px;
`;

const OptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  background-color: ${(props) => props.bgcolor};
  border: none;
  cursor: pointer;
  :hover {
    background-color: #181818;
  }
`;

export default Header;
