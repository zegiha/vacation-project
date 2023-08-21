import React from 'react';
import styled from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {Title} from "../atoms/Atomic";
import mbcLogo from "../assets/Report/mbcLogo.svg"
import sbsLogo from "../assets/Report/sbsLogo.svg"
import kbsLogo from "../assets/Report/kbsLogo.svg"

const Report = () => {
  return (
    <>
      <Header/>
      <Container>
        <Wrapper>
          <Title>언론 제보로 더욱 알리기</Title>
          <Box>
            <Item>
              <div>
                {/*<MbcLogo/>*/}
                <Line/>
              </div>
              <Text>
                <SubTitle></SubTitle>
              </Text>
            </Item>
          </Box>
        </Wrapper>
      </Container>
      <Footer/>
    </>
  );
};

const SubTitle = styled.div`

`;
const Text = styled.div`
  padding: 10px 15px;
  margin-bottom: 20px;
  color: var(--text-contents, #524437);
  font-family: Pretendard;
  font-size: 22px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
const Line = styled.div`
  width: 436px;
  height: 1px;
  background: #B0B0B0;
`;
const Item = styled.div`
  display: flex;
  flex-direction: column;
  gap: 100px;
  width: 436px;
`;
const Box = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 5vw;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 1508px;
`;
const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 60px;
`;
export default Report;