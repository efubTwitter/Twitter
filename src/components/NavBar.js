import styled from "styled-components";
import { ReactComponent as LogoIcon } from "../images/twitter_logo_white.svg";
import { ReactComponent as HomeIcon } from "../images/home_icon.svg";
import { ReactComponent as HomeIconHover } from "../images/home_icon_hover.svg";
import { ReactComponent as ProfileIcon } from "../images/profile_icon.svg";
import { ReactComponent as ProfileIconHover } from "../images/profile_icon_hover.svg";
import { ReactComponent as HashTagIcon } from "../images/hashtag_icon.svg";
import { NavLink, Link } from "react-router-dom";
import Button from "./Button";

const NavBar = ({ main_user }) => {
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
      <ExploreNavLink to="/explore">
        <MenuContainer>
          <HashTag />
          <P>Explore</P>
        </MenuContainer>
      </ExploreNavLink>
      <ProfileNavLink
        to="/users/efubteam1"
        style={{ textDecoration: "none", color: "white" }}
      >
        <MenuContainer>
          <Profile />
          <ProfileHover />
          <P>Profile</P>
        </MenuContainer>
      </ProfileNavLink>
      <Button text="Tweet" type="1" />
      <Link to="/users/efubteam1">
        <User>
          <ProfileImg src={main_user.profilePhoto} />
          <NameContainer>
            <Name>{main_user.name}</Name>
            <NickName>@{main_user.userId}</NickName>
          </NameContainer>
        </User>
      </Link>
    </NavBarContainer>
  );
};

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
  color: white;
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
  ${ExploreNavLink}.${activeClassName} & {
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
  width: 250px;
  height: 55px;
  border: none;
  border-radius: 40px;
  font-size: 1.2rem;
  color: white;
  font-weight: 700;
  cursor: pointer;
  background-color: black;
  display: flex;
  align-items: center;
  position: absolute;
  bottom: 50px;
  padding-left: 20px;
  padding-top: 35px;
  padding-bottom: 35px;
  :hover {
    background-color: #181818;
  }
`;

const Logo = styled(LogoIcon)`
  cursor: pointer;
  width: 30px;
  height: 30px;
  margin-bottom: 15px;
  padding-left: 13px;
`;

export default NavBar;
