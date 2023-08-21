import React from 'react';
import styled from "styled-components";
import Background from '../../assets/Mainpage/background.png'
import Arrow from '../../assets/Mainpage/arrow.svg'

const Cover = ({sc}) => {
  return (
    <CoverContainer>
      <CoverWrapper>
        <Top>
          <CoverTitle data-aos="fade-right">저희는 <br/>
            선생님을 응원합니다!</CoverTitle>
          <CoverTitle data-aos="fade-right" data-aos-duration={"700"}>선생님의 <Point>권리</Point>를 응원합니다.</CoverTitle>
        </Top>
      </CoverWrapper>
      <Bottom onClick={sc}>더 알아보기<br/>
        <img src={Arrow} alt="ArrowImg"/>
      </Bottom>
    </CoverContainer>
  );
};

const Bottom = styled.button`
  position: absolute;
  bottom: 5vh;
  display: flex;
  gap: 10px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: none;
  border: none;
  color: #FFF;
  font-size: 20px;
  font-family: Pretendard;
  font-weight: 400;
`
const Point = styled.span`
  background: var(--text-point, linear-gradient(180deg, #84FF9F 0%, #3F0 100%));
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-family: Pretendard;
  font-size: 60px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;
const Top = styled.div`
  display: flex;
  flex-direction: column;
  gap: 70px;
  margin-top: 37vh;
`;
const CoverTitle = styled.div`
  color: #FFF;
  font-family: Pretendard;
  font-size: 55px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;
const CoverWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 263px;
  width: 1120px;
`;
const CoverContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background-image: url(${Background});
  margin: 0 auto;
  background-size: 100% 100%;
`;
export default Cover;