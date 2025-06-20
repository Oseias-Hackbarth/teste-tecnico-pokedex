import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Main } from "../../Styles/components/MainStyles";
import { 
    ContainerDetails, 
    Header, 
    ImgPokemons, 
    SectionInfo, 
    NamePokemons, 
    TypeBadge, 
    Section, 
    TitleSection, 
    ItemSkill, 
    NameSkill, 
    DescriptionSkill, 
    MoveList, 
    ItemMove,
    StatsContainer,
    StatBlock,
    StatName,
    StatValue,
    InfoDetails
} from "../../Styles/components/DetailsStyles";
import { StyledLinkHome } from "../../Styles/components/LinkStyles"
import { TypesColors } from "../../Styles/TypeColors";
import { Button } from "../../Styles/components/ButtonStyles";
import { HeaderPage } from "../../components/HeaderPage/HeaderPage";

export const DetailsPokemon = () => {
    const { id } = useParams();
    const [pokemon, setPokemon] = useState(null);
    const [loading, setLoading] = useState(true);
    const [abilities, setAbilities] = useState([]);
    const [visibleMoves, setVisibleMoves] = useState(20);

    useEffect(() => {
        const fetchPokemon = async () => {
            try {
                const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
                const data = await response.json();
                setPokemon(data);

                const abilityDetails = await Promise.all(
                    data.abilities.map(async (ability) => {
                        const res = await fetch(ability.ability.url);
                        return await res.json();
                    })
                );

                setAbilities(abilityDetails);
            } catch (error) {
                console.error('Error fetching Pokémon details:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchPokemon();
    }, [id]);

    if (loading) return <div>Loading...</div>;
    if (!pokemon) return <div>Pokémon not found</div>;

    const handleLoadMoreMoves = () => {
        setVisibleMoves((prev) => prev + 20);
    };

    return (
        <Main>
            <HeaderPage />

            <ContainerDetails>
                <Header>
                    <ImgPokemons
                        src={pokemon.sprites.other['official-artwork'].front_default || pokemon.sprites.front_default}
                        alt={pokemon.name}
                    />

                    <InfoDetails>
                        <SectionInfo>
                            <NamePokemons>{pokemon.name}</NamePokemons>

                            <div>
                                {pokemon.types.map((type) => (
                                    <TypeBadge
                                        key={type.slot}
                                        $cor={TypesColors[type.type.name]}
                                    >
                                        {type.type.name}
                                    </TypeBadge>
                                ))}
                            </div>
                        </SectionInfo>
                        <StatsContainer>
                            {pokemon.stats.map((stat) => (
                                <StatBlock key={stat.stat.name}>
                                    <StatName>{stat.stat.name.replace("-", " ")}</StatName>
                                    <StatValue>{stat.base_stat}</StatValue>
                                </StatBlock>
                            ))}
                        </StatsContainer>
                    </InfoDetails>
                </Header>

                <Section>
                    <TitleSection>Skills</TitleSection>
                    {abilities.map((ability) => (
                        <ItemSkill key={ability.id}>
                            <NameSkill>{ability.name}</NameSkill>
                            <DescriptionSkill>
                                {
                                    ability.effect_entries.find((entry) => entry.language.name === 'en')?.effect ||
                                    'Description not available.'
                                }
                            </DescriptionSkill>
                        </ItemSkill>
                    ))}
                </Section>

                <Section>
                    <TitleSection>Movements</TitleSection>
                    <MoveList>
                        {pokemon.moves.slice(0, visibleMoves).map((move) => (
                            <ItemMove key={move.move.name}>
                                {move.move.name.replace('-', ' ')}
                            </ItemMove>
                        ))}
                    </MoveList>

                    <br />

                    {visibleMoves < pokemon.moves.length && (
                        <Button onClick={handleLoadMoreMoves}>
                            Load more moves
                        </Button>
                    )}

                    {visibleMoves >= pokemon.moves.length && pokemon.moves.length > 20 && (
                        <p>All found moves have been displayed.</p>
                    )}
                </Section>

            </ContainerDetails>

            <StyledLinkHome to='/'>Back to homepage.</StyledLinkHome>
        </Main>
    );
};
