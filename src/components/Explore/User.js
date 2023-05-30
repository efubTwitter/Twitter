import styled from "styled-components";
import Button from "../Button";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

const User = ({ id, name, photo, bio }) => {
  const [following, setFollowing] = useState([]);

  const color = useSelector((state) => state.color);

  // Follow post 요청
  const postFollow = async () => {
    const res = await axios.post("http://3.38.233.150:8080/follows/efubteam1", {
      followingId: id,
    });
    console.log(res, res.status);
  };

  // Following get 요청
  const getFollowing = async () => {
    try {
      const response = await axios.get(
        "http://3.38.233.150:8080/follows/efubteam1/followings"
      );
      const data = await response.data;
      setFollowing(data);
    } catch (error) {
      console.log("Error while fetching tweets:", error);
    }
  };

  useEffect(() => {
    getFollowing();
  }, [following]);

  return (
    <TrendsContent>
      <Align>
        <Link key={id} to={`/users/${id}`}>
          <ProfileImg src={photo} />
        </Link>
        <Column>
          <HashTag color={color}>{name}</HashTag>
          <Trend>@{id}</Trend>
          <Bio color={color}>{bio}</Bio>
        </Column>
        <Follow onClick={postFollow}>
          {following.filter((n) => n.userId === id).length === 0 && (
            <Button text="Follow" types="3" />
          )}
          {following.filter((n) => n.userId === id).length > 0 && (
            <Button text="Following" types="4" />
          )}
        </Follow>
      </Align>
    </TrendsContent>
  );
};

const Follow = styled.div``;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  width: 85%;
  margin-left: 15px;
`;

const ProfileImg = styled.img`
  width: 50px;
  height: 50px;
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
  color: ${(props) => props.color};
  margin-bottom: 4px;
`;

const Bio = styled(HashTag)`
  margin-top: 8px;
  color: ${(props) => props.color};
`;

export default User;
