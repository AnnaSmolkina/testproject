import styled from "styled-components";

export const CircleStyled = styled.div`
  width: 70px;
  height: 70px;
  background-color: lightgreen;
  border-radius: 50%;
  z-index: 1;
  display: ${props => props.name === '1' ? 'block' : 'none'};;
`;