import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const PHOTO_DIR = path.join(process.cwd(), 'src/assets/photos');

export async function GET(req: NextRequest) {
    const { searchParams } = new URL(req.url);
    const name = searchParams.get('name');
    if (!name) return new NextResponse('Missing photo name', { status: 400 });

    const filePath = path.join(PHOTO_DIR, name);
    if (!fs.existsSync(filePath)) {
        return new NextResponse('Not found', { status: 404 });
    }

    const ext = path.extname(name).slice(1);
    const mimeType = `image/${ext === 'jpg' ? 'jpeg' : ext}`;
    const fileBuffer = fs.readFileSync(filePath);

    return new NextResponse(fileBuffer, {
        headers: {
            'Content-Type': mimeType,
        },
    });
}
