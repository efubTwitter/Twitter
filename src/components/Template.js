import styled from "styled-components";
import { useSelector } from "react-redux";

const Template = ({ children }) => {
  const bgcolor = useSelector((state) => state.backgroundColor);

  return <Container bgcolor={bgcolor}>{children}</Container>;
};

const Container = styled.div`
  display: flex;
  background-color: ${(props) => props.bgcolor};
  padding-left: 6%;
  padding-right: 6%;
  height: 80rem;
`;

export default Template;
