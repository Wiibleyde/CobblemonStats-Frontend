import { Profile } from '@components/profile/profile';

export default async function PseudoPage({ params }: { params: Promise<{ pseudo: string }> }) {
    const { pseudo } = await params;
    return (
        <div className="container mx-auto p-4">
            <Profile name={pseudo} />
        </div>
    );
}
