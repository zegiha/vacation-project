import React from 'react';
import {MainContainer, Subtitle, Title, Titles, Contents} from "../../atoms/Atomic";
import styled from "styled-components";

const Punish = () => {
  return (
    <MainContainer>
      <PunishWrapper>
        <Titles data-aos="fade-up">
          <Subtitle>교권침해의 처벌은 7단께로 나눌 수 있어요</Subtitle>
          <Title>교권침해는 어떻게 처벌되나요?</Title>
        </Titles>
        <StickBox>
          <Stick color={'#FDE9E9'} width={'190px'} data-aos="fade-up"><Contents>교내봉사</Contents></Stick>
          <Stick color={'#fed0d0'} width={'240px'} data-aos="fade-up"><Contents>사회 봉사</Contents></Stick>
          <Stick color={'#feb4b4'} width={'290px'} data-aos="fade-up"><Contents>특별교육 또는 심리치료</Contents></Stick>
          <Stick color={'#fe9d9d'} width={'340px'} data-aos="fade-up"><Contents>출석 정지</Contents></Stick>
          <Stick color={'#ff8585'} width={'390px'} data-aos="fade-up"><Contents>학급 교체</Contents></Stick>
          <Stick color={'#ff6868'} width={'440px'} data-aos="fade-up"><Contents>전학</Contents></Stick>
          <Stick color={'#ff4444'} width={'480px'} data-aos="fade-up"><Contents>퇴학 처분</Contents></Stick>
        </StickBox>
      </PunishWrapper>
    </MainContainer>
  );
};

const Stick = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 3px;
  background-color: ${(props) => props.color};
  width: ${(props) => props.width};
  height: 50px;
`;
const StickBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
`;
const PunishWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 1120px;
  gap: 100px;
  padding-top: 180px;
  padding-bottom: 180px;
`;
export default Punish;