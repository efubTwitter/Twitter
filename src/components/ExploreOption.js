import styled from "styled-components";
import { ReactComponent as MenuIcon } from "../images/menu_icon.svg";
import { ReactComponent as BadEmoji } from "../images/bad_emoji_icon.svg";
import { useState } from "react";

// 필요없음

const ExploreOption = () => {
  const [toggleSetting, setToggleSetting] = useState(false);

  const ToggleIcon = () => {
    setToggleSetting(!toggleSetting);
  };

  return (
    <>
      <Menu onClick={ToggleIcon} />
      <SettingContent toggle={toggleSetting}>
        <BtnTemplate>
          <BadEmojiIcon />
          <DeleteContent>Not interested in this</DeleteContent>
        </BtnTemplate>
      </SettingContent>
    </>
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
const Menu = styled(MenuIcon)`
  width: 15px;
  cursor: pointer;
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
  margin-left: 45px;
  padding-left: 15px;
  cursor: pointer;
  box-shadow: 2px 2px 12px 2px #303336;
  display: ${(props) => (props.toggle ? "block" : "none")};
`;

export default ExploreOption;
