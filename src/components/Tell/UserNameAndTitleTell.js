import React from 'react';
import {Contents} from "../../atoms/Atomic";
import styled from "styled-components";

const UserNameAndTitleTell = ({setUserName, userName, setTitle, title, warn}) => {
  return (
    <>
      <Titles>
        <Contents>이름</Contents>
        <TitleInput type={'text'} placeholder={'익명도 가능해요!'} onChange={e => setUserName(e.target.value)} defaultValue={userName}/>
        {warn.userName ? <Warn>필수항목입니다!</Warn> : <></>}
      </Titles>
      <Titles>
        <Contents>제목</Contents>
        <TitleInput type={'text'} placeholder={'제목을 입력해주세요!'} onChange={e => setTitle(e.target.value)} defaultValue={title}/>
        {warn.title ? <Warn>필수항목입니다!</Warn> : <></>}
      </Titles>
    </>
  );
};

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

export default UserNameAndTitleTell;