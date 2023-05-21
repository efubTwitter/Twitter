import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Main from "./components/Main";
import Template from "./components/Template";
import Profile from "./components/Profile";
import Explore from "./components/Explore";
import DetailPage from "./components/DetailPage";
import { useState, useEffect } from "react";
import axios from "axios";
import MainUserProfile from "./components/MainUserProfile";

function App() {
  // 로딩 중 트위터 화면
  const [isLoading, setIsLoading] = useState(false);
  // 전체 트윗 데이터 조회
  const [tweets, setTweets] = useState([]);
  // 메인 유저 정보 조회
  const [mainUser, setMainUser] = useState([]);

  const getTweets = async () => {
    try {
      const response = await axios.get("http://3.38.233.150:8080/home");
      const data = await response.data;
      setTweets(data);
    } catch (error) {
      console.log("Error while fetching tweets:", error);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    setIsLoading(true);
    getTweets();
  }, []);

  const getMainUser = async () => {
    try {
      const response = await axios.get(
        "http://3.38.233.150:8080/users/efubteam1"
      );
      const data = await response.data;
      setMainUser(data);
    } catch (error) {
      console.error("Error while fetching main user:", error);
    }
  };

  useEffect(() => {
    getMainUser();
  }, []);

  return (
    <>
      <Template>
        <NavBar main_user={mainUser} />
        {isLoading ? "...Loading " : ""}
        <Routes>
          {tweets.length > 0 && (
            <Route
              path="/"
              element={<Main tweets={tweets} main={mainUser} />}
            ></Route>
          )}
          {tweets.length > 0 && (
            <Route
              path="/tweets/:tweet_id"
              element={<DetailPage tweets={tweets} />}
            ></Route>
          )}
          {tweets.length > 0 && (
            <Route path="/explore" element={<Explore />}></Route>
          )}

          {tweets.length > 0 && (
            <Route
              key={mainUser.id}
              path="/users/:id"
              element={<Profile tweets={tweets} />}
            ></Route>
          )}
          {tweets.length > 0 && (
            <Route
              path="/users/efubteam1"
              element={<MainUserProfile main={mainUser} tweets={tweets} />}
            ></Route>
          )}
        </Routes>
      </Template>
    </>
  );
}

export default App;
