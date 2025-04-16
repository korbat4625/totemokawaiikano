// app/api/audio/route.ts
import { NextResponse } from 'next/server';
import { readFile } from 'fs/promises';
import path from 'path';

export async function GET() {
    const filePath = path.join(process.cwd(), 'public/audio/bubble-pop-2-293341.mp3');
    const fileBuffer = await readFile(filePath);

    return new NextResponse(fileBuffer, {
        status: 200,
        headers: {
            'Content-Type': 'audio/mpeg',
            'Cache-Control': 'no-store', // 確保不被快取
        },
    });
}
