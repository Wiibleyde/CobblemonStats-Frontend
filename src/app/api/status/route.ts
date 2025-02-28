import { NextResponse } from 'next/server';

export interface ServerStatus {
    status: string;
    online: boolean;
    motd: string;
    motd_json: { text: string };
    favicon: string;
    error: string;
    players: { max: number; now: number; sample: { name: string; id: string }[] };
    server: { name: string; protocol: number };
    last_updated: string;
    duration: string;
}

const CACHE_DURATION = 30000; // Cache duration in milliseconds

let nowStatus: ServerStatus | undefined = undefined;

export async function GET(): Promise<NextResponse> {
    if (!nowStatus || Date.now() - parseInt(nowStatus.last_updated) > CACHE_DURATION) {
        await updateStatus();
    }
    return NextResponse.json(nowStatus);
}

async function updateStatus() {
    const response = await fetch(process.env.MC_API_URL || '');
    nowStatus = await response.json();
}
