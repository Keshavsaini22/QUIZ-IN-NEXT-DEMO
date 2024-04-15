import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    try {
        const data = await req.json();
        console.log('data: ', data);
        const response = await fetch("http://localhost:8081/login", {
            method: "POST",
            body: JSON.stringify(data)
        })
        const res = await response.json();
        console.log('res: ', res);
        // console.log('res: ', res);
        return Response.json(res, {
            status: response.status,
        });
    }
    catch (e) {
        console.log('e: ', e);
        return NextResponse.json(e, { status: 400 })
    }
}