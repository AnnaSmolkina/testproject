import styled from "styled-components";

export const BLocksWrapperStyled = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  height: 800px;
`;
export const BLockStyled = styled.div`
  width: 200px;
  height: 200px;
  border: solid 1px;
  text-align: center;
  background: lightblue;
  font-size: 100px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  animation-duration: 5s;
  animation-iteration-count: infinite;
  animation-name:  ${props => props.name === '1' ? 'block-1' : 'block-2'};
  animation-timing-function: linear;

  @keyframes block-1 {
    0%   { transform: translateY(0); }
    25%  { transform: translateY(-300px); }
    50%  { transform: translateY(300px); }
    100% { transform: translateY(0); }
  }
`;