import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 auto;
  width: 100%;
`;
export const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  width: 1120px;
  gap: ${(props) => props.gap};
  padding-bottom: 180px;
  padding-top: 180px;
  margin: 0 100px;
`;
export const Title = styled.div`
  width: auto;
  color: var(--text-title, #2C231E);
  font-family: 'Pretendard';
  font-size: 35px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  @media(max-width: 1080px){
    font-size: 27px;
  }
`;
export const Contents = styled.div`
  color: var(--text-contents, #524437);
  font-family: 'Pretendard';
  font-size: 22px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  width: max-content;
  @media(max-width: 1080px) {
    font-size: 20px;
  }
`;
export const Point = styled.span`
  color: transparent;
  background: var(--text-point);
  font-family: 'Pretendard';
  font-size: ${(props) => props.size};
  font-style: normal;
  font-weight: ${(props) => props.weight};
  line-height: normal;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;