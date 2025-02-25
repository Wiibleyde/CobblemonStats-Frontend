import { NextResponse } from "next/server";

export async function GET(): Promise<NextResponse> {
    const response = await fetch(process.env.API_URL + "/api/v1/leaderboard/lootr_chests_openned");
    const data = await response.json();
    return NextResponse.json(data);
}