'use client';
import useSWR from 'swr';
import { fetcher } from '@/utils';
import { LeaderboardTable } from './sub/LeaderboardTable';
import { useState } from 'react';

enum Category {
    Minecraft,
    Cobblemon,
    Other,
}

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
    const [visibleCategories, setVisibleCategories] = useState<Category[]>([]);

    const {
        data: pokemon,
        error: pokemonError,
        isLoading: pokemonLoading,
    } = useSWR(visibleCategories.includes(Category.Cobblemon) ? '/api/leaderboard/pokemon_caught' : null, fetcher);
    const {
        data: pokedex,
        error: pokedexError,
        isLoading: pokedexLoading,
    } = useSWR(visibleCategories.includes(Category.Cobblemon) ? '/api/leaderboard/pokedex_caught' : null, fetcher);
    const {
        data: playtime,
        error: playtimeError,
        isLoading: playtimeLoading,
    } = useSWR(visibleCategories.includes(Category.Other) ? '/api/leaderboard/playtime' : null, fetcher);
    const {
        data: deaths,
        error: deathsError,
        isLoading: deathsLoading,
    } = useSWR(visibleCategories.includes(Category.Minecraft) ? '/api/leaderboard/deaths' : null, fetcher);
    const {
        data: sneakTime,
        error: sneakTimeError,
        isLoading: sneakTimeLoading,
    } = useSWR(visibleCategories.includes(Category.Minecraft) ? '/api/leaderboard/sneak_time' : null, fetcher);
    const {
        data: distanceTraveled,
        error: distanceTraveledError,
        isLoading: distanceTraveledLoading,
    } = useSWR(visibleCategories.includes(Category.Minecraft) ? '/api/leaderboard/distance_traveled' : null, fetcher);
    const {
        data: lootballOpenned,
        error: lootballOpennedError,
        isLoading: lootballOpennedLoading,
    } = useSWR(visibleCategories.includes(Category.Cobblemon) ? '/api/leaderboard/lootball_openned' : null, fetcher);
    const {
        data: lootrChestsOpenned,
        error: lootrChestsOpennedError,
        isLoading: lootrChestsOpennedLoading,
    } = useSWR(
        visibleCategories.includes(Category.Cobblemon) ? '/api/leaderboard/lootr_chests_openned' : null,
        fetcher
    );

    const pokemonRowMapper = (item: PokemonCaught) => {
        return {
            name: item.user,
            score: item.pokemon_caught, // Ensure the score is mapped correctly
        };
    };

    const pokedexRowMapper = (item: PokedexCaught) => {
        return {
            name: item.user,
            score: item.pokedex_caught, // Ensure the score is mapped correctly
        };
    };

    const playtimeRowMapper = (item: Playtime) => {
        return {
            name: item.user,
            score: item.playtime, // Ensure the score is mapped correctly
        };
    };

    const deathsRowMapper = (item: Death) => {
        return {
            name: item.user,
            score: item.deaths, // Ensure the score is mapped correctly
        };
    };

    const sneakTimeRowMapper = (item: SneakTime) => {
        return {
            name: item.user,
            score: item.sneak_time, // Ensure the score is mapped correctly
        };
    };

    const distanceTraveledRowMapper = (item: DistanceTraveled) => {
        return {
            name: item.user,
            score: item.distance_traveled, // Ensure the score is mapped correctly
        };
    };

    const lootballOpennedRowMapper = (item: LootballOpenned) => {
        return {
            name: item.user,
            score: item.lootball_openned, // Ensure the score is mapped correctly
        };
    };

    const lootrChestsOpennedRowMapper = (item: LootrChestsOpenned) => {
        return {
            name: item.user,
            score: item.lootr_chests_openned, // Ensure the score is mapped correctly
        };
    };

    return (
        <div className="flex flex-col items-center m-4 lg:m-16">
            <h1 className="text-4xl font-bold text-white mb-8">Classements</h1>
            <div className="flex space-x-4 mb-8 font-semibold">
                <button
                    className={`px-4 py-2 rounded ${visibleCategories.includes(Category.Cobblemon) ? 'bg-red-500 text-white' : 'bg-gray-200 text-black'} hover:bg-red-600 hover:text-white transition-colors duration-200`}
                    onClick={() =>
                        setVisibleCategories(
                            visibleCategories.includes(Category.Cobblemon)
                                ? visibleCategories.filter((category) => category !== Category.Cobblemon)
                                : [...visibleCategories, Category.Cobblemon]
                        )
                    }
                >
                    Cobblemon
                </button>
                <button
                    className={`px-4 py-2 rounded ${visibleCategories.includes(Category.Minecraft) ? 'bg-red-500 text-white' : 'bg-gray-200 text-black'} hover:bg-red-600 hover:text-white transition-colors duration-200`}
                    onClick={() =>
                        setVisibleCategories(
                            visibleCategories.includes(Category.Minecraft)
                                ? visibleCategories.filter((category) => category !== Category.Minecraft)
                                : [...visibleCategories, Category.Minecraft]
                        )
                    }
                >
                    Minecraft
                </button>
                <button
                    className={`px-4 py-2 rounded ${visibleCategories.includes(Category.Other) ? 'bg-red-500 text-white' : 'bg-gray-200 text-black'} hover:bg-red-600 hover:text-white transition-colors duration-200`}
                    onClick={() =>
                        setVisibleCategories(
                            visibleCategories.includes(Category.Other)
                                ? visibleCategories.filter((category) => category !== Category.Other)
                                : [...visibleCategories, Category.Other]
                        )
                    }
                >
                    Autres
                </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:w-5/5 lg:grid-cols-4 gap-8 w-full">
                {visibleCategories.includes(Category.Cobblemon) && (
                    <>
                        <div className="w-full">
                            <LeaderboardTable
                                title="Pokémon attrapés"
                                loading={pokemonLoading}
                                error={pokemonError}
                                elements={pokemon}
                                rowMapper={pokemonRowMapper}
                            />
                        </div>
                        <div className="w-full">
                            <LeaderboardTable
                                title="Pokémon dans le pokédex"
                                loading={pokedexLoading}
                                error={pokedexError}
                                elements={pokedex}
                                rowMapper={pokedexRowMapper}
                            />
                        </div>
                        <div className="w-full">
                            <LeaderboardTable
                                title="Lootballs ouvertes"
                                loading={lootballOpennedLoading}
                                error={lootballOpennedError}
                                elements={lootballOpenned}
                                rowMapper={lootballOpennedRowMapper}
                            />
                        </div>
                        <div className="w-full">
                            <LeaderboardTable
                                title="Coffres Lootr ouverts"
                                loading={lootrChestsOpennedLoading}
                                error={lootrChestsOpennedError}
                                elements={lootrChestsOpenned}
                                rowMapper={lootrChestsOpennedRowMapper}
                            />
                        </div>
                    </>
                )}
                {visibleCategories.includes(Category.Minecraft) && (
                    <>
                        <div className="w-full">
                            <LeaderboardTable
                                title="Morts"
                                loading={deathsLoading}
                                error={deathsError}
                                elements={deaths}
                                rowMapper={deathsRowMapper}
                            />
                        </div>
                        <div className="w-full">
                            <LeaderboardTable
                                title="Temps en sneak (en minutes)"
                                loading={sneakTimeLoading}
                                error={sneakTimeError}
                                elements={sneakTime}
                                rowMapper={sneakTimeRowMapper}
                            />
                        </div>
                        <div className="w-full">
                            <LeaderboardTable
                                title="Distance parcourue (en mètres)"
                                loading={distanceTraveledLoading}
                                error={distanceTraveledError}
                                elements={distanceTraveled}
                                rowMapper={distanceTraveledRowMapper}
                            />
                        </div>
                    </>
                )}
                {visibleCategories.includes(Category.Other) && (
                    <>
                        <div className="w-full">
                            <LeaderboardTable
                                title="Temps de jeu (en minutes)"
                                loading={playtimeLoading}
                                error={playtimeError}
                                elements={playtime}
                                rowMapper={playtimeRowMapper}
                            />
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}
