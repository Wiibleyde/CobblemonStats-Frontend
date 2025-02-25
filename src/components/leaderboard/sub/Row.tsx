export interface RowProps {
    name: string;
    score: number;
    isLast: boolean;
}

export function Row({ name, score, isLast }: RowProps) {
    return (
        <tr className={`border-b ${isLast ? "" : "border-gray-700"}`}>
            <td className="px-4 py-2">{name}</td>
            <td className="px-4 py-2">{score}</td>
        </tr>
    );
}