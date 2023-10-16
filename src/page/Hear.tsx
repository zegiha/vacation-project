import React from 'react';
import styled from "styled-components";
import Header from "../components/Header/Header";
import {Title} from "../atoms/Atomic";
import Footer from "../components/Footer";
import {Link} from "react-router-dom";
import {useQuery} from "@tanstack/react-query";
import {getNoticeInfo} from "../apis/getNoticeInfo";

const Hear = () => {
  const { data, isError, isLoading, error } = useQuery(['noticeInfoKey'], getNoticeInfo);

  function checkVidoe(fileEditor: string) {
    if(fileEditor === '.mp4' || fileEditor === '.mov') return true;
    else return false;
  }

  if(isError) console.error(error);
  else if(isLoading) return (
    <>
      <Title>Loading</Title>
    </>
  )
  else if(!isLoading)return (
    <>
      <Header isNotHome={true}/>
      <Container>
        <Wrapper>
          <Title data-aos={"fade-up"}>다른 선생님분들의 이야기</Title>
          <Box data-aos={"fade-up"}>
            {data.data.map((n: any, i: number) => {
              return(
                <Item key={i} to={`/details/:${i}`} state={{noticeData: n, index: i}}>
                  {
                    n.uploadImageList.length > 0?
                      <WithPic>
                        {checkVidoe(n.uploadImageList[0].uploadFilename.substr(n.uploadImageList[0].uploadFilename.length -4)) ?
                          <Video muted>
                            <source src={n.uploadImageList[0].uploadFilename} type={'video/mp4'}/>
                          </Video> : <Picture src={n.uploadImageList[0].uploadFilename}/>}
                        <TextContainer>
                          <ItemTitle>{n.title}</ItemTitle>
                          <Username>{n.username}</Username>
                        </TextContainer>
                      </WithPic>:
                      <WithoutPic>
                        <Text>{n.contents}</Text>
                        <TextContainer>
                          <ItemTitle>{n.title}</ItemTitle>
                          <Username>{n.username}</Username>
                        </TextContainer>
                      </WithoutPic>
                  }
                </Item>
              )
            })}
          </Box>
        </Wrapper>
      </Container>
      <Footer/>
    </>
  );
};

const Video = styled.video`
  max-width: 300px;
  width: 1000px;
  height: 170px;
  border-radius: 5px;
  background-color: red;
`;
const Text = styled.div`
  max-width: 300px;
  width: 1000px;
  height: 170px;
  text-decoration: none;
  color: var(--text-contents, #524437);
  font-size: 22px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  overflow: hidden;
`;
const WithoutPic = styled.div`
  width: 300px;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const WithPic = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 300px;
  height: 250px;
`;
const Username = styled.div`
  color: var(--text-contents, #524437);
  font-size: 19px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  height: 40px;
  overflow: hidden;
`;

const ItemTitle = styled.div`
  color: var(--text-title);
  font-size: 22px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  overflow: hidden;
  height: 26px;
  width: auto;
`;
const TextContainer = styled.div`
  width: auto;
  height: 65px;
`;
const Item = styled(Link)`
  width: 300px;
  height: 250px;
  text-decoration: none;
  transition: 0.2s;

  &:hover {
    scale: 1.05;
  }
`;
const Picture = styled.img`
  max-width: 300px;
  width: 1000px;
  height: 170px;
  border-radius: 5px;
  border: 1.5px solid #ffeadb;
`;
const Box = styled.div`
  border-radius: 20px;
  background: #FFF8F1;
  display: flex;
  padding: 35px;
  width: 980px;
  gap: 40px;
  flex-wrap: wrap;
  @media(max-width: 1070px) {
    width: 640px;
  }
  @media(max-width: 730px) {
    width:300px;
  }
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  max-width: 1120px;
  width: 100%;
  margin: 0 10000px;
  min-height: 100vh;
`;
const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding-top: 110px;
  padding-bottom: 180px;
`;
export default Hear;