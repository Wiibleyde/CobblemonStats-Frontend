import Link from 'next/link';
import { Status } from './sub/Status';

export function Welcome() {
    return (
        <div className="flex flex-col items-center">
            <h1 className="text-4xl font-bold text-white mb-8">Site de statistiques de Cobblemon</h1>
            <div className="flex flex-col items-center w-full lg:w-1/2">
                <Link
                    href="/leaderboards"
                    className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-lg shadow-lg"
                >
                    Voir les classements
                </Link>
            </div>
            <Status />
        </div>
    );
}
