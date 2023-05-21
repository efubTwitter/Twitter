import styled from "styled-components";
import { ReactComponent as MenuIcon } from "../images/menu_icon.svg";
import { ReactComponent as BadEmoji } from "../images/bad_emoji_icon.svg";
import { useState } from "react";

const Trends = ({ margin }) => {
  const [toggleSetting, setToggleSetting] = useState(false);

  const ToggleIcon = () => {
    setToggleSetting(!toggleSetting);
  };

  return (
    <TrendsContent>
      <Align>
        <Trend>Trending in South Korea</Trend>
        <Menu onClick={ToggleIcon} />
        <SettingContent toggle={toggleSetting} margin={margin}>
          <BtnTemplate>
            <BadEmojiIcon />
            <DeleteContent>Not interested in this</DeleteContent>
          </BtnTemplate>
        </SettingContent>
      </Align>
      <HashTag>바니바니</HashTag>
      <Trend>18.4K Tweets</Trend>
    </TrendsContent>
  );
};

const DeleteContent = styled.p`
  color: white;
  font-weight: 700;
  margin: 0px;
  margin-left: 12px;
`;

const BadEmojiIcon = styled(BadEmoji)`
  width: 16px;
`;

const BtnTemplate = styled.div`
  display: flex;
  align-items: center;
  height: 50px;
`;

const TrendsContent = styled.div`
  margin-bottom: 25px;
  cursor: pointer;
`;

const Align = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Menu = styled(MenuIcon)`
  width: 15px;
  cursor: pointer;
`;

const Trend = styled.p`
  color: #72767a;
  font-size: 13px;
  font-weight: 500;
  margin: 0;
`;

const HashTag = styled.p`
  font-size: 16px;
  font-weight: 600;
  margin: 0;
  margin-top: 3px;
  margin-bottom: 4px;
`;

const SettingContent = styled.div`
  width: 250px;
  height: 50px;
  display: flex;
  align-items: center;
  border: 1px solid #303336;
  border-radius: 12px;
  background-color: black;
  position: absolute;
  margin-top: 80px;
  margin-left: ${(props) => (props.margin ? props.margin : "45px")};
  padding-left: 15px;
  cursor: pointer;
  box-shadow: 2px 2px 12px 2px #303336;
  display: ${(props) => (props.toggle ? "block" : "none")};
`;

export default Trends;
