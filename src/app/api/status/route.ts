// {"status":"success","online":true,"motd":"§b§k A§e Les Chialeuses§b Academy§b§k A§r\n§cPOKEMON§f ATTRAPEZ LES§f TOUS !","motd_json":{"text":"§b§k A§e Les Chialeuses§b Academy§b§k A§r\n§cPOKEMON§f ATTRAPEZ LES§f TOUS !"},"favicon":"","error":null,"players":{"max":50,"now":3,"sample":[{"name":"D_Eliott_W","id":"463cfe3f-f9a6-442f-84b2-8f7f957bccf7"},{"name":"Anonymous Player","id":"00000000-0000-0000-0000-000000000000"},{"name":"RedKrosss","id":"4b45a6a5-8c3d-4a65-91b8-909001ea72a5"}]},"server":{"name":"1.20.1","protocol":763},"last_updated":"1740567442","duration":"677216543"}

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
