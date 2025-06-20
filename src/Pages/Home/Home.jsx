import React, { useState, useEffect } from "react";
import {
    GridPokemon,
    Main,
    Bar,
    DropdownContainer,
    DropdownContent,
    Poke,
} from "../../Styles/components/MainStyles";
import { CardPokemon } from "../../components/Card/Card";
import { ButtonLoadMore } from "../../components/Buttons/ButtonLoadMore";
import { DropdownToggle } from "../../components/Buttons/ButtonDropdownToggle";
import { ClearFiltersButton } from "../../components/Buttons/ButtonClearFilters";
import { DropdownOptions } from "../../components/SelectOptionsPokemon/SelectOptionsPokemon";
import { HeaderPage } from "../../components/HeaderPage/HeaderPage";
import { ThemeTogglerButton } from "../../components/ThemeTogglerButton/ThemeTogglerButton";
import {
    getPokemonList,
    getPokemonTypes,
    getPokemonsByType,
} from "../../services/PokemonServices";

export const Home = () => {
    const [listPokemon, setListPokemon] = useState([]);
    const [loading, setLoading] = useState(true);
    const [nextUrl, setNextUrl] = useState(null);
    const [selectedTypes, setSelectedTypes] = useState([]);
    const [pokemonTypes, setPokemonTypes] = useState([]);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [loadedCountByType, setLoadedCountByType] = useState({});

    useEffect(() => {
        const fetchTypes = async () => {
            const types = await getPokemonTypes();
            setPokemonTypes(types);
        };
        fetchTypes();
    }, []);

    useEffect(() => {
        SearchPokemon("https://pokeapi.co/api/v2/pokemon?limit=10");
    }, []);

    useEffect(() => {
        setListPokemon([]);
        setLoadedCountByType({});
        if (selectedTypes.length === 0) {
            SearchPokemon("https://pokeapi.co/api/v2/pokemon?limit=10");
        } else {
            fetchPokemonsBySelectedTypes(false);
        }
    }, [selectedTypes]);

    const SearchPokemon = async (url) => {
        setLoading(true);
        const { next, pokemons } = await getPokemonList(url);
        setNextUrl(next);
        setListPokemon((prev) => {
            const existingIds = new Set(prev.map((p) => p.id));
            const newPokemons = pokemons.filter((p) => !existingIds.has(p.id));
            return [...prev, ...newPokemons];
        });
        setLoading(false);
    };

    const fetchPokemonsBySelectedTypes = async (loadMore = false) => {
        setLoading(true);
        const perTypeLimit = 10;
        const newLoadedCountByType = { ...loadedCountByType };
        let allFetchedPokemons = [];

        for (const type of selectedTypes) {
            const alreadyLoaded = loadMore ? (loadedCountByType[type] || 0) : 0;
            const fetched = await getPokemonsByType(type, alreadyLoaded, perTypeLimit);

            newLoadedCountByType[type] = alreadyLoaded + fetched.length;
            allFetchedPokemons.push(...fetched);
        }

        setLoadedCountByType(newLoadedCountByType);

        setListPokemon((prev) => {
            const existingIds = new Set(prev.map((p) => p.id));
            const filteredNew = allFetchedPokemons.filter(
                (p) => !existingIds.has(p.id)
            );
            return loadMore ? [...prev, ...filteredNew] : filteredNew;
        });

        setLoading(false);
    };

    const LoadMore = () => {
        if (loading) return;
        if (selectedTypes.length > 0) {
            fetchPokemonsBySelectedTypes(true);
        } else if (nextUrl) {
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
                                <ClearFiltersButton
                                    onClear={() => {
                                        setSelectedTypes([]);
                                        setListPokemon([]);
                                        setLoadedCountByType({});
                                        SearchPokemon("https://pokeapi.co/api/v2/pokemon?limit=10");
                                    }}
                                />
                            )}
                        </DropdownContent>
                    )}
                </DropdownContainer>
            </Poke>

            {loading ? (
                <div>Loading...</div>
            ) : (
                <div style={{ height: "40px" }}>
                    {(selectedTypes.length > 0 || nextUrl) && (
                        <ButtonLoadMore onClick={LoadMore}>Load more</ButtonLoadMore>
                    )}
                </div>
            )}

            <Bar />
            <ThemeTogglerButton />
        </Main>
    );
};
