import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Main from "./components/Main";
import Template from "./components/Template";
import Profile from "./components/Profile";
import Explore from "./components/Explore";

function App() {
  return (
    <>
      <Template>
        <NavBar />
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/detail"></Route>
          <Route path="/explore" element={<Explore />}></Route>
          <Route path="/users" element={<Profile />}></Route>
        </Routes>
      </Template>
    </>
  );
}

export default App;
