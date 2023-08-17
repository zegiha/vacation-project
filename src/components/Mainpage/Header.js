import React from 'react';
import styled from "styled-components";
import Logo from "../../assets/Mainpage/logo.svg"

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderWrapper>
        <Left src={Logo}/>
        <Right>
          <TextButton>침해사항</TextButton>
          <TextButton>처벌</TextButton>
          <TextButton>신고방법</TextButton>
          <TextButton>다른 사례들</TextButton>
        </Right>
      </HeaderWrapper>
    </HeaderContainer>
  );
};

const TextButton = styled.button`
  color: var(--text-contents, #3E3E4E);
  font-family: 'Pretendard', sans-serif;
  font-size: 19px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  background: none;
  border: 0;
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
  background-color: #fff;
  z-index: 100;
`;
const HeaderWrapper = styled.div`
  display: flex;
  width: 1120px;
  height: 60px;
  justify-content: space-between;
  align-items: center;
`;
export default Header;