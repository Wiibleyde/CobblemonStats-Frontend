"use client"
import useSWR from "swr"
import { fetcher } from "@/utils";
import { LeaderboardTable } from "./sub/LeaderboardTable";

export interface PokemonCaught {
    user: string;
    pokemon_caught: number;
}

export interface PokedexCaught {
    user: string;
    pokedex_caught: number;
}

export function Leaderboard() {
    const { data: pokemon, error: pokemonError, isLoading: pokemonLoading } = useSWR("/api/leaderboard/pokemon_caught", fetcher)
    const { data: pokedex, error: pokedexError, isLoading: pokedexLoading } = useSWR("/api/leaderboard/pokedex_caught", fetcher)

    const pokemonRowMapper = (item: PokemonCaught) => ({
        name: item.user,
        score: item.pokemon_caught
    });

    const pokedexRowMapper = (item: PokedexCaught) => ({
        name: item.user,
        score: item.pokedex_caught
    });

    return (
        <div className="flex flex-col items-center m-4 lg:m-16">
            <h1 className="text-4xl font-bold text-white mb-8">Classements</h1>
            <div className="flex flex-col lg:flex-row justify-around w-full lg:w-1/2 space-y-8 lg:space-y-0 lg:space-x-8">
                <LeaderboardTable
                    title="Pokémon attrapés"
                    loading={pokemonLoading}
                    error={pokemonError}
                    elements={pokemon}
                    rowMapper={pokemonRowMapper}
                />
                <LeaderboardTable
                    title="Pokémon dans le pokédex"
                    loading={pokedexLoading}
                    error={pokedexError}
                    elements={pokedex}
                    rowMapper={pokedexRowMapper}
                />
            </div>
        </div>
    )
}