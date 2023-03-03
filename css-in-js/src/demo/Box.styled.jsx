import styled, { css } from 'styled-components';

export const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 50px;
  left: 50%;
  translate: -50% 0;
  background-color: ${({ theme }) => theme.primary['500']};
  color: ${({ theme }) => theme.secondary['500']};
  width: 200px;
  height: 60px;

  &:hover {
    ${({ theme }) => {
      return css`
        background-color: ${theme.secondary['500']};
        color: ${theme.primary['500']};
      `;
    }}
  }
`;

Box.displayName = 'Box';
