import React, { useState, useEffect } from "react";
import { GridPokemon, Main, Bar, DropdownContainer, DropdownContent, Poke } from "../../Styles/components/MainStyles";
import { CardPokemon } from "../../components/Card/Card";
import { ButtonLoadMore } from "../../components/Buttons/ButtonLoadMore";
import { DropdownToggle } from "../../components/Buttons/ButtonDropdownToggle";
import { ClearFiltersButton } from "../../components/Buttons/ButtonClearFilters";
import { DropdownOptions } from "../../components/SelectOptionsPokemon/SelectOptionsPokemon"
import { HeaderPage } from "../../components/HeaderPage/HeaderPage";
import { ThemeTogglerButton } from "../../components/ThemeTogglerButton/ThemeTogglerButton";

export const Home = () => {
    const [listPokemon, setListPokemon] = useState([]);
    const [loading, setLoading] = useState(true);
    const [nextUrl, setNextUrl] = useState(null);
    const [selectedTypes, setSelectedTypes] = useState([]);
    const [pokemonTypes, setPokemonTypes] = useState([]);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    useEffect(() => {
        const fetchTypes = async () => {
            try {
                const response = await fetch("https://pokeapi.co/api/v2/type");
                const data = await response.json();
                const filteredTypes = data.results.filter(
                    (type) => type.name !== "shadow" && type.name !== "unknown"
                );
                setPokemonTypes(filteredTypes);
            } catch (error) {
                console.error("Error fetching types:", error);
            }
        };

        fetchTypes();
    }, []);

    const SearchPokemon = async (url) => {
        setLoading(true);
        try {
            const response = await fetch(url);
            const data = await response.json();

            setNextUrl(data.next);

            const detailsPokemon = await Promise.all(
                data.results.map(async (pokemon) => {
                    const resp = await fetch(pokemon.url);
                    return await resp.json();
                })
            );

            setListPokemon((prev) => {
                const existingIds = new Set(prev.map((p) => p.id));
                const newPokemons = detailsPokemon.filter((p) => !existingIds.has(p.id));
                return [...prev, ...newPokemons];
            });
        } catch (error) {
            console.error("Error fetching Pokémon:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        SearchPokemon("https://pokeapi.co/api/v2/pokemon?limit=10");
    }, []);

    const LoadMore = () => {
        if (nextUrl) {
            SearchPokemon(nextUrl);
        }
    };

    const handleTypeChange = (e) => {
        const value = e.target.value;
        setSelectedTypes((prev) =>
            prev.includes(value)
                ? prev.filter((type) => type !== value)
                : [...prev, value]
        );
    };

    const filteredPokemon = listPokemon.filter((pokemon) => {
        if (selectedTypes.length === 0) return true;
        return pokemon.types.some((t) => selectedTypes.includes(t.type.name));
    });

    return (
        <Main>
            
            <HeaderPage />

            <Poke>

                <GridPokemon>
                    {filteredPokemon.map((pokemon) => (
                        <CardPokemon key={pokemon.id} pokemon={pokemon} />
                    ))}
                </GridPokemon>

                <DropdownContainer>
                <DropdownToggle
                    selectedCount={selectedTypes.length}
                    onClick={() => setIsDropdownOpen((prev) => !prev)}
                />

                {isDropdownOpen && (
                    <DropdownContent>
                        <DropdownOptions
                            pokemonTypes={pokemonTypes}
                            selectedTypes={selectedTypes}
                            handleTypeChange={handleTypeChange}
                        />

                        {selectedTypes.length > 0 && (
                            <ClearFiltersButton onClear={() => setSelectedTypes([])} />
                        )}
                    </DropdownContent>
                )}
            </DropdownContainer>

            </Poke>

            {loading ? (
                <div>Loading...</div>
            ) : (
                nextUrl && (
                    <div style={{ height: '40px' }}>
                        <ButtonLoadMore onClick={LoadMore}>Load more</ButtonLoadMore>
                    </div>
                )
            )}

            <Bar />
            <ThemeTogglerButton />
        </Main>
    );
};
