import React from 'react';
import styled from "styled-components";
import {Contents, MainContainer, MainWrapper, Point, Title} from "../../atoms/Atomic";
import news from '../../assets/Mainpage/news.png'

const Introduce = () => {
  return (
    <MainContainer>
      <MainWrapper gap={'100px'}>
        <TempContainer>
          <div>
            <Title data-aos={"fade-up"}>
              저희는 <Point size={'35px'} weight={'600'}>선생님</Point>분들을 위해 생각합니다
            </Title>
            <Blank num={'4vh'}/>
            <Contents>
              <div data-aos={"fade-up"}>
                하루하루 고난길을 걸으셨던 선생님 분들이 계십니다<br/>
                그렇기에 점점 심해져가는 교직원 분들의 생활을<br/>
                다른 분들께서 알아주시고있습니다<br/><br/>
              </div>
              <div data-aos={"fade-up"}>
                왼쪽의 사진 처럼 언론에서 또한<br/>
                요즘 사회에 대한 중요한 이슈거리로 보도하고 있습니다<br/><br/>
              </div>
              <div data-aos={"fade-up"}>
                이 처럼 언론에 보도될 만큼 많은 사례들이 보여지고있습니다<br/><br/>
              </div>
              <div data-aos={"fade-up"}>
                물론 이와 같이 자극적이지 못한 예시가 될 수 없없더라도<br/>
                현재 저희 교직원분들에 대한 처우는 참담하다는 것이 비춰집니다<br/><br/>
              </div>

              <IntroducePoint data-aos={"fade-up"}>그리하여 저희는 <Point size={'25px'} weight={'600'}>생각</Point>합니다</IntroducePoint><Blank num={'1.5vh'}/>
              <div data-aos={"fade-up"}>
                이렇게 다양한 관심이 쏟아지는 순간<br/>
                차마 말하지 못하였던 참담한 현실에 대해 이야기하여<br/>
                저희의 스승분들을 도울것입니다
              </div>
            </Contents>
          </div>
          <News src={news} data-aos={"fade-up"}/>
        </TempContainer>
      </MainWrapper>
    </MainContainer>
  );
};

const News = styled.img`
  width: 305px;
  height: 542px;
  flex-shrink: 0;
  border-radius: 5px;
`;
const Blank = styled.div`
  width: 0;
  height: ${(props) => props.num};
`;
const TempContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const IntroducePoint = styled.div`
  color: var(--text-title, #2C231E);
  font-family: 'Pretendard';
  font-size: 25px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;
export default Introduce;