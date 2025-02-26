"use client";
import { fetcher } from "@/utils";
import useSWR from "swr";

interface ProfileProps {
    name: string;
}

interface PlayerMinecraftStats {
    stats: { // stats
        "minecraft:mined": { // minecraft:mined
            [block: string]: number; // All blocks
        };
        "minecraft:custom": { // minecraft:custom
            [stat: string]: number; // All stats
        };
    }
}

export function Profile({ name }: ProfileProps) {
    const { data: minecraftData, error: minecraftError, isLoading: minecraftIsLoading } = useSWR<PlayerMinecraftStats>(`/api/profile/${name}`, fetcher);

    return (
        <div className="flex flex-col items-center">
            <h1 className="text-4xl font-bold text-white mb-8">Profile de {name}</h1>
            <div className="flex flex-col items-center w-full lg:w-1/2">
                <h2 className="text-2xl font-bold text-white mb-4">Minecraft</h2>
                {minecraftIsLoading && <p className="text-white">Chargement...</p>}
                {minecraftError && <p className="text-red-500">Erreur: {minecraftError.toString()}</p>}
                {minecraftData && minecraftData.stats && (
                    <div className="flex flex-col items-center w-full">
                        <h3 className="text-xl font-bold text-white mb-4">Statistiques</h3>
                        <div className="grid grid-cols-2 gap-4 w-full">
                            <div className="flex flex-col items-center bg-gray-800 p-4 rounded-lg">
                                <h4 className="text-lg font-bold text-white mb-4">Mined</h4>
                                <ul className="text-white">
                                    <h3 className="text-white">Total : {Object.values(minecraftData.stats["minecraft:mined"]).reduce((acc, val) => acc + val, 0)}</h3>
                                    {/* {Object.entries(minecraftData.stats["minecraft:mined"]).map(([block, count]) => (
                                        <li key={block} className="text-white">{block}: {count}</li>
                                    ))} */}
                                </ul>
                            </div>
                            <div className="flex flex-col items-center bg-gray-800 p-4 rounded-lg">
                                <h4 className="text-lg font-bold text-white mb-4">Custom</h4>
                                <ul>
                                    {Object.entries(minecraftData.stats["minecraft:custom"]).map(([stat, value]) => (
                                        <li key={stat} className="text-white">{stat}: {value}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}