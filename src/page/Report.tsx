import React from 'react';
import styled from "styled-components";
import Header from "../components/Header/Header";
import Footer from "../components/Footer";
import {Title} from "../atoms/Atomic";
import mbcLogo from "../assets/Report/mbcLogo.svg"
import sbsLogo from "../assets/Report/sbsLogo.svg"
import kbsLogo from "../assets/Report/kbsLogo.svg"

const Report = () => {
  return (
    <>
      <Header isNotHome={true}/>
      <Container>
        <Wrapper>
          <Title data-aos={"fade-up"}>언론 제보로 더욱 알리기</Title>
          <Box data-aos={"fade-up"}>
            <Item>
              <Top>
                <MbcLogo src={mbcLogo}/>
                <Line/>
              </Top>
              <Texts>
                <GoToPage href={'https://news.imbc.com/more/report/'} target={'_blank'}>
                  <SubTitle>홈페이지</SubTitle>
                  https://news.imbc.com/<br/>
                  more/report/
                </GoToPage>
                <Text>
                  <SubTitle>이메일</SubTitle>
                  mbcjebo@mbc.co.kr
                </Text>
                <Text>
                  <SubTitle>전화번호</SubTitle>
                  02-784-4000
                </Text>
              </Texts>
            </Item>
            <Item>
              <Top>
                <SbsLogo src={sbsLogo}/>
                <Line/>
              </Top>
              <Texts>
                <GoToPage href={'https://news.sbs.co.kr/news/inform.do'} target={'_blank'}>
                  <SubTitle>홈페이지</SubTitle>
                  https://news.sbs.co.kr/<br/>
                  news/inform.do
                </GoToPage>
                <Text>
                  <SubTitle>이메일</SubTitle>
                  sbs8news@sbs.co.kr
                </Text>
                <Text>
                  <SubTitle>전화번호</SubTitle>
                  02-2113-6000
                </Text>
              </Texts>
            </Item>
            <Item>
              <Top>
                <KbsLogo src={kbsLogo}/>
                <Line/>
              </Top>
              <Texts>
                <GoToPage href={'https://news.imbc.com/more/report/'} target={'_blank'}>
                  <SubTitle>홈페이지</SubTitle>
                  https://news.kbs.co.kr/report/<br/>
                  reportWrite.do
                </GoToPage>
                <Text>
                  <SubTitle>이메일</SubTitle>
                  kbs1234@kbs.co.kr
                </Text>
                <Text>
                  <SubTitle>전화번호</SubTitle>
                  02-781-1234, 4444
                </Text>
              </Texts>
            </Item>
          </Box>
        </Wrapper>
      </Container>
      <Footer/>
    </>
  );
};

const KbsLogo = styled.img`
  width: 201px;
  height: 64px;
  margin-bottom: 28px;
`;
const SbsLogo = styled.img`
  width: 134px;
  height: 51px;
  margin-bottom: 40px;
`;
const GoToPage = styled.a`
  padding: 10px 15px;
  color: var(--text-contents, #524437);
  font-family: Pretendard;
  font-size: 22px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  max-width: 436px;
  width: max-content;
  text-decoration: none;
  border-radius: 5px;
  transition: all 0.3s;

  &:hover {
    background: #ececec;
  }
`;
const Texts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5vh;
`;
const Top = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
;
`;
const MbcLogo = styled.img`
  width: 178px;
  height: 51px;
  margin-bottom: 41px;
`;
const SubTitle = styled.div`
  color: var(--text-contents, #524437);
  font-family: Pretendard;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;
const Text = styled.div`
  padding: 10px 15px;
  color: var(--text-contents, #524437);
  font-family: Pretendard;
  font-size: 22px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  max-width: 436px;
  width: max-content;
`;
const Line = styled.div`
  width: 436px;
  height: 1px;
  background: #B0B0B0;
`;
const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5vh;
  width: 436px;
  padding: 40px 20px;
  border: 2px solid var(--line, rgba(0, 0, 0, 0.10));
  border-radius: 10px;
`;
const Box = styled.div`
  width: 100%;
  height: max-content;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 3vw;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 1800px;
  gap: 70px;
`;
const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 110px;
  margin-bottom: 180px;
  min-height: 70vh;
`;
export default Report;