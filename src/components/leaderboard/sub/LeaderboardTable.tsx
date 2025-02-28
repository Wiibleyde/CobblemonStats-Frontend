import { RowProps } from './Row';
import { Table } from './Table';

interface LeaderboardTableProps<T> {
    title: string;
    loading: boolean;
    error: boolean;
    elements: T[];
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    rowMapper: (element: T) => RowProps | any;
}

export function LeaderboardTable<T>({ title, loading, error, elements, rowMapper }: LeaderboardTableProps<T>) {
    return (
        <div className="flex flex-col items-center w-full px-3">
            <h2 className="text-2xl text-center text-white font-semibold mb-4">{title}</h2>
            {loading ? (
                <p className="text-white">Chargement...</p>
            ) : error ? (
                <p className="text-white">Erreur dans le chargement des données</p>
            ) : (
                <Table name={title} elements={elements} rowMapper={rowMapper} />
            )}
        </div>
    );
}
