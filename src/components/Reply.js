import styled from "styled-components";
import Button from "./Button";
import { ReactComponent as ExampleImg } from "../images/profile_example.svg";

const Reply = () => {
  return (
    <ReplyContainer>
      <ProfileImg />
      <ReplyInput placeholder="Tweet your reply!" />
      <Button text="Reply" types="2" />
    </ReplyContainer>
  );
};

const ReplyContainer = styled.div`
  border-top: 1px solid #303336;
  border-bottom: 1px solid #303336;
  display: flex;
  align-items: center;
`;

const ReplyInput = styled.input`
  width: 450px;
  height: 50%;
  font-size: 22px;
  font-weight: 500;
  background-color: black;
  border: none;
  margin-left: 15px;
  color: white;
  outline: 0;
`;

const ProfileImg = styled(ExampleImg)`
  width: 50px;
  padding-left: 18px;
  cursor: pointer;
`;

export default Reply;
