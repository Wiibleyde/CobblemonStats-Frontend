import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest, props: { params: Promise<{ pseudo: string }> }) {
    const params = await props.params;
    const response = await fetch(process.env.API_URL + "/api/v1/user/" + params.pseudo + "/stats");
    const data = await response.json();
    return NextResponse.json(data);
}