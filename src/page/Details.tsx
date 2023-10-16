import React, { useState } from 'react';
import Header from "../components/Header/Header";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { Title } from "../atoms/Atomic";
import Footer from "../components/Footer";
import DelModal from "../components/Details/DelModal";
import { Link } from "react-router-dom";

const Details = () => {
  const location = useLocation();
  const { noticeData, index } = location.state;
  const [noticeDel, setNoticeDel] = useState(false);

  function checkVidoe(fileEditor: string) {
    if(fileEditor === '.mp4' || fileEditor === '.mov') return true;
    else return false;
  }

  function noticeDelChange () {
    setNoticeDel(!noticeDel);
  }

  return (
    <>
      <Header isNotHome={true}/>
      <Container data-aos={'fade-up'}>
        <Wrapper>
          <TitleAndName>
            <Title>{noticeData.title}</Title>
            <UserName>{noticeData.username}</UserName>
          </TitleAndName>
          <Divider/>
          <Contents>{noticeData.contents}</Contents>
          {
            noticeData.uploadImageList.length > 0 ?
              <>
                <Divider/>
                <ImgContainer>
                  {noticeData.uploadImageList.map((img: any, i: number) => {
                    return(
                      checkVidoe(img.uploadFilename.substr(img.uploadFilename.length -4)) ? (
                        <Video controls key={i}>
                          <source src={img.uploadFilename} type={'video/mp4'}/>
                        </Video>
                      ):
                      (
                        <Img src={img.uploadFilename} key={i}/>
                      )
                    )
                  })}
                </ImgContainer>
              </> : <></>
          }<Divider/>
          <Left>
            <EditNotice to={`/details/:${index}/edit`} state={{noticeData: noticeData}}>게시물 수정</EditNotice>
            <DelNotice onClick={ () => noticeDelChange()}>게시물 삭제</DelNotice>
          </Left>
        </Wrapper>
      </Container>
      <Footer/>
      {noticeDel ? <DelModal noticePassword={noticeData.editPassword} noticeTitle={noticeData.title} noticeContents={noticeData.contents} noticeBoolChange={noticeDelChange}/> : <></>}
    </>
    );
}

const Video = styled.video`
  max-width: 100%;
  width: max-content;
`;
const EditNotice = styled(Link)`
  display: flex;
  padding: 10px;
  justify-content: center;
  align-items: center;
  border-radius: 3px;
  border: 2px solid rgba(0, 0, 0, 0.10);
  gap: 10px;
  color: var(--text-title, #2C231E);
  text-decoration: none;
  font-size: 17px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  transition: all 0.2s;
  &:hover {
    background: rgba(0, 0, 0, 0.07);
    transform: scale(1.05);
  }
`;
const DelNotice = styled.div`
  display: flex;
  padding: 11px 10px 11px 10px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 3px;
  background: #FF5151;
  color: #FFF;
  font-size: 17px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  transition: all 0.2s;
  &:hover {
    background: #FF2E2E;
    transform: scale(1.05);
    cursor: pointer;
  }
`;
const Left = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 10px;
`;
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
  max-width: 700px;
  width: 100%;
  color: var(--text-contents, #524437);
  font-family: 'Pretendard';
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px; /* 145.455% */
  letter-spacing: 0.44px;
`;
const Divider = styled.div`
  width: 100%;
  margin: 0 20px;
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
  margin-bottom: 50px;
`;
const Wrapper = styled.div`
  max-width: 700px;
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 35px;
  min-height: 100vh;
`;
export default Details;