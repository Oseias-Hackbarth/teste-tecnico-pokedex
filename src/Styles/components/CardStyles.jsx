import styled from "styled-components";
import { Link } from "react-router-dom";
import { fadeIn } from "../Animations";

export const Card = styled(Link)`
  background: ${(props) => props.theme.backgroundCard};
  border-radius: 10px;
  padding: 15px;
  text-align: center;
  box-shadow: 0 4px 6px rgba(53, 22, 194, 0.62);
  transition: transform 0.2s ease, box-shadow 0.3s ease;
  text-decoration: none;
  animation: ${fadeIn} 0.4s ease both;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 12px rgba(53, 22, 194, 0.62);
  }
`;


export const ImgPokemon = styled.img`
  width: 120px;
  height: 120px;
`;

export const NamePokemon = styled.h3`
  color: ${(props) => props.theme.colorName};
  margin-top: 10px;
  text-transform: capitalize;
`;