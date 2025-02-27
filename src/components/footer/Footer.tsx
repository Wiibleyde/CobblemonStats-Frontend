"use client";
import Image from "next/image";
import Link from "next/link";

export function Footer() {
    return (
        <footer className='bg-gray-800 text-white py-10 px-6 border-t-2 border-gray-800 mt-auto'>
            <div className='max-w-7xl mx-auto'>
                <div className='flex flex-col md:flex-row justify-between items-center'>
                    <ul className='flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6 text-center md:text-left'>
                        <li><Link href='/' className="hover:underline">Accueil</Link></li>
                        <li><Link href='/leaderboards' className="hover:underline">Classements</Link></li>
                    </ul>
                    <Link href="/" className="font-black text-2xl">
                        <Image src="/logo-cobblemon.png" width={50} height={50} alt="Cobblemon" className="h-8 w-8 inline-block mr-2" /><span className="text-red-500">Cobblemon</span> <span className="text-white">Stats</span>
                    </Link>
                </div>
                <div className='flex justify-center items-center mt-8'>
                    <ul className='flex space-x-6'>
                        <p>© 2025 Wiibleyde / JusteKal</p>
                    </ul>
                </div>
            </div>
        </footer>
    )
}