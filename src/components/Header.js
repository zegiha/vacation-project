import React, {useState, useEffect} from 'react';
import styled from "styled-components";
import Logo from "../assets/Mainpage/logo.svg"
import { Link } from 'react-router-dom';

const Header = (props) => {
  const [nav, setNav] = useState(props.isNotHome);

  useEffect(() => {
    console.log("1");
    if(typeof window !== "undefined" && !props.isNotHome) {
      console.log(window.scrollY);
      window.addEventListener("scroll", () =>{
        console.log(window.scrollY);
        setNav(window.scrollY > 100 ? true : false);
      })
    }
  }, )

  return (
    <HeaderContainer navBar={nav}>
      <HeaderWrapper>
        <TextButton navBar={nav} to={'/'}><Left src={Logo}/></TextButton>
        <Right>
          <TextButton navBar={nav} to={'/'}>홈</TextButton>
          <TextButton navBar={nav} to={'/tell'}>이야기 하기</TextButton>
          <TextButton navBar={nav} to={'/hear'}>이야기 듣기</TextButton>
          <TextButton navBar={nav} to={'/report'}>더욱 알리기</TextButton>
        </Right>
      </HeaderWrapper>
    </HeaderContainer>
  );
};

const TextButton = styled(Link)`
  color: ${(props) => (props.navBar ? "var(--text-contents, #524437)" : "#f5f5f5")};
  font-family: 'Pretendard', sans-serif;
  font-size: 19px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  background: none;
  border: 0;
  text-decoration: none;
  padding: 10px 15px;
  border-radius: 5px;
  transition: all 0.3s;
  &:hover {
    background: rgba(0, 0, 0, 0.07);
  }
`;
const Right = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
`;
const Left = styled.img`
  width: 100px;
  height: 30px;
`;
const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  position: fixed;
  top: 0;
  margin: 0 auto;
  background-color: ${(props) => (props.navBar ? "rgba(255, 255, 255, 0.8)" : "transparent")};
  border-bottom: 1.5px solid ${(props) => (props.navBar ? "rgba(0, 0, 0, 0.2)" : "rgba(0, 0, 0, 0)")};
  z-index: 100;
  transition-property: background-color, border-bottom-color;
  transition: 0.2s ease-in-out;
  backdrop-filter: ${(props) => (props.navBar ? "blur(10px)" : "transparent")};
`;
const HeaderWrapper = styled.div`
  display: flex;
  width: 1120px;
  height: 60px;
  justify-content: space-between;
  align-items: center;
`;
export default Header;