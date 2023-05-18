import styled from "styled-components";
import { ReactComponent as ExampleImg } from "../images/profile_example.svg";
import { ReactComponent as MenuIcon } from "../images/menu_icon.svg";
import { ReactComponent as DeleteButton } from "../images/delete_icon.svg";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Tweets = () => {
  const navigate = useNavigate();
  const [toggleSetting, setToggleSetting] = useState(false);

  const ToggleIcon = () => {
    setToggleSetting(!toggleSetting);
  };

  const handleClickPost = () => {
    navigate("/users");
  };
  // name, nickname, content(text, image) 받아와서 보여주기.
  // 지난 시간은 (현재 시간 - 게시 시간)으로 계산
  return (
    <TweetContainer>
      <ProfileImg onClick={handleClickPost} />
      <ColumnTemplate>
        <NameContainer>
          <Name onClick={handleClickPost}>World Of History</Name>
          <NickName>@UmerBzv</NickName>
          <Time> 17h</Time>
          <SettingIcon onClick={ToggleIcon} />
          <SettingContent toggle={toggleSetting}>
            <BtnTemplate>
              <DeleteBtn />
              <DeleteContent>Delete</DeleteContent>
            </BtnTemplate>
          </SettingContent>
        </NameContainer>
        <ContentContainer>
          <Content>
            Size comparison between the Titanic and a Modern Cruise Ship
          </Content>
          <Img src="https://pbs.twimg.com/media/FwSB0wEXwAQQKgE?format=jpg&name=900x900" />
        </ContentContainer>
      </ColumnTemplate>
    </TweetContainer>
  );
};

const TweetContainer = styled.div`
  display: flex;
  border-top: 1px solid #303336;
`;

const NameContainer = styled.div`
  display: flex;
  align-items: center;
`;

const ColumnTemplate = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 12px;
`;

const DeleteContent = styled.p`
  color: #e03c39;
  font-weight: 700;
  margin: 0px;
  margin-left: 12px;
`;

const DeleteBtn = styled(DeleteButton)`
  width: 16px;
`;

const ProfileImg = styled(ExampleImg)`
  width: 50px;
  padding-left: 18px;
  cursor: pointer;
`;

const NickName = styled.p`
  color: #72767a;
  font-weight: 500;
  font-size: 16px;
  margin-right: 5px;
  margin-bottom: 3px;
`;

const Name = styled(NickName)`
  font-weight: 700;
  cursor: pointer;
  color: white;
  &:hover {
    border-bottom: 1px solid white;
  }
`;

const Time = styled(NickName)`
  margin-right: 52%;
`;

const SettingIcon = styled(MenuIcon)`
  width: 18px;
  cursor: pointer;
`;

const BtnTemplate = styled.div`
  display: flex;
  align-items: center;
`;

const SettingContent = styled.div`
  width: 300px;
  height: 50px;
  display: flex;
  align-items: center;
  border: 1px solid #303336;
  border-radius: 12px;
  background-color: black;
  position: absolute;
  margin-left: 243px;
  margin-top: 80px;
  padding-left: 15px;
  cursor: pointer;
  box-shadow: 2px 2px 12px 2px #303336;
  display: ${(props) => (props.toggle ? "block" : "none")};
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Content = styled.p`
  margin-top: 0px;
`;

const Img = styled.img`
  width: 60%;
  border-radius: 17px;
`;

export default Tweets;
