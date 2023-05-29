import styled from "styled-components";
import Header from "./Header";
import AddTweet from "./AddTweet";
import Tweets from "../Tweets/Tweets";
import Search from "../Explore/Search";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

const Main = ({ tweets, main, setTweets }) => {
  const [option, setOption] = useState("foryou");
  const [following, setFollowing] = useState([]);

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

  // tweets 배열을 최신 날짜 순으로 정렬(createdDate가 문자열 형식이라 new Date로 바꿔준다.)
  const sortedTweets = [...tweets].sort(
    (a, b) => new Date(b.createdDate) - new Date(a.createdDate)
  );

  // 팔로잉 중인 사람들의 id
  const userList = following.map((n) => n.userId); // [id1, id2]

  // 전체 트윗에서 팔로잉 중인 사람들 것만 필터링
  const sortedFollowTweets = [...tweets]
    .sort((a, b) => new Date(b.createdDate) - new Date(a.createdDate))
    .filter((el) => userList.includes(el.writer.userId));

  return (
    <>
      <Container>
        <MainContainer>
          <Header option={option} setOption={setOption} />
          <AddTweet main={main} tweets={tweets} setTweets={setTweets} />
          {option === "foryou" &&
            sortedTweets.map((tweet) => (
              <Tweets
                key={tweet.tweetId}
                id={tweet.writer.userId}
                name={tweet.writer.name}
                profile_photo={tweet.writer.profilePhoto}
                content={tweet.content}
                created_date={tweet.createdDate}
                tweet_id={tweet.tweetId}
                heartList={tweet.heartUserList}
              />
            ))}
          {option === "following" &&
            sortedFollowTweets.map((tweet) => (
              <Tweets
                key={tweet.tweetId}
                id={tweet.writer.userId}
                name={tweet.writer.name}
                profile_photo={tweet.writer.profilePhoto}
                content={tweet.content}
                created_date={tweet.createdDate}
                tweet_id={tweet.tweetId}
                heartList={tweet.heartUserList}
              />
            ))}
        </MainContainer>
        <Search tweets={tweets} />
      </Container>
    </>
  );
};

const Container = styled.div`
  display: flex;
  height: 100vh;
`;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-right: 1px solid #303336;
  border-left: 1px solid #303336;
  margin-left: 270px;
  width: 40rem;
  height: 80rem;
`;

export default Main;
