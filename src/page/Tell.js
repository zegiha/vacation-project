import {React, useState} from 'react';
import Header from "../components/Header";
import styled from "styled-components";
import {Contents, Title} from "../atoms/Atomic";
import {Link} from "react-router-dom";
import Footer from "../components/Footer";

const Tell = () => {
  const [name, setName] = useState('');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [fileName, setFileName] = useState('');

  const saveName = event => {
    setName(event.target.value);
    console.log(name)
  }
  const saveTitle = event => {
    setTitle(event.target.value);
    console.log(title)
  }
  const saveContent = event => {
    setContent(event.target.value);
    console.log(content)
  }

  const savePass = e => {
    console.log('졸립니다')
  }

  function writing() {
    console.log(name, title, content, fileName);
  }

  return (
    <>
      <Header isNotHome={true}/>
      <Container>
        <Wrapper>
          <Title data-aos={"fade-up"}>선생님의 이야기를 들려주세요</Title>
          <Section data-aos={"fade-up"}>
            <Titles>
              <Contents>이름</Contents>
              <TitleInput type={'text'} placeholder={'익명도 가능해요!'} onChange={saveName} defaultValue={name}/>
            </Titles>
            <Titles>
              <Contents>제목</Contents>
              <TitleInput type={'text'} placeholder={'제목을 입력해주세요!'} onChange={saveTitle} defaultValue={title}/>
            </Titles>
            <File>
              <FileLabel htmlFor='FileAdd'><Contents>첨부 파일 추가</Contents></FileLabel>
              <FileInput defaultValue={fileName}/>
              <FileAdd accept="image/*, video/*" type="file" multiple={true} id={'FileAdd'} onChange={(e) => setFileName(fileName + '   ' +e.target.files[0].name)}/>
            </File>
            <ContentsBox>
              <Contents>내용</Contents>
              <Textarea placeholder={'내용을 적어주세요!'} onChange={saveContent} defaultValue={content} height={'300px'}/>
            </ContentsBox>
            <ContentsBox>
              <Contents>비밀번호</Contents>
              <Textarea placeholder={'비밀번호를 적어주세요!'} onChange={savePass} defaultValue={content} height={'24px'}/>
            </ContentsBox>
            <ButtonContainer>
              <Submit onClick={writing} to={'/hear'}>글 올리기</Submit>
            </ButtonContainer>
          </Section>
        </Wrapper>
      </Container>
      <Footer/>
    </>
  );
};

const File = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
const FileInput = styled.input`
  display: inline-block;
  height: 40px;
  padding: 0 10px;
  vertical-align: middle;
  border-radius: 4px;
  border: 2px solid var(--line, rgba(0, 0, 0, 0.10));
  width: 80.5%;
  color: var(--text-contents);
  &:focus{
    border: 2px solid var(--line, rgba(0, 0, 0, 0.10));
    outline: none;
  }
`;
const FileLabel = styled.label`
  border-radius: 4px;
  border: 2px solid var(--line, rgba(0, 0, 0, 0.10));
  background: none;
  display: flex;
  width: 10%;
  padding: 10px 15px;
  width: max-content;
  transition: all 0.3s;
  &:hover {
    border: 2px solid var(--line, rgba(0, 0, 0, 0.30));
    transform: scale(1.02);
  }
`;
const Submit = styled(Link)`
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
  }
`;
const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;
`;
const Textarea = styled.textarea`
  display: flex;
  width: 96.2%;
  height: ${(props) => props.height};
  padding: 10px 15px;
  border-radius: 4px;
  border: 2px solid var(--line, rgba(0, 0, 0, 0.10));
  color: var(--text-contents, #524437);
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  resize: none;
  outline: none;
  transition: all 0.3s;
  &:focus{
    border: 2px solid var(--line, rgba(0, 0, 0, 0.30));
    outline: none;
  }
`;
const ContentsBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const FileAdd = styled.input`
  display: none;
`;
const TitleInput = styled.input`
  min-width: 160px;
  height: 23px;
  border-radius: 4px;
  border: 2px solid var(--line, rgba(0, 0, 0, 0.10));
  padding: 10px 15px;
  font-size: 20px;
  color: var(--text-contents);
  transition: all 0.3s;
  &:focus{
    border: 2px solid var(--line, rgba(0, 0, 0, 0.30));
    outline: none;
  }
`;
const Titles = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
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
