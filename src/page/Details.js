import React, {useEffect, useState} from 'react';
import Header from "../components/Header";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import {Title} from "../atoms/Atomic";
import {useQuery} from "react-query";
import axios from 'axios';
import { getNoticeInfo } from "../apis/getNoticeInfo";


const Details = () => {
  const {data, isLoading, isError, error} = useQuery(['noticeInfoKey'], getNoticeInfo);

    if(isError) console.error(error);
    else if (!isLoading) return (
      <>
        <Header isNotHome={true}/>
        <Container data-aos={'fade-up'}>
          <Wrapper>
            {
              data.data.map((item, index) => (
                <>
                  {console.log(item)}
                  <TitleAndName key={index}>
                    <Title>{item.title}</Title>
                    <UserName>{item.username}</UserName>
                  </TitleAndName>
                  <Divider/>
                  <Contents>{item.contents}</Contents>
                  {
                    item.uploadImageList.length > 0 ?
                      <>
                        <Divider/>
                        <ImgContainer>
                          {item.uploadImageList.map((img, i) => (
                            <Img src={img.uploadFilename} key={i}/>
                          ))}
                        </ImgContainer>

                      </> : <></>
                  }
                </>

              ))
            }
          </Wrapper>
        </Container>
      </>
    );
}

const Img = styled.img`
  max-width: 100%;
  width: max-content;
`;
const ImgContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 50px;
`;
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