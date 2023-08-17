import React from 'react';
import {MainContainer, Titles, Title, Subtitle, MainWrapper, Contents} from "../../atoms/Atomic";
import styled from "styled-components";
import {IllegalExample} from "../../data/IllegalExample";

const Illegal = () => {
  return (
    <MainContainer>
      <MainWrapper>
        <Titles data-aos="fade-up">
          <Subtitle>교권침해 사항은 아래 5개가 있어요</Subtitle>
          <Title>우선은 침해사항을 살펴볼까요?</Title>
        </Titles>
        <ItemBox data-aos="fade-up">
          {IllegalExample.map((n, _) => {
            return(
              <Item key={n.id}>
                <Icon src={n.icon} height={n.hegiht}/>
                <ItemTitle>{n.title}</ItemTitle>
                <Contents>{n.contents.split('\n').map((line, i) => {
                  return(
                    <div key={i}>
                      {line}<br/>
                    </div>
                  )
                })}</Contents>
              </Item>
            )
          })}
        </ItemBox>
      </MainWrapper>
    </MainContainer>
  );
};

const ItemTitle = styled.div`
  color: var(--text-title, #1B1B22);
  font-family: Pretendard;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;
const Icon = styled.img`
  height: ${(props) => 'props.height'};
`;
const Item = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  gap: 15px;
`;
const ItemBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  gap: 200px;
`;
export default Illegal;