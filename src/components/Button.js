import styled from "styled-components";

const Button = ({ text, type }) => {
  return type === "1" ? (
    <Btn1>{text}</Btn1>
  ) : type === "2" ? (
    <Btn2>{text}</Btn2>
  ) : (
    <Btn3>{text}</Btn3>
  );
};

const Btn1 = styled.button`
  width: 87%;
  height: 55px;
  border: none;
  border-radius: 30px;
  font-size: 1.2rem;
  color: white;
  font-weight: 700;
  position: absolute;
  bottom: 180px;
  background-color: #2099ed;
  cursor: pointer;
`;

const Btn2 = styled.button`
  width: 85px;
  height: 37px;
  border: none;
  border-radius: 30px;
  font-size: 1.1rem;
  color: white;
  font-weight: 700;
  background-color: #2099ed;
  cursor: pointer;
  margin-bottom: 4px;
`;

const Btn3 = styled.button`
  width: 115px;
  height: 38px;
  border: none;
  border-radius: 30px;
  font-size: 1rem;
  color: white;
  font-weight: 700;
  background-color: black;
  cursor: pointer;
  border: 1px solid #566470;
  margin-left: 510px;
  margin-top: 12px;
  margin-right: 15px;
`;

export default Button;
