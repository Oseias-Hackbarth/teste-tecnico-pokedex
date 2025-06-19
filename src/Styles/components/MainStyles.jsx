import styled from 'styled-components';

export const Main = styled.main`
    color: ${(props) => props.theme.color};
    background: ${(props) => props.theme.background};
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-start; /* <- Mantém tudo grudado no topo, sempre */
    align-items: center; /* <- Centraliza horizontalmente */
    padding: 16px; /* Opcional, pra respirar um pouco */

    @media (max-width: 750px) {
        padding: 8px;
    }
`;

export const Bar = styled.div`
    width: 100%;
    height: 10px;
    border-bottom: 3px solid #0000ff;
`;

export const GridPokemon = styled.div`
  display: grid;
  grid-template-columns: repeat(5, minmax(200px, 1fr));
  gap: 20px;
  margin: 10px auto;
  padding: 20px;
  background: ${(props) => props.theme.backgroundBottonCard};
  border-radius: 15px;


  @media (max-width: 1050px) {
    grid-template-columns: repeat(4, 1fr);}

  @media (max-width: 1000px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const Poke = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;

    @media (max-width: 750px) {
        flex-direction: column-reverse;
        justify-content: flex-start; 
        align-items: center;            
        width: 100%;
    }
`; 

export const DropdownContainer = styled.div`
    padding: 20px;
    align-itens: center;

    @media (max-width: 750px) {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
`;

export const DropdownContent = styled.div`
    background-color: ${(props) => props.theme.backgroundBottonCard};
    color: ${(props) => props.theme.colorName};
    border: 1px solid #000;
    border-radius: 5px;
    padding: 8px;
    max-height: 250px;
    overflow-y: auto;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
`;

export const TypeLabel = styled.label`
    display: block;
    text-align: left;
    cursor: pointer;
    width: 80px;
`;

