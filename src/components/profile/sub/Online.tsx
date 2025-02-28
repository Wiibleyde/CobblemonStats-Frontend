interface OnlineProps {
    isOnline: boolean;
}

export function Online({ isOnline }: OnlineProps) {
    return (
        <div className="flex items-center bg-gray-700 p-2 rounded-lg shadow-md mb-4">
            <span className={`h-3 w-3 rounded-full ${isOnline ? 'bg-green-500' : 'bg-red-500'}`}></span>
            <span className="ml-2 text-sm text-gray-500">{isOnline ? 'En ligne' : 'Hors ligne'}</span>
        </div>
    );
}
