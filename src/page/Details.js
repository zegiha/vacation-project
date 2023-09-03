import React from 'react';
import Header from "../components/Header";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import {Title} from "../atoms/Atomic";

const Details = () => {
  const location = useLocation();
  const message = location.state.message;
  console.log(message)

  return (
    <>
      <Header isNotHome={true}/>
      <Container data-aos={'fade-up'}>
        <Wrapper>
          <TitleAndName>
            <Title>너무 힘들어요</Title>
            <UserName>익명</UserName>
          </TitleAndName>
          <Divider/>
          <Contents>
            안녕하세요 저는 어디에 근무하는 이서율 입니다<br/>
            힘드네요
          </Contents>
          <Divider/>
        </Wrapper>
      </Container>
    </>
  );
};

const Contents = styled.div`
  width: 700px;
  color: var(--text-contents, #524437);
  font-family: 'Pretendard';
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px; /* 145.455% */
  letter-spacing: 0.44px;
`;
const Divider = styled.div`
  width: 700px;
  height: 2px;
  background: rgba(0, 0, 0, 0.10);
`;
const UserName = styled.div`
  color: var(--text-title, #2C231E);
  font-family: 'Pretendard';
  font-size: 24px;
  font-weight: 500;
`;
const TitleAndName = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 110px;
`;
const Wrapper = styled.div`
  width: 700px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 35px;
`;
export default Details;