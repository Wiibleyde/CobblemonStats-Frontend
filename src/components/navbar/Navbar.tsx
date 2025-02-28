import Image from 'next/image';
import Link from 'next/link';

export function Navbar() {
    return (
        <div className="fixed top-0 left-0 w-full bg-gray-800 p-4 flex justify-between items-center">
            <Link href="/" className="font-black text-2xl pokemonFont">
                <Image
                    src="/logo-cobblemon.png"
                    width={50}
                    height={50}
                    alt="Cobblemon"
                    className="h-8 w-8 inline-block mr-2"
                />
                <span className="text-red-500">Cobblemon</span> <span className="text-white">Stats</span>
            </Link>
            <div className="flex space-x-4 text-white">
                <Link href="/leaderboards" className="text-white hover:underline">
                    Classements
                </Link>
            </div>
        </div>
    );
}
