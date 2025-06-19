import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { Cabecalho, ImgLogo, Title } from "../../Styles/components/CabecalhoStyles";
import { StyledLinkHome } from "../../Styles/components/LinkStyles";
import  pokelogo  from "../../../public/imgs/pokelogo.png";

export const HeaderPage = () => {
  return (
    <Cabecalho>
      <Title> <ImgLogo src={pokelogo} alt="pokebola" /> Pokédex</Title>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <StyledLinkHome to="/">
           Home <FontAwesomeIcon icon={faHouse} />
        </StyledLinkHome>
      </div>
    </Cabecalho>
  );
};
