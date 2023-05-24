import styled from "styled-components";

const Button = ({ text, types, isHover }) => {
  return types === "1" ? (
    <Btn1>{text}</Btn1>
  ) : types === "2" ? (
    isHover ? (
      <Btn2>{text}</Btn2>
    ) : (
      <Btn2Hover>{text}</Btn2Hover>
    )
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

const Btn2Hover = styled.button`
  width: 85px;
  height: 37px;
  border: none;
  border-radius: 30px;
  font-size: 1.1rem;
  color: white;
  font-weight: 700;
  background-color: #2099ed;
  opacity: 50%;
  cursor: pointer;
  margin-bottom: 4px;
`;

const Btn3 = styled.button`
  width: 7rem;
  height: 2.3rem;
  border: none;
  border-radius: 30px;
  font-size: 1rem;
  color: black;
  font-weight: 700;
  background-color: white;
  cursor: pointer;
`;

export default Button;
