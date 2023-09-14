import React, {useEffect, useState} from 'react';
import {Title} from "../../atoms/Atomic";
import styled from "styled-components";
import { useMutation } from "@tanstack/react-query";
import {postDeletNotice} from "../../apis/postDeleteNotice";
import { useNavigate } from 'react-router-dom';

const DelModal = ({noticeBoolChange, noticePassword, noticeTitle, noticeContents}) => {
  const [passIn, setPassIn] = useState('');
  const [isCorrect, setIsCorrect] = useState()
  const navigate = useNavigate();

  const deleteNotice = useMutation(
    {
      mutationFn: (input) => postDeletNotice(input),
      onSuccess: async () => {
        alert('삭제되었습니다');
        navigate(-1);
      },
      onError: (error) => {
        alert('문제가 발생하였습니다\n다시 시도하여 주십시오');
        console.error(error);
        navigate(-1);
      }
    }
  )

  function delClicked() {
    if(passIn.trim() === noticePassword.trim()) {
      setIsCorrect(false);
      if(window.confirm("정말로 삭제하시겠습니까?")) {
        deleteNotice.mutate({noticePassword, noticeTitle, noticeContents});
      }
    } else setIsCorrect(true);
  }

  useEffect(() => {
    if(passIn.slice(-1) === '\n') {
      setPassIn(passIn.replace('\n', ''));
      delClicked();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [passIn])

  return (
    <>
      {deleteNotice.isLoading ? (
        <ModalContainer>
          <ModalBackground/>
          <Modal>
            <h2>삭제하고 있어요!</h2>
          </Modal>
        </ModalContainer>
      ):(
        <ModalContainer>
          <ModalBackground onClick={() => noticeBoolChange()}/>
          <Modal>
            <Title>게시물 지우기</Title>
            <ContentsBox>
              <Contents>비밀번호</Contents>
              <Textarea placeholder={'비밀번호를 적어주세요!'} onChange={(e) => {
                setPassIn(e.target.value);
              }} height={'24px'} value={passIn}/>
              {isCorrect ? <Correct >비밀번호가 일치하지 않아요!</Correct> : <></>}
            </ContentsBox>
            <Left>
              <EditNotice onClick={() => noticeBoolChange()}>취소</EditNotice>
              <DelNotice onClick={() => delClicked()}>게시물 삭제</DelNotice>
            </Left>
          </Modal>
        </ModalContainer>
      )}
    </>
  );
};

const Correct = styled.div`
  color: #FF2E2E;
  font-size: 17px;
`;
const EditNotice = styled.div`
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
const Left = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;
  gap: 10px;
`;
const DelNotice = styled.div`
  display: flex;
  width: max-content;
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
  }
`;
const Textarea = styled.textarea`
  display: flex;
  width: calc(100% - 34px);
  height: ${(props) => props.height};
  padding: 10px 15px;
  border-radius: 4px;
  border: 2px solid var(--line, rgba(0, 0, 0, 0.10));
  color: var(--text-contents, #524437);
  font-family: 'Pretendard'; 
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
const ContentsBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const Modal = styled.div`
  width: 1100px;
  height: max-content;
  background-color: white;
  border-radius: 20px;
  padding: 50px;
  z-index: 12;
  display: flex;
  flex-direction: column;
  gap: 35px;
`;
const ModalBackground = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 11;
`;
const ModalContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;
  
  width: 100%;
  height: 100%;
`;
export default DelModal;