import styled from "styled-components";
import { ReactComponent as MenuIcon } from "../images/menu_icon.svg";
import { ReactComponent as DeleteButton } from "../images/delete_icon.svg";
import { ReactComponent as LikeIcon } from "../images/like_icon.svg";
import { ReactComponent as LikeIconHover } from "../images/like_icon_hover.svg";
import { useState } from "react";
import { Link } from "react-router-dom";

const Tweets = ({
  id,
  name,
  profile_photo,
  content,
  created_date,
  tweet_id,
}) => {
  const [toggleSetting, setToggleSetting] = useState(false);

  const ToggleIcon = () => {
    setToggleSetting(!toggleSetting);
  };

  // let date = created_date.slice(0, 10);
  // let time = created_date.slice(11, 16);

  return (
    <TweetContainer>
      <Link key={id} to={`/users/${id}`}>
        <ProfileImg src={profile_photo} />
      </Link>
      <ColumnTemplate>
        <NameContainer>
          <Row>
            <Link key={id} to={`/users/${id}`}>
              <Name>{name}</Name>
            </Link>
            <NickName>@{id}</NickName>
            <Time>{created_date}</Time>
          </Row>
          <SettingIcon onClick={ToggleIcon} />
          <SettingContent toggle={toggleSetting}>
            <BtnTemplate>
              <DeleteBtn />
              <DeleteContent>Delete</DeleteContent>
            </BtnTemplate>
          </SettingContent>
        </NameContainer>
        <Link
          key={id}
          to={`/tweets/${tweet_id}`}
          style={{ textDecoration: "none", color: "white" }}
        >
          <ContentContainer>
            <Content>{content}</Content>
            {/* <Img src="https://pbs.twimg.com/media/FwSB0wEXwAQQKgE?format=jpg&name=900x900" /> */}
          </ContentContainer>
        </Link>
        <LikeContainer>
          <LikeHover />
          <LikeCounts>1</LikeCounts>
        </LikeContainer>
      </ColumnTemplate>
    </TweetContainer>
  );
};

const LikeContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Row = styled.div`
  display: flex;
`;

const LikeCounts = styled.p`
  font-size: 14px;
  margin-left: 13px;
  color: #e53980;
  font-weight: 500;
`;

const Like = styled(LikeIcon)`
  width: 19px;
  margin: 0px;
  height: 50px;
`;

const LikeHover = styled(LikeIconHover)`
  width: 19px;
  margin: 0px;
  height: 50px;
`;

const TweetContainer = styled.div`
  display: flex;
  border-top: 1px solid #303336;
`;

const NameContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 12px;
`;

const ColumnTemplate = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 12px;
  width: 100%;
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

const ProfileImg = styled.img`
  width: 50px;
  height: 50px;
  margin-left: 15px;
  margin-top: 15px;
  border-radius: 50%;
  cursor: pointer;
`;

const NickName = styled.p`
  color: #72767a;
  font-weight: 500;
  font-size: 17px;
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

const Time = styled(NickName)``;

const SettingIcon = styled(MenuIcon)`
  width: 17px;
  cursor: pointer;
  margin-right: 15px;
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
  cursor: pointer;
`;

const Content = styled.p`
  margin-top: 4px;
`;

const Img = styled.img`
  width: 60%;
  border-radius: 17px;
`;

export default Tweets;
