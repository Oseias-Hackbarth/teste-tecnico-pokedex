import styled from "styled-components";
import { fadeIn } from "../Animations";

export const ContainerDetails = styled.div`
  background: ${(props) => props.theme.backgroundCard};
  color: ${(props) => props.theme.colorName};
  max-width: 800px;
  margin: 10px auto;
  border-radius: 15px;
  padding: 0px 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  @media (max-width: 830px) {
    width: 600px;
    padding: 20px;
  }
  @media (max-width: 600px) {
    width: 450px;
    padding: 20px;
  }
  @media (max-width: 500px) {
    width: 350px;
    padding: 5px;
    margin: 0;
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 30px;
  flex-wrap: wrap;

  @media (max-width: 850px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const ImgPokemons = styled.img`
  min-width: 200px;
  max-width: 350px;
  height: auto;
  padding-right: 30px;

  @media (max-width: 600px) {
    min-width: 150px;
    max-width: 250px;
  }
`;

export const SectionInfo = styled.div`
  flex: 1;
`;

export const NamePokemons = styled.h1`
  text-transform: capitalize;
  margin-bottom: 10px;
`;

export const TypeBadge = styled.span`
  display: inline-block;
  padding: 5px 10px;
  margin-right: 5px;
  border-radius: 20px;
  color: white;
  text-transform: capitalize;
  background-color: ${(props) => props.$cor || 'gray'};
`;


export const Section = styled.div`
  margin-bottom: 20px;
`;

export const TitleSection = styled.h2`
  padding-bottom: 5px;
  margin-bottom: 15px;
`;

export const MoveList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 10px;
  list-style: none;
  padding: 0;
`;

export const ItemMove = styled.li`
  padding: 8px;
  border-radius: 5px;
  text-align: center;
  text-transform: capitalize;
  animation: ${fadeIn} 0.4s ease both;
`;

export const ItemSkill = styled.div`
  margin-bottom: 15px;
`;

export const NameSkill = styled.h3`
  text-transform: capitalize;
  margin-bottom: 5px;
`;

export const DescriptionSkill = styled.p`
  margin-top: 10px;
`;

export const StatsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, auto);
  gap: 10px;
  margin-top: 15px;
  justify-content: center;

  @media (max-width: 650px) {
    grid-template-columns: repeat(2, auto);
    
  }
  @media (max-width: 455px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const StatBlock = styled.div`
  min-width: 100px;
  max-width: 120px;
  padding: 10px;
  border-radius: 12px;
  text-align: center;
  color: white;
  font-weight: bold;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  background-color: ${(props) => props.theme.backgroundBottonCard};
  word-wrap: break-word;
`;

export const StatName = styled.span`
  display: block;
  font-size: 14px;
  text-transform: capitalize;
  margin-bottom: 5px;
`;

export const StatValue = styled.span`
  display: block;
  font-size: 18px;
`;

export const InfoDetails = styled.div`
  padding: 20px;
`