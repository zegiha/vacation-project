import React from 'react';
import styled from "styled-components";
import MainLogo from ".././assets/Footer/mainLogo.svg";
import SunrinLogo from ".././assets/Footer/sunrinLogo.svg";
import IwopLogo from ".././assets/Footer/iwopLogo.svg";

const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <Item>
          <img src={MainLogo} alt="MainLogo" width={'125px'}/>
          <Texts>
            <Title>Rechts</Title>
            <Contents>
              개발: 이서율, 조성훈<br/>
              디자인: 이서율, 차수현<br/>
              서류: 이서율, 윤승준<br/>
              자료: 이서율, 민지후
            </Contents>
          </Texts>
        </Item>
        <Item>
          <img src={SunrinLogo} alt="SunrinLogo" width={'30px'}/>
          <Texts>
            <Title>선린인터넷고등학교</Title>
            <Contents>
              Tel. 02-713-6211<br/>
              서울 용산구 원효로97길 33-4(청파동3가, 선린인터넷고등학교)<br/><br/>

              © Sunrin Internet Highschool<br/>
              All Right Reserved.
            </Contents>
          </Texts>
        </Item>
        <Item>
          <Logo src={IwopLogo} alt="IwopLogo" width={'60px'}/>
          <Texts>
            <Title>IWOP</Title>
            <Contents>
              깃허브: https://iwop.github.io/<br/>
              인스타그램: https://www.instagram.com/sunrin_iwop/
            </Contents>
          </Texts>
        </Item>
      </Wrapper>
    </Container>
  );
};

const Logo = styled.img`
  width: ${(props) => props.width};
`;
const Contents = styled.div`
  color: #DBDBDB;
  font-family: Pretendard;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  height: max-content;
`;
const Title = styled.div`
  width: max-content;
  color: #DBDBDB;
  font-family: Pretendard;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  height: max-content;
`;
const Texts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: max-content;
  height: max-content;
`;
const Item = styled.div`
  display: flex;
  justify-content: start;
  align-items: start;
  gap: 44px;
  width: max-content;
  height: max-content;
`;
const Wrapper = styled.div`
  display: flex;
  width: max-content;
  gap: 150px;
  height: max-content;
`;
const Container = styled.div`
  width: 100%;
  height: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #3F3F3F;
`;
export default Footer;