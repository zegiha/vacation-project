import React from 'react';
import {Contents} from "../../atoms/Atomic";
import styled from "styled-components";

const ContentsEditNotice = ({setContents, contents, setPassword, password}) => {
  return (
    <>
      <ContentsBox>
        <Contents>내용</Contents>
        <Textarea placeholder={'내용을 적어주세요!'} onChange={e => setContents(e.target.value)} defaultValue={contents} height={'300px'}/>
      </ContentsBox>
    </>
  );
};

const Textarea = styled.textarea`
  display: flex;
  width: calc(100% - 30px);
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
export default ContentsEditNotice;