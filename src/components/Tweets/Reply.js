import styled from "styled-components";
import Button from "../Button";

const Reply = ({ main }) => {
  return (
    <ReplyContainer>
      <ProfileImg src={main.profilePhoto} />
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
  height: 90px;
  padding-right: 10px;
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

const ProfileImg = styled.img`
  width: 50px;
  padding-left: 18px;
  cursor: pointer;
  border-radius: 50%;
`;

export default Reply;
