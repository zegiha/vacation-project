import React from 'react';
import styled from "styled-components";

interface PropsTypes{
  setUserName: (contents: string) => void;
  userName: string;
  setTitle: (contents: string) => void;
  title: string;
  warn: {
    title: boolean;
    contents: boolean;
    userName: boolean;
  };
}

const TitleEditNotice = ({setTitle, title, warn}: PropsTypes) => {
  return (
    <>
      <Titles>
        <FileContents>제목</FileContents>
        <TitleInput type={'text'} placeholder={'제목을 입력해주세요!'} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)} defaultValue={title}/>
        {warn.title ? <Warn>필수항목입니다!</Warn> : <></>}
      </Titles>
    </>
  );
};

const FileContents = styled.div`
  color: var(--text-contents, #524437);
  font-family: 'Pretendard';
  font-size: 22px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  width: max-content;
`;
const Warn = styled.div`
  color: #FF2E2E;
  font-size: 17px;
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

export default TitleEditNotice;