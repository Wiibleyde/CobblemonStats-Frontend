"use client";
import { fetcher } from "@/utils";
import useSWR from "swr";

interface ProfileProps {
    name: string;
}

interface PlayerMinecraftStats {
    stats: { // stats
        "minecraft:used": { // minecraft:used
            [item: string]: number; // All items
        };
        "minecraft:mined": { // minecraft:mined
            [block: string]: number; // All blocks
        };
        "minecraft:crafted": { // minecraft:crafted
            [item: string]: number; // All items
        };
        "minecraft:picked_up": { // minecraft:picked_up
            [item: string]: number; // All items
        };
        "minecraft:dropped": { // minecraft:dropped
            [item: string]: number; // All items
        };
        "minecraft:killed": { // minecraft:killed
            [entity: string]: number; // All entities
        };
        "minecraft:custom": { // minecraft:custom
            [stat: string]: number; // All stats
        };
    }
}

export function Profile({ name }: ProfileProps) {
    const { data: minecraftData, error: minecraftError, isLoading: minecraftIsLoading } = useSWR<PlayerMinecraftStats>(`/api/profile/${name}`, fetcher);

    const convertName = (name: string) => {
        name = name.replace(/^(minecraft|lootr|cobblemon|hearth_and_home|megamons|pokeblocks|amendments|biomeswevegone|another_furniture|sophisticatedstorage|sophisticatedbackpacks|naturescompass|cloudboots|cobblefoods|academy|wherearemytms|kubejs|justhammers|cobblenav|cobblemizer|convenientdecor|cobbreeding|waystones|numismatic-overhaul|myths_and_legends):/, "");
        name = name.replace(/_/g, " ");
        name = name.replace(/\b\w/g, l => l.toUpperCase());
        return name;
    }

    return (
        <div className="flex flex-col items-center min-h-screen py-8">
            <h1 className="text-4xl font-bold text-white mb-8">Profile de {name}</h1>
            <div className="flex flex-col items-center w-full lg:w-2/3">
                {minecraftIsLoading && <p className="text-white">Chargement...</p>}
                {minecraftError && <p className="text-red-500">Erreur: {minecraftError.toString()}</p>}
                {minecraftData && minecraftData.stats && (
                    <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
                        <div className="flex flex-col items-center bg-gray-700 p-4 rounded-lg shadow-md">
                            <h4 className="text-lg font-bold text-white mb-4">Custom</h4>
                            <ul className="text-white list-disc list-inside">
                                {Object.entries(minecraftData.stats["minecraft:custom"]).map(([stat, value]) => (
                                    <li key={stat} className="text-white">{convertName(stat)}: {value}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="flex flex-col items-center bg-gray-700 p-4 rounded-lg shadow-md">
                            <h4 className="text-lg font-bold text-white mb-4">Used</h4>
                            <ul className="text-white list-disc list-inside">
                                <h3 className="text-white font-semibold">Total : {Object.values(minecraftData.stats["minecraft:used"]).reduce((acc, val) => acc + val, 0)}</h3>
                                {Object.entries(minecraftData.stats["minecraft:used"]).map(([item, count]) => (
                                    <li key={item} className="text-white">{convertName(item)}: {count}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="flex flex-col items-center bg-gray-700 p-4 rounded-lg shadow-md">
                            <h4 className="text-lg font-bold text-white mb-4">Mined</h4>
                            <ul className="text-white list-disc list-inside">
                                <h3 className="text-white font-semibold">Total : {Object.values(minecraftData.stats["minecraft:mined"]).reduce((acc, val) => acc + val, 0)}</h3>
                                {Object.entries(minecraftData.stats["minecraft:mined"]).map(([block, count]) => (
                                    <li key={block} className="text-white">{convertName(block)}: {count}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="flex flex-col items-center bg-gray-700 p-4 rounded-lg shadow-md">
                            <h4 className="text-lg font-bold text-white mb-4">Crafted</h4>
                            <ul className="text-white list-disc list-inside">
                                <h3 className="text-white font-semibold">Total : {Object.values(minecraftData.stats["minecraft:crafted"]).reduce((acc, val) => acc + val, 0)}</h3>
                                {Object.entries(minecraftData.stats["minecraft:crafted"]).map(([item, count]) => (
                                    <li key={item} className="text-white">{convertName(item)}: {count}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="flex flex-col items-center bg-gray-700 p-4 rounded-lg shadow-md">
                            <h4 className="text-lg font-bold text-white mb-4">Picked up</h4>
                            <ul className="text-white list-disc list-inside">
                                <h3 className="text-white font-semibold">Total : {Object.values(minecraftData.stats["minecraft:picked_up"]).reduce((acc, val) => acc + val, 0)}</h3>
                                {Object.entries(minecraftData.stats["minecraft:picked_up"]).map(([item, count]) => (
                                    <li key={item} className="text-white">{convertName(item)}: {count}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="flex flex-col items-center bg-gray-700 p-4 rounded-lg shadow-md">
                            <h4 className="text-lg font-bold text-white mb-4">Dropped</h4>
                            <ul className="text-white list-disc list-inside">
                                <h3 className="text-white font-semibold">Total : {Object.values(minecraftData.stats["minecraft:dropped"]).reduce((acc, val) => acc + val, 0)}</h3>
                                {Object.entries(minecraftData.stats["minecraft:dropped"]).map(([item, count]) => (
                                    <li key={item} className="text-white">{convertName(item)}: {count}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="flex flex-col items-center bg-gray-700 p-4 rounded-lg shadow-md">
                            <h4 className="text-lg font-bold text-white mb-4">Killed</h4>
                            <ul className="text-white list-disc list-inside">
                                <h3 className="text-white font-semibold">Total : {Object.values(minecraftData.stats["minecraft:killed"]).reduce((acc, val) => acc + val, 0)}</h3>
                                {Object.entries(minecraftData.stats["minecraft:killed"]).map(([entity, count]) => (
                                    <li key={entity} className="text-white">{convertName(entity)}: {count}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}