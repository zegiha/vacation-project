import React from 'react';
import styled from "styled-components";
import mainLogo from ".././assets/Footer/mainLogo.svg";
import sunrinLogo from ".././assets/Footer/sunrinLogo.svg";
import iwopLogo from ".././assets/Footer/iwopLogo.svg";

const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <Item>
          <MainLogo src={mainLogo} alt="MainLogo"/>
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
          <SunrinLogo src={sunrinLogo} alt="SunrinLogo"/>
          <Texts>
            <Title>선린인터넷고등학교</Title>
            <Contents>
              Tel. 02-713-6211<br/>
              서울 용산구 원효로97길 33-4<br/>
              청파동3가, 선린인터넷고등학교<br/><br/>

              © Sunrin Internet Highschool<br/>
              All Right Reserved.
            </Contents>
          </Texts>
        </Item>
        <Item>
          <ClubLogo src={iwopLogo} alt="IwopLogo"/>
          <Texts>
            <Title>IWOP</Title>
            <Contents>
              깃허브<br/>
              https://iwop.github.io/<br/>
              인스타그램<br/>
              https://www.instagram.com/sunrin_iwop/
            </Contents>
          </Texts>
        </Item>
      </Wrapper>
    </Container>
  );
};

const MainLogo = styled.img`
  width: 135px;
  @media(max-width: 1600px){
    width: 105px;
  }
  @media(max-width: 1200px){
    width: 85px;
  }
  @media(max-width: 740px) {
    width: 105px;
  }
`;
const ClubLogo = styled.img`
  width: 70px;
  @media(max-width: 1600px){
    width: 55px;
  }
  @media(max-width: 1200px){
    width: 40px;
  }
  @media(max-width: 740px) {
    width: 55px;
  }
`;
const SunrinLogo = styled.img`
  width: 40px;
  @media(max-width: 1600px){
    width: 30px;
  }
  @media(max-width: 1200px){
    width: 25px;
  }
  @media(max-width: 740px) {
    width: 30px;
  }
`;
const Contents = styled.div`
  color: #DBDBDB;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  height: max-content;
  @media(max-width: 1600px){
    font-size: 14px;
  }
  @media(max-width: 1430px){
    font-size: 12px;
  }
  @media(max-width: 740px) {
    font-size: 16px;
  }
`;
const Title = styled.div`
  width: max-content;
  color: #DBDBDB;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  height: max-content;
  @media(max-width: 1600px){
    font-size: 18px;
  }
  @media(max-width: 1430px){
    font-size: 16px;
  }
  @media(max-width: 740px) {
    font-size: 20px;
  }
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
  gap: 2vw;
  width: max-content;
  height: max-content;
  @media(max-width: 740px) {
    gap: 5vw;
  }
`;
const Wrapper = styled.div`
  display: flex;
  width: max-content;
  gap: 5vw;
  @media(max-width: 1023px) {
    gap: 3vw;
  }
  @media(max-width: 740px) {
    flex-direction: column;
    margin: 30px 0;
    gap: 10vh;
    align-items: baseline;
  }
`;
const Container = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #3F3F3F;
  @media(max-width: 1023px) {
    height: 200px;
  }
  @media(max-width: 740px) {
    height: max-content;
  }
`;
export default Footer;