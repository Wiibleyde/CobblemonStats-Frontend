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

export interface Playtime {
    user: string;
    playtime: number;
}

export interface Death {
    user: string;
    deaths: number;
}

export interface SneakTime {
    user: string;
    sneak_time: number;
}

export interface DistanceTraveled {
    user: string;
    distance_traveled: number;
}

export interface LootballOpenned {
    user: string;
    lootball_openned: number;
}

export interface LootrChestsOpenned {
    user: string;
    lootr_chests_openned: number;
}

export function Leaderboard() {
    const { data: pokemon, error: pokemonError, isLoading: pokemonLoading } = useSWR("/api/leaderboard/pokemon_caught", fetcher)
    const { data: pokedex, error: pokedexError, isLoading: pokedexLoading } = useSWR("/api/leaderboard/pokedex_caught", fetcher)
    const { data: playtime, error: playtimeError, isLoading: playtimeLoading } = useSWR("/api/leaderboard/playtime", fetcher)
    const { data: deaths, error: deathsError, isLoading: deathsLoading } = useSWR("/api/leaderboard/deaths", fetcher)
    const { data: sneakTime, error: sneakTimeError, isLoading: sneakTimeLoading } = useSWR("/api/leaderboard/sneak_time", fetcher)
    const { data: distanceTraveled, error: distanceTraveledError, isLoading: distanceTraveledLoading } = useSWR("/api/leaderboard/distance_traveled", fetcher)
    const { data: lootballOpenned, error: lootballOpennedError, isLoading: lootballOpennedLoading } = useSWR("/api/leaderboard/lootball_openned", fetcher)
    const { data: lootrChestsOpenned, error: lootrChestsOpennedError, isLoading: lootrChestsOpennedLoading } = useSWR("/api/leaderboard/lootr_chests_openned", fetcher)

    const pokemonRowMapper = (item: PokemonCaught) => {
        return {
            name: item.user,
            score: item.pokemon_caught // Ensure the score is mapped correctly
        };
    };

    const pokedexRowMapper = (item: PokedexCaught) => {
        return {
            name: item.user,
            score: item.pokedex_caught // Ensure the score is mapped correctly
        };
    };

    const playtimeRowMapper = (item: Playtime) => {
        return {
            name: item.user,
            score: item.playtime // Ensure the score is mapped correctly
        };
    };

    const deathsRowMapper = (item: Death) => {
        return {
            name: item.user,
            score: item.deaths // Ensure the score is mapped correctly
        };
    };

    const sneakTimeRowMapper = (item: SneakTime) => {
        return {
            name: item.user,
            score: item.sneak_time // Ensure the score is mapped correctly
        };
    }

    const distanceTraveledRowMapper = (item: DistanceTraveled) => {
        return {
            name: item.user,
            score: item.distance_traveled // Ensure the score is mapped correctly
        };
    }

    const lootballOpennedRowMapper = (item: LootballOpenned) => {
        return {
            name: item.user,
            score: item.lootball_openned // Ensure the score is mapped correctly
        };
    }

    const lootrChestsOpennedRowMapper = (item: LootrChestsOpenned) => {
        return {
            name: item.user,
            score: item.lootr_chests_openned // Ensure the score is mapped correctly
        };
    }

    return (
        <div className="flex flex-col items-center m-4 lg:m-16">
            <h1 className="text-4xl font-bold text-white mb-8">Classements</h1>
            <div className="flex flex-col lg:flex-row justify-around w-full lg:w-2/3 space-y-8 lg:space-y-0 lg:space-x-8">
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
                <LeaderboardTable
                    title="Temps de jeu"
                    loading={playtimeLoading}
                    error={playtimeError}
                    elements={playtime}
                    rowMapper={playtimeRowMapper}
                />
                <LeaderboardTable
                    title="Morts"
                    loading={deathsLoading}
                    error={deathsError}
                    elements={deaths}
                    rowMapper={deathsRowMapper}
                />
                <LeaderboardTable
                    title="Temps en sneak (en minutes)"
                    loading={sneakTimeLoading}
                    error={sneakTimeError}
                    elements={sneakTime}
                    rowMapper={sneakTimeRowMapper}
                />
                <LeaderboardTable
                    title="Distance parcourue (en mètres)"
                    loading={distanceTraveledLoading}
                    error={distanceTraveledError}
                    elements={distanceTraveled}
                    rowMapper={distanceTraveledRowMapper}
                />
                <LeaderboardTable
                    title="Lootballs ouvertes"
                    loading={lootballOpennedLoading}
                    error={lootballOpennedError}
                    elements={lootballOpenned}
                    rowMapper={lootballOpennedRowMapper}
                />
                <LeaderboardTable
                    title="Coffres Lootr ouverts"
                    loading={lootrChestsOpennedLoading}
                    error={lootrChestsOpennedError}
                    elements={lootrChestsOpenned}
                    rowMapper={lootrChestsOpennedRowMapper}
                />
            </div>
        </div>
    )
}