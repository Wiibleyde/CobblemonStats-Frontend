import Link from "next/link";

export interface RowProps {
    name: string;
    score: number;
    isLast: boolean;
}

export function Row({ name, score, isLast }: RowProps) {
    return (
        <tr className={`border-b ${isLast ? "" : "border-gray-700"}`}>
            <td className="px-4 py-2">
                <Link href={`/profile/${name}`}>
                    {name}
                </Link>
            </td>
            <td className="px-4 py-2">{score}</td>
        </tr>
    );
}