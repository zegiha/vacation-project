import React, {useEffect, useState} from 'react';
import Header from "../components/Header";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import {Title} from "../atoms/Atomic";
import {useQuery} from "react-query";
import axios from 'axios';



// eslint-disable-next-line react-hooks/rules-of-hooks
const Details = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [data, setData] = useState(null);

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        // Axios를 사용하여 데이터를 가져옵니다.
        axios.get('http://13.124.212.11:8081/api/v1/board')
            .then(response => {
                // 성공적으로 데이터를 가져오면 상태에 저장합니다.
                console.log(response.data)
                setData(response);
            })
            .catch(error => {
                // 오류가 발생하면 오류를 처리합니다.
                console.error('데이터를 가져오는 중 오류 발생:', error);
            });
    }, []);


    if (data) return (
        <>
            <Header isNotHome={true}/>
            <Container data-aos={'fade-up'}>
                <Wrapper>
                    {
                        data.data.map((item, index) => (
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