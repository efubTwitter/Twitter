import styled from "styled-components";
import { ReactComponent as LogoIcon } from "../images/twitter_logo_white.svg";
import { ReactComponent as LogoIconBlue } from "../images/twitter_logo_blue.svg";
import { ReactComponent as HomeIcon } from "../images/home_icon.svg";
import { ReactComponent as HomeWhiteIcon } from "../images/home_white.svg";
import { ReactComponent as HomeWhiteIconHover } from "../images/home_white_hover.svg";
import { ReactComponent as HomeIconHover } from "../images/home_icon_hover.svg";
import { ReactComponent as ProfileIcon } from "../images/profile_icon.svg";
import { ReactComponent as ProfileWhite } from "../images/profile_white.svg";
import { ReactComponent as ProfileIconHover } from "../images/profile_icon_hover.svg";
import { ReactComponent as ProfileWhiteHover } from "../images/profile_white_hover.svg";
import { ReactComponent as HashTagIcon } from "../images/hashtag_icon.svg";
import { ReactComponent as HashTagWhite } from "../images/hashtag_white.svg";
import { ReactComponent as MoonIcon } from "../images/moon.svg";
import { ReactComponent as SunIcon } from "../images/sun.svg";
import { NavLink, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import Button from "./Button";
import { useEffect } from "react";

const NavBar = ({ main_user }) => {
  const [display, setDisplay] = useState(false);

  const color = useSelector((state) => state.color);
  const bgcolor = useSelector((state) => state.backgroundColor);
  const hover = useSelector((state) => state.hover);

  useEffect(() => {
    console.log(bgcolor);
  }, [bgcolor]);

  const dispatch = useDispatch();

  const handleToggle = () => {
    const newDisplay = !display;
    setDisplay(newDisplay);
    dispatch({ type: newDisplay ? "white" : "black" });
  };

  return (
    <NavBarContainer bgcolor={bgcolor}>
      <NavLink to="/">{display ? <LogoBlue /> : <Logo />}</NavLink>
      <HomeNavLink to="/">
        <MenuContainer hover={hover}>
          {display ? <HomeWhite /> : <Home />}
          {display ? <HomeWhiteHover /> : <HomeHover />}
          <P color={color}>Home</P>
        </MenuContainer>
      </HomeNavLink>
      <ExploreNavLink to="/explore">
        <MenuContainer hover={hover}>
          {display ? <HashTagWhiteIcon /> : <HashTag />}
          <P color={color}>Connect</P>
        </MenuContainer>
      </ExploreNavLink>
      <ProfileNavLink
        to="/users/efubteam1"
        style={{ textDecoration: "none", color: "white" }}
      >
        <MenuContainer hover={hover}>
          {display ? <ProfileWhiteIcon /> : <Profile />}
          {display ? <ProfileHoverWhite /> : <ProfileHover />}
          <P color={color}>Profile</P>
        </MenuContainer>
      </ProfileNavLink>
      <MenuContainer onClick={handleToggle} hover={hover}>
        {display ? <Sun /> : <Moon />}
        <ProfileHover />
        <P color={color}>Display</P>
      </MenuContainer>
      <Link to="/">
        <Button text="Tweet" types="1" />
      </Link>
      <Link to="/users/efubteam1">
        <User bgcolor={bgcolor} hover={hover}>
          <ProfileImg src={main_user.profilePhoto} />
          <NameContainer>
            <Name color={color}>{main_user.name}</Name>
            <NickName>@{main_user.userId}</NickName>
          </NameContainer>
        </User>
      </Link>
    </NavBarContainer>
  );
};

const ProfileHoverWhite = styled(ProfileWhiteHover)`
  cursor: pointer;
  width: 28px;
  height: 28px;
  margin-right: 15px;
  display: none;
`;

const HashTagWhiteIcon = styled(HashTagWhite)`
  cursor: pointer;
  width: 28px;
  height: 28px;
  margin-right: 15px;
`;

const ProfileWhiteIcon = styled(ProfileWhite)`
  cursor: pointer;
  width: 28px;
  height: 28px;
  margin-right: 15px;
`;

const HomeWhite = styled(HomeWhiteIcon)`
  cursor: pointer;
  width: 28px;
  height: 28px;
  margin-right: 15px;
`;

const HomeWhiteHover = styled(HomeWhiteIconHover)`
  cursor: pointer;
  width: 28px;
  height: 28px;
  margin-right: 15px;
  display: none;
`;

const NameContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const NickName = styled.p`
  color: #72767a;
  font-weight: 500;
  font-size: 16px;
  margin-right: 5px;
  margin-bottom: 3px;
  margin: 0px;
  width: 30px;
  margin-left: 10px;
`;

const Name = styled.p`
  color: #72767a;
  font-size: 16px;
  font-weight: 700;
  margin: 0px;
  margin-bottom: 5px;
  margin-left: 10px;
  cursor: pointer;
  color: ${(props) => props.color};
`;

const ExploreNavLink = styled(NavLink)`
  text-decoration: none;
  color: white;
`;

const ProfileImg = styled.img`
  width: 50px;
  border-radius: 50%;
  cursor: pointer;
`;

const HashTag = styled(HashTagIcon)`
  cursor: pointer;
  width: 25px;
  height: 25px;
  margin-right: 15px;
`;

const Home = styled(HomeIcon)`
  cursor: pointer;
  width: 28px;
  height: 28px;
  margin-right: 15px;
`;

const HomeHover = styled(HomeIconHover)`
  cursor: pointer;
  width: 28px;
  height: 28px;
  margin-right: 15px;
  display: none;
`;

const ProfileHover = styled(ProfileIconHover)`
  cursor: pointer;
  width: 28px;
  height: 28px;
  margin-right: 15px;
  display: none;
`;

const Profile = styled(ProfileIcon)`
  cursor: pointer;
  width: 28px;
  height: 28px;
  margin-right: 15px;
`;

const Moon = styled(MoonIcon)`
  cursor: pointer;
  width: 28px;
  height: 28px;
  margin-right: 15px;
`;

const Sun = styled(SunIcon)`
  cursor: pointer;
  width: 28px;
  height: 28px;
  margin-right: 15px;
`;

const NavBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  width: 270px;
  height: 100vh;
  position: fixed;
  background-color: ${(props) => props.bgcolor};
`;

const activeClassName = "active";

const HomeNavLink = styled(NavLink)`
  text-decoration: none;
  color: white;

  &.${activeClassName} {
    font-weight: 700;
    ${HomeHover} {
      display: block;
    }
    ${HomeWhiteHover} {
      display: block;
    }
    ${Home} {
      display: none;
    }
    ${HomeWhite} {
      display: none;
    }
  }
`;

const ProfileNavLink = styled(NavLink)`
  text-decoration: none;
  color: white;
  &.active {
    ${ProfileHover} {
      display: block;
    }
    ${ProfileWhiteIcon} {
      display: none;
    }
    ${ProfileHoverWhite} {
      display: block;
    }
    ${Profile} {
      display: none;
    }
  }
`;

const P = styled.p`
  font-size: 1.3rem;
  font-weight: 500;
  color: ${(props) => props.color};
  ${HomeNavLink}.${activeClassName} & {
    font-weight: 700;
  }
  ${ProfileNavLink}.${activeClassName} & {
    font-weight: 700;
  }
  ${ExploreNavLink}.${activeClassName} & {
    font-weight: 700;
  }
`;

const MenuContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  width: 150px;
  height: 55px;
  padding-left: 13px;
  margin-bottom: 5px;

  &:hover {
    background-color: ${(props) => props.hover};
    border-radius: 30px;
  }
`;

const User = styled.button`
  width: 250px;
  height: 55px;
  border: none;
  border-radius: 40px;
  font-size: 1.2rem;
  color: white;
  font-weight: 700;
  cursor: pointer;
  background-color: ${(props) => props.bgcolor};
  display: flex;
  align-items: center;
  position: absolute;
  bottom: 50px;
  padding-left: 20px;
  padding-top: 35px;
  padding-bottom: 35px;
  :hover {
    background-color: ${(props) => props.hover};
  }
`;

const Logo = styled(LogoIcon)`
  cursor: pointer;
  width: 30px;
  height: 30px;
  margin-bottom: 15px;
  padding-left: 13px;
`;

const LogoBlue = styled(LogoIconBlue)`
  cursor: pointer;
  width: 30px;
  height: 30px;
  margin-bottom: 15px;
  padding-left: 13px;
`;

export default NavBar;
