import React from 'react';
import Header from "../components/Header";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import {Title} from "../atoms/Atomic";
import {QueryClient, QueryClientProvider, useQuery} from "react-query";
import axios from 'axios';

const getBoard = async () => {
  const {data} = (await axios.get('http://localhost:8081/api/v1/board')
      .then((res) => {
        console.log(JSON.parse(res.data).title)
      }));
  console.log("sdf" + data)
  return data;
}
const Details = () => {

  const message = getBoard;
  //const queryClient = new QueryClient();
  console.log(message)

  return (
    <>
      <Header isNotHome={true}/>
      <Container data-aos={'fade-up'}>
        <Wrapper>
          <TitleAndName>
            <Title>{message.title}</Title>
            <UserName>익명</UserName>
            <TestBtn>서버 불러오기 버튼</TestBtn>
          </TitleAndName>
          <Divider/>
          <Contents>

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
const TestBtn = styled.button`
    width: 100px;
    height: 100px;
    background: red;
    color: white;
    onclick: ${getBoard()}
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