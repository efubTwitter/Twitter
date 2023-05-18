import styled from "styled-components";
import { ReactComponent as LogoIcon } from "../images/twitter_logo_white.svg";
import { ReactComponent as HomeIcon } from "../images/home_icon.svg";
import { ReactComponent as HomeIconHover } from "../images/home_icon_hover.svg";
import { ReactComponent as ProfileIcon } from "../images/profile_icon.svg";
import { ReactComponent as ProfileIconHover } from "../images/profile_icon_hover.svg";
import { ReactComponent as HashTagIcon } from "../images/hashtag_icon.svg";
import { NavLink } from "react-router-dom";
import Button from "./Button";

const NavBar = () => {
  return (
    <NavBarContainer>
      <NavLink to="/">
        <Logo />
      </NavLink>
      <HomeNavLink to="/">
        <MenuContainer>
          <Home />
          <HomeHover />
          <P>Home</P>
        </MenuContainer>
      </HomeNavLink>
      <HashTagNavLink to="/explore">
        <MenuContainer>
          <HashTag />
          <P>Explore</P>
        </MenuContainer>
      </HashTagNavLink>
      <ProfileNavLink
        to="/users"
        style={{ textDecoration: "none", color: "white" }}
      >
        <MenuContainer>
          <Profile />
          <ProfileHover />
          <P>Profile</P>
        </MenuContainer>
      </ProfileNavLink>
      <Button text="Tweet" type="1" />
      <User>프로필 사진 / 이름</User>
    </NavBarContainer>
  );
};

const HashTagNavLink = styled(NavLink)`
  text-decoration: none;
  color: white;
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

const NavBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  width: 270px;
  height: 100vh;
  position: fixed;
  background-color: black;
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
    ${Home} {
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
    ${Profile} {
      display: none;
    }
  }
`;

const P = styled.p`
  font-size: 1.3rem;
  font-weight: 500;
  ${HomeNavLink}.${activeClassName} & {
    font-weight: 700;
  }
  ${ProfileNavLink}.${activeClassName} & {
    font-weight: 700;
  }
`;

const MenuContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  width: 130px;
  height: 55px;
  padding-left: 13px;
  margin-bottom: 5px;

  &:hover {
    background-color: #181818;
    border-radius: 30px;
  }
`;

const User = styled.button`
  width: 87%;
  height: 55px;
  border: none;
  border-radius: 30px;
  font-size: 1.2rem;
  color: white;
  font-weight: 700;
  cursor: pointer;
  background-color: black;
  display: flex;
  align-items: center;
  margin-top: 30px;
`;

const Logo = styled(LogoIcon)`
  cursor: pointer;
  width: 30px;
  height: 30px;
  margin-bottom: 15px;
  padding-left: 13px;
`;

export default NavBar;
