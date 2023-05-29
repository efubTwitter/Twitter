import styled from "styled-components";
import { ReactComponent as MenuIcon } from "../../images/menu_icon.svg";
import { ReactComponent as DeleteButton } from "../../images/delete_icon.svg";
import { ReactComponent as LikeIcon } from "../../images/like_icon.svg";
import { ReactComponent as LikeIconHover } from "../../images/like_icon_hover.svg";
import { useSelector } from "react-redux";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Tweets = ({
  id,
  name,
  profile_photo,
  content,
  created_date,
  tweet_id,
  heartList,
}) => {
  const [toggleSetting, setToggleSetting] = useState(false);
  const [heartClick, setHeartClick] = useState(heartList.includes("efubteam1"));

  const color = useSelector((state) => state.color);
  const bgcolor = useSelector((state) => state.backgroundColor);

  const ToggleIcon = () => {
    if (id === "efubteam1") setToggleSetting(!toggleSetting);
  };

  const handleClick = async () => {
    const res = await axios.post(
      `http://3.38.233.150:8080/users/${id}/hearts`,
      {
        tweetId: tweet_id,
      }
    );
    console.log(res.status, res.data);
    setHeartClick(res.data.isClicked);
  };

  const handleDeleteContent = () => {
    axios
      .delete(`http://3.38.233.150:8080/tweets/${tweet_id}`)
      .then(function (response) {
        console.log(response.status);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  // slice 사용하면 오류 발생 -> toLocaleString : 지역화된 날짜 및 시간 문자열을 반환.
  let date = new Date(created_date).toLocaleString();

  return (
    <TweetContainer>
      <Link key={tweet_id} to={`/users/${id}`}>
        <ProfileImg src={profile_photo} />
      </Link>
      <ColumnTemplate>
        <NameContainer>
          <Row>
            <Link
              key={tweet_id}
              to={`/users/${id}`}
              style={{ textDecoration: "none" }}
            >
              <Name color={color}>{name}</Name>
            </Link>
            <NickName>@{id}</NickName>
            <Time>{date}</Time>
          </Row>
          <SettingIcon onClick={ToggleIcon} />
          <SettingContent toggle={toggleSetting} bgcolor={bgcolor}>
            <BtnTemplate onClick={handleDeleteContent}>
              <DeleteBtn />
              <DeleteContent>Delete</DeleteContent>
            </BtnTemplate>
          </SettingContent>
        </NameContainer>
        <Link
          key={tweet_id}
          to={`/tweets/${tweet_id}`}
          style={{ textDecoration: "none", color: "white" }}
        >
          <ContentContainer>
            <Content color={color}>{content}</Content>
            {/* <Img src="https://pbs.twimg.com/media/FwSB0wEXwAQQKgE?format=jpg&name=900x900" /> */}
          </ContentContainer>
        </Link>
        <LikeContainer>
          {heartClick ? (
            <LikeHover onClick={handleClick} />
          ) : (
            <Like onClick={handleClick} />
          )}
          <LikeCounts heartClick={heartClick}>
            {heartList.length > 0 ? heartList.length : ""}
          </LikeCounts>
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
  color: ${(props) => (props.heartClick ? "#e53980" : "white")};
  font-weight: 600;
`;

const Like = styled(LikeIcon)`
  width: 19px;
  margin: 0px;
  height: 50px;
  cursor: pointer;
`;

const LikeHover = styled(LikeIconHover)`
  width: 19px;
  margin: 0px;
  height: 50px;
  cursor: pointer;
`;

const TweetContainer = styled.div`
  display: flex;
  border-bottom: 1px solid #303336;
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
  color: ${(props) => props.color};
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
  background-color: ${(props) => props.bgcolor};
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
  color: ${(props) => props.color};
`;

const Img = styled.img`
  width: 60%;
  border-radius: 17px;
`;

export default Tweets;
