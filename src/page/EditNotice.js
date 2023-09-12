import React, { useEffect, useState} from 'react';
import Header from "../components/Header/Header";
import styled from "styled-components";
import {Title} from "../atoms/Atomic";
import Footer from "../components/Footer";
import {Link, useLocation, useNavigate} from "react-router-dom";
import TitleEditNotice from "../components/EditNotice/TitleEditNotice";
import FileEditNotice from "../components/EditNotice/FileEditNotice";
import ContentsEditNotice from "../components/EditNotice/ContentsEditNotice";
import EditModal from "../components/EditNotice/EditModal";

const EditNotice = () => {
  const location = useLocation();
  const { noticeData } = location.state;

  const navigate = useNavigate();

  const [isModal, setIsModal] = useState(false);

  const [userName, setUserName] = useState(noticeData.username);
  const [title, setTitle] = useState(noticeData.title);
  const [contents, setContents] = useState(noticeData.contents);
  const [imgSrc, setImgSrc] = useState([]);
  const [files, setFiles] = useState(noticeData.uploadImageList);
  const [delFiles, setDelFiles] = useState('');

  const [warn, setWarn] = useState({
    title: false,
    contents: false,
    userName: false,
  });

  useEffect(() => {
    const copyImgSrc = (n) => {
      return new Promise((resolve) => {
        resolve(n.uploadFilename);
      })
    }
    const fetchData = async () => {
      try{
        const imgSrcArray = await Promise.all(
          noticeData.uploadImageList.map((n) => copyImgSrc(n))
        );
        setImgSrc(imgSrcArray);

        } catch (error) {
          console.error(error);
      }
    }

    fetchData();
  }, [noticeData])

  function isModalChange() {
    setIsModal(!isModal)
  }

  return (
    <>

      <Header isNotHome={true}/>
      <Container>
        <Wrapper>
          <Title data-aos={"fade-up"}>게시물 수정</Title>
          <Section data-aos={"fade-up"}>
            <TitleEditNotice
              setUserName={setUserName}
              userName={userName}
              setTitle={setTitle}
              title={title}
              warn={warn}
            />
            <FileEditNotice
              imgSrc={imgSrc}
              setImgSrc={setImgSrc}
              files={files}
              setFiles={setFiles}
              delFiles={delFiles}
              setDelFiles={setDelFiles}
            />
            <ContentsEditNotice
              setContents={setContents}
              contents={contents}
              warn={warn}
            />
            <ButtonContainer>
              <Submit onClick={() => {
                setWarn({
                  title: title.length < 1,
                  userName: userName.length < 1,
                  contents: contents.length < 1,
                });
                if(!(title.length < 1 || userName.length < 1 || contents.length < 1)) isModalChange();
              }}>글 수정하기</Submit>
            </ButtonContainer>
          </Section>
        </Wrapper>
      </Container>
      {isModal ? <EditModal
        noticeData={noticeData}
        isModalChange={isModalChange}
        delFiles={delFiles}
        edit={{
        title: title,
        contents: contents,
        }}
        files={files}
      /> : <></>}
      <Footer/>
    </>
  );
};

const CancelNotice = styled(Link)`
  display: flex;
  padding: 10px 15px;
  justify-content: center;
  align-items: center;
  border-radius: 3px;
  border: 2px solid rgba(0, 0, 0, 0.10);
  gap: 10px;
  color: var(--text-title, #2C231E);
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
const Submit = styled.div`
  color: #FFF;
  font-family: 'Pretendard';
  font-size: 19px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  padding: 10px 15px;
  border-radius: 4px;
  background: var(--text-subtitle, #FF7C17);
  width: max-content;
  height: max-content;
  border: 0;
  transition: all 0.3s;
  text-decoration: none;
  &:hover {
    background: #ee7316;
    transform: scale(1.02);
    cursor: pointer;
  }
`;
const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;
  gap: 10px;
`;
const Section = styled.div`
  display: flex;
  gap: 35px;
  padding: 35px;
  flex-direction: column;
  border-radius: 20px;
  border: 2px solid var(--line, rgba(0, 0, 0, 0.10));
  width: 90%;
`;
const Wrapper = styled.div`
  width: 1120px;
  gap: 35px;
  display: flex;
  flex-direction: column;
  @media(max-width: 1220px) {
    width: 90%;
  }
`;
const Container = styled.div`
  padding-bottom: 180px;
  padding-top: 110px;
  display: flex;
  justify-content: center;
  width: 100%;
`;
export default EditNotice;
