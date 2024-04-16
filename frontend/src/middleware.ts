import { NextResponse } from "next/server";

export default function middleware(req: any) {
    const userToken = req.cookies.get('logged')?.value;
    if (userToken === 'true' && req.url === 'http://localhost:3000/') {
        return NextResponse.redirect('http://localhost:3000/home')
    }
}
