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
  gap: 100px;
  padding-bottom: 180px;
  padding-top: 180px;
`;
export const Title = styled.div`
  width: auto;
  color: var(--text-title, #1B1B22);
  font-family: Pretendard;
  font-size: 40px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;
export const Subtitle = styled.div`
  color: var(--text-subtitle, #47FF18);
  font-family: Pretendard;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;
export const Contents = styled.span`
  color: var(--text-contents, #3E3E4E);
  font-family: Pretendard;
  font-size: 19px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
export const Titles = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;