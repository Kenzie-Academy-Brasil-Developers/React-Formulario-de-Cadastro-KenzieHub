import styled, { css } from 'styled-components';

export const Container = styled.div`
  width: 360px;
  display: flex;
  position: relative;
  background: #f10;
  padding: 16px 30px 16px 16px;
  margin: 20px 22px 0;
  border-radius: 10px;
  cursor: pointer;
 
  ${({ hasDescription }) =>
    !hasDescription &&
    css`
      align-items: center;
      svg {
        margin-top: 0;
      }
    `}
  div {
    strong {
      font-weight: bold;
    }
    p {
      margin-top: 4px;
      font-size: 14px;
    }
  }
  button {
    position: absolute;
    right: 16px;
    top: 19px;
    border: 0;
    background: transparent;
    color: inherit;
    cursor: pointer;
  }
`