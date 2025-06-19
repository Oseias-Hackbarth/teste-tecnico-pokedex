import { Card, ImgPokemon, NamePokemon } from "../../Styles/components/CardStyles";

export const CardPokemon = ({ pokemon }) => {
  return (
    <Card to={`/pokemon/${pokemon.id}`}>
      <ImgPokemon 
        src={pokemon.sprites.other['official-artwork'].front_default || pokemon.sprites.front_default} 
        alt={pokemon.name} 
      />
      <NamePokemon>{pokemon.name}</NamePokemon>
    </Card>
  );
};
