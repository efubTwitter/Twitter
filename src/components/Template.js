import styled from "styled-components";

const Template = ({ children }) => {
  return <Container>{children}</Container>;
};

const Container = styled.div`
  display: flex;
`;

export default Template;
