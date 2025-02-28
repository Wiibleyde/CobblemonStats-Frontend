import { Row, type RowProps } from './Row';

interface TableProps<T> {
    name: string;
    elements: T[];
    rowMapper: (element: T) => RowProps;
}

export function Table<T>({ elements, rowMapper }: TableProps<T>) {
    const convertedElements = elements.map(rowMapper);

    return (
        <table className="min-w-full bg-gray-800/90 text-white rounded-lg shadow-lg overflow-x-auto">
            <thead>
                <tr>
                    <th className="px-4 py-2 bg-gray-700/80 rounded-tl-lg">Pseudo</th>
                    <th className="px-4 py-2 bg-gray-700/80 rounded-tr-lg">Score</th>
                </tr>
            </thead>
            <tbody>
                {convertedElements.map((element, index) => (
                    <Row key={index} {...element} isLast={index === convertedElements.length - 1} />
                ))}
            </tbody>
        </table>
    );
}
