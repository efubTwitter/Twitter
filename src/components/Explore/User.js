import styled from "styled-components";
import { ReactComponent as MenuIcon } from "../../images/menu_icon.svg";
import Button from "../Button";
import { useState } from "react";
import { Link } from "react-router-dom";

const User = ({ margin, id, name, photo }) => {
  const [toggleSetting, setToggleSetting] = useState(false);

  const ToggleIcon = () => {
    setToggleSetting(!toggleSetting);
  };

  return (
    <TrendsContent>
      <Align>
        <Link key={id} to={`/users/${id}`}>
          <ProfileImg src={photo} />
        </Link>
        <Column>
          <HashTag>{name}</HashTag>
          <Trend>@{id}</Trend>
        </Column>
        <Button text="Follow" types="3" />
      </Align>
    </TrendsContent>
  );
};

const Column = styled.div`
  display: flex;
  flex-direction: column;
  width: 85%;
  margin-left: 15px;
`;

const ProfileImg = styled.img`
  width: 50px;
  height: 50px;
  margin-top: 15px;
  border-radius: 50%;
  cursor: pointer;
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

export default User;
