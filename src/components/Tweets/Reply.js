import styled from "styled-components";
import Button from "../Button";
import { useSelector } from "react-redux";

const Reply = ({ main }) => {
  const color = useSelector((state) => state.color);
  const bgcolor = useSelector((state) => state.backgroundColor);

  return (
    <ReplyContainer>
      <ProfileImg src={main.profilePhoto} />
      <ReplyInput
        placeholder="Tweet your reply!"
        bgcolor={bgcolor}
        color={color}
      />
      <Button text="Reply" types="2" />
    </ReplyContainer>
  );
};

const ReplyContainer = styled.div`
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
  background-color: ${(props) => props.bgcolor};
  border: none;
  margin-left: 15px;
  color: ${(props) => props.color};
  outline: 0;
`;

const ProfileImg = styled.img`
  width: 50px;
  margin-left: 18px;
  cursor: pointer;
  border-radius: 50%;
`;

export default Reply;
