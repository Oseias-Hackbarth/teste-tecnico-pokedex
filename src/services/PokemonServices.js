export const getPokemonList = async (url) => {
    try {
        const response = await fetch(url);
        const data = await response.json();

        const detailsPokemon = await Promise.all(
            data.results.map(async (pokemon) => {
                const resp = await fetch(pokemon.url);
                return await resp.json();
            })
        );

        return { next: data.next, pokemons: detailsPokemon };
    } catch (error) {
        console.error("Error searching for pokemons:", error);
        return { next: null, pokemons: [] };
    }
};

export const getPokemonTypes = async () => {
    try {
        const response = await fetch("https://pokeapi.co/api/v2/type");
        const data = await response.json();

        // Filtra e remove "unknown" e "shadow" e "stellar"
        const filteredTypes = data.results.filter(
            (type) => type.name !== "unknown" && type.name !== "shadow" && type.name !== "stellar"
        );

        return filteredTypes;
    } catch (error) {
        console.error("Error fetching types:", error);
        return [];
    }
};


export const getPokemonsByType = async (type, start, limit) => {
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/type/${type}`);
        const data = await response.json();

        const pokemonsList = data.pokemon
            .slice(start, start + limit)
            .map((p) => p.pokemon);

        const detailed = await Promise.all(
            pokemonsList.map(async (pokemon) => {
                const resp = await fetch(pokemon.url);
                return await resp.json();
            })
        );

        return detailed;
    } catch (error) {
        console.error(`Error searching for Pokémon of type ${type}:`, error);
        return [];
    }
};
