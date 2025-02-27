"use client"
import { ServerStatus } from "@/app/api/status/route";
import { fetcher } from "@/utils";
import Link from "next/link";
import useSWR from "swr";

export function Status() {
    const { data: serverData, error: serverError, isLoading: serverIsLoading } = useSWR<ServerStatus>(`/api/status`, fetcher);
    return (
        <div className="flex flex-col items-center w-full lg:w-1/2 mt-32">
            <h1 className="text-4xl font-bold text-white mb-8">Status du serveur</h1>
            {serverIsLoading && <p className="text-yellow-500">Loading...</p>}
            {serverError && <p className="text-red-500">Error: {serverError.message}</p>}
            {serverData && (
                <>
                    <div className="flex flex-col items-center bg-gray-800 text-white p-4 rounded-lg shadow-lg mb-4">
                        <div className="flex flex-row items-center mb-2">
                            <span className={`h-3 w-3 rounded-full ${serverData.online ? "bg-green-500" : "bg-red-500"}`}></span>
                            <span className="ml-2 text-lg font-semibold">
                                {serverData.online ? "En ligne" : "Hors ligne"}
                            </span>
                        </div>
                        <div className="flex flex-row items-center mb-2">
                            <span className="text-lg">Joueurs: {serverData.players.now}/{serverData.players.max}</span>
                        </div>
                        <div className="w-full">
                            <table className="table-auto w-full text-sm bg-gray-700 rounded-lg">
                                <thead>
                                    <tr>
                                        <th className="px-4 py-2 text-left text-lg">Liste de joueurs :</th>
                                    </tr>
                                </thead>
                                <tbody className="text-center">
                                    {serverData.players.sample.map((player, i) => (
                                        <tr key={i} className="border-t border-gray-600">
                                            <td className="px-4 py-2">
                                                <Link href={`/profile/${player.name}`}>
                                                    {player.name}
                                                </Link>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}