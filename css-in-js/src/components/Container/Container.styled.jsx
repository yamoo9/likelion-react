import styled from 'styled-components';

const config = {
  minWidth: '320px',
  maxWidth: '1280px',
};

export const Container = styled.div`
  width: clamp(${config.minWidth}, 90vw, ${config.maxWidth});
  margin-left: auto;
  margin-rigth: auto;
`;
