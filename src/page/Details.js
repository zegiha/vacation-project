import React, {useEffect, useState} from 'react';
import Header from "../components/Header";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import {Title} from "../atoms/Atomic";
import {useQuery} from "react-query";
import axios from 'axios';

const getNoticeInfo = async () => {
  console.log('시발');
  const { data } = await axios.post('13.124.212.11:8081/api/v1/board');
  console.log('시발');
  return data;
}

const Details = () => {
  // const noticeInfo = useQuery('noticeInfoKey', getNoticeInfo);
  const noticeInfo = {string: '나는 문어'};
  getNoticeInfo();

    if (noticeInfo) return (
        <>
          {console.log(noticeInfo)}
            <Header isNotHome={true}/>
            <Container data-aos={'fade-up'}>
                <Wrapper>
                    {
                      noticeInfo.map((item, index) => (
                            <div key={index}>
                                <Title>{item.title}</Title>
                                <Contents>{item.contents}</Contents>
                                <UserName>{item.title}</UserName>
                                <Divider/>asd<Divider/>
                                <TitleAndName>asd</TitleAndName>
                            </div>
                        ))
                    }
                </Wrapper>
            </Container>
        </>
    );
}


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