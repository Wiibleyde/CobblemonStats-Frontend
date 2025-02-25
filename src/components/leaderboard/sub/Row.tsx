import { redirect } from "next/navigation";

export interface RowProps {
    name: string;
    score: number;
    isLast?: boolean;
}

export function Row({ name, score, isLast }: RowProps) {
    const handleClick = () => {
        console.log(`Clicked on ${name}`);
        return redirect(`/profile?user=${name}`);
    }

    return (
        <tr onClick={handleClick} className={`border-t border-gray-700 hover:bg-gray-700 cursor-pointer ${isLast ? 'rounded-bl-lg rounded-br-lg' : ''}`}>
            <td className="px-4 py-2">{name}</td>
            <td className="px-4 py-2">{score}</td>
        </tr>
    );
}