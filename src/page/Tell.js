import {React, useState} from 'react';
import Header from "../components/Header";
import styled from "styled-components";
import {Contents, Title} from "../atoms/Atomic";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import { useMutation } from "@tanstack/react-query";
import { postNewNotice } from "../apis/postNewNotice";
import UserNameAndTitleTell from "../components/Tell/UserNameAndTitleTell";
import FileTell from "../components/Tell/FileTell";
import ContentsAndPasswordTell from "../components/Tell/ContentsAndPasswordTell";

const Tell = () => {
  const [userName, setUserName] = useState('');
  const [title, setTitle] = useState('');
  const [contents, setContents] = useState('');
  const [imgSrc, setImgSrc] = useState([]);
  const [files, setFiles] = useState([]);
  const [password, setPassword] = useState('');

  let navigate = useNavigate();

  function checkData() {
    if(true) console.log('tlqkf')
    posting.mutate({password, title, contents, userName, files}
  }

  const posting = useMutation(
    {
      mutationFn: (input) => postNewNotice(input),
      onSuccess: async () => {
        navigate('/hear');
      },
      onError: (error) => {
        console.error(error);
      }
    }
  )

  return (
    <>
      <Header isNotHome={true}/>
      <Container>
        <Wrapper>
          <Title data-aos={"fade-up"}>선생님의 이야기를 들려주세요</Title>
          <Section data-aos={"fade-up"}>
            <UserNameAndTitleTell
              setUserName={setUserName}
              userName={userName}
              setTitle={setTitle}
              title={title}
            />
            <FileTell
              imgSrc={imgSrc}
              setImgSrc={setImgSrc}
              files={files}
              setFiles={setFiles}
            />
            <ContentsAndPasswordTell
              setContents={setContents}
              contents={contents}
              setPassword={setPassword}
              password={password}
            />
            <ButtonContainer>
              <Submit onClick={() => checkData}>글 올리기</Submit>
            </ButtonContainer>
          </Section>
        </Wrapper>
      </Container>
      <Footer/>
    </>
  );
};

const Submit = styled.div`
  color: #FFF;
  font-family: Pretendard;
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
export default Tell;
