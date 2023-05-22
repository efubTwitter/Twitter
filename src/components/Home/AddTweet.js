import styled from "styled-components";
import { ReactComponent as ImageIcon } from "../../images/image_icon.svg";
import { ReactComponent as DeleteImgIcon } from "../../images/delete_img_icon.svg";
import { useState, useRef } from "react";
import Button from "../Button";
import axios from "axios";

const AddTweet = ({ main, tweets, setTweets }) => {
  const [imgfile, setImgFile] = useState("");
  const [tweetContent, setTweetContent] = useState(""); // 입력된 트윗 내용 상태 추가
  const imgRef = useRef();

  // 이미지 프리뷰 생성
  const saveImgFile = () => {
    const file = imgRef.current.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImgFile(reader.result);
    };
  };

  // 이미지 프리뷰 삭제
  const deleteFileImg = () => {
    URL.revokeObjectURL(imgfile);
    setImgFile("");
  };

  // 트윗 내용 변경 핸들러
  const handleTweetContentChange = (e) => {
    setTweetContent(e.target.value);
  };

  // post 요청
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      writerId: "efubteam1",
      content: tweetContent,
    };

    try {
      const res = await axios.post("http://3.38.233.150:8080/tweets", data);
      if (res.status === "201") {
        setTweets([...tweets, res.data]);
      }
      console.log(res.status);
    } catch (error) {
      console.log(error); // 오류 처리
    }

    setTweetContent("");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <AddContainer>
          <ProfileImg src={main.profilePhoto} />
          <InputText
            placeholder="What is happening?!"
            value={tweetContent}
            onChange={handleTweetContentChange}
          ></InputText>
        </AddContainer>
        <ImgContainer imgfile={imgfile}>
          <DeleteImgBtn imgfile={imgfile} onClick={deleteFileImg} />
          <PreImg src={imgfile ? imgfile : ``} />
        </ImgContainer>
        <BtnContainer>
          <InputImg
            type="file"
            name="file"
            id="file"
            accept="image/*"
            onChange={saveImgFile}
            ref={imgRef}
          ></InputImg>
          <label htmlFor="file">
            <ImgIcon />
          </label>
          <Button text="Tweet" types="2" type="submit" />
        </BtnContainer>
        <Line />
      </form>
    </>
  );
};

const AddContainer = styled.div`
  display: flex;
  align-items: center;
  height: 70px;
  margin-top: 120px;
`;

const ImgContainer = styled.div`
  height: ${(props) => (props.imgfile ? "100%" : "0px")};
`;

const BtnContainer = styled(AddContainer)`
  margin-left: 14%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: 3%;
  height: 50px;
  margin-top: 0px;
`;

const DeleteImgBtn = styled(DeleteImgIcon)`
  width: 40px;
  height: 40px;
  position: absolute;
  margin-left: 90px;
  margin-top: 7px;
  cursor: pointer;
  display: ${(props) => (props.imgfile ? "block" : "none")};
`;

const ProfileImg = styled.img`
  width: 50px;
  padding-left: 18px;
  border-radius: 50%;
`;

const PreImg = styled.img`
  width: 30rem;
  border-radius: 17px;
  margin-left: 78px;
`;

const InputText = styled.input`
  width: 500px;
  height: 50%;
  font-size: 22px;
  font-weight: 500;
  background-color: black;
  border: none;
  margin-left: 15px;
  color: white;
  outline: 0;
`;

const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: #303336;
`;

const InputImg = styled.input`
  display: none;
`;

const ImgIcon = styled(ImageIcon)`
  width: 20px;
  cursor: pointer;
`;

export default AddTweet;
