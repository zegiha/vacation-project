import React from 'react';
import styled from "styled-components";

const ContentsEditNotice = ({setContents, contents, warn}) => {
  return (
    <>
      <ContentsBox>
        <FileContents>내용</FileContents>
        <Textarea placeholder={'내용을 적어주세요!'} onChange={e => setContents(e.target.value)} defaultValue={contents} height={'300px'}/>
        {warn.contents ? <Warn>필수항목입니다!</Warn> : <></>}
      </ContentsBox>
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