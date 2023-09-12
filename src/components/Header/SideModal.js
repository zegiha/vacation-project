import React from 'react';
import styled from "styled-components";
import {Link} from "react-router-dom";

const SideModal = ({setSideBar}) => {
  return (
    <ModalContainer>
      <ModalBackground onClick={() => setSideBar(false)}/>
      <Modal>
        <Divider/>
        <ContentsBox to={'/'}>홈</ContentsBox>
        <Divider/>
        <ContentsBox to={'/tell'}>이야기 하기</ContentsBox>
        <Divider/>
        <ContentsBox to={'/hear'}>이야기 듣기</ContentsBox>
        <Divider/>
        <ContentsBox to={'/report'}>더욱 알리기</ContentsBox>
      </Modal>
    </ModalContainer>
  );
};

const Divider = styled.div`
  width: 100%;
  margin: 0 20px;
  height: 1px;
  background: rgba(0, 0, 0, 0.10);
`;

const ContentsBox = styled(Link)`
  color: var(--text-contents, #524437);
  width: 90%;
  font-family: 'Pretendard', sans-serif;
  font-size: 19px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  background: none;
  border: 0;
  text-decoration: none;
  padding: 10px 15px;
  border-radius: 7px;
  transition: all 0.3s;
  &:hover{
    background: rgba(0, 0, 0, 0.07);
    cursor: pointer;
  }
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
const Modal = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: max-content;
  background-color: white;
  padding: 55px 0 25px 0;
  z-index: 12;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 8px;
  border-radius: 0 0 20px 20px;
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
export default SideModal;