import styled from "styled-components";
import { ReactComponent as ExampleImg } from "../images/profile_example.svg";
import { ReactComponent as ImageIcon } from "../images/image_icon.svg";
import { ReactComponent as DeleteImgIcon } from "../images/delete_img_icon.svg";
import { useState, useRef } from "react";
import Button from "./Button";

const AddTweet = () => {
  const [imgFile, setImgFile] = useState("");
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
    URL.revokeObjectURL(imgFile);
    setImgFile("");
  };

  return (
    <>
      <AddContainer>
        <ProfileImg />
        <InputText placeholder="What is happening?!"></InputText>
      </AddContainer>
      <ImgContainer imgFile={imgFile}>
        <DeleteImgBtn imgFile={imgFile} onClick={deleteFileImg} />
        <PreImg src={imgFile ? imgFile : ``} />
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
        <Button text="Tweet" type="2" />
      </BtnContainer>
      <Line />
    </>
  );
};

const AddContainer = styled.div`
  display: flex;
  align-items: center;
  height: 70px;
`;

const ImgContainer = styled.div`
  height: ${(props) => (props.imgFile ? "100%" : "0px")};
`;

const BtnContainer = styled(AddContainer)`
  margin-left: 14%;
  display: flex;
  justify-content: space-between;
  margin-right: 4%;
  height: 50px;
`;

const DeleteImgBtn = styled(DeleteImgIcon)`
  width: 40px;
  height: 40px;
  position: absolute;
  margin-left: 90px;
  margin-top: 7px;
  cursor: pointer;
  display: ${(props) => (props.imgFile ? "block" : "none")};
`;

const ProfileImg = styled(ExampleImg)`
  width: 50px;
  padding-left: 18px;
`;

const PreImg = styled.img`
  width: 30rem;
  border-radius: 17px;
  margin-left: 78px;
`;

const InputText = styled.input`
  width: 300px;
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
