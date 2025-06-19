import styled from 'styled-components';

export const Cabecalho = styled.header`
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  border-bottom: 3px solid #0000ff;

  @media (max-width: 400px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Title = styled.h1`
    font-size: 40px;
    display: flex;
    align-items: center;
    gap: 10px
`;

export const ImgLogo = styled.img`
    width: 50px;
    border-radius: 50%;

    @media (max-width: 400px) {
        width: 30px;
  }
`;