import { RowProps } from "./Row";
import { Table } from "./Table";

interface LeaderboardTableProps<T> {
    title: string;
    loading: boolean;
    error: boolean;
    elements: T[];
    rowMapper: (element: T) => RowProps;
}

export function LeaderboardTable<T>({ title, loading, error, elements, rowMapper }: LeaderboardTableProps<T>) {
    return (
        <div className="flex flex-col items-center w-full lg:w-1/2 px-4">
            <h2 className="text-2xl text-white font-semibold mb-4">{title}</h2>
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
