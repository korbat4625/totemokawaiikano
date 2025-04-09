import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const PHOTO_DIR = path.join(process.cwd(), 'src/assets/photos');

export async function GET(req: NextRequest) {
    const { searchParams } = new URL(req.url);
    const count = parseInt(searchParams.get('count') || '5', 10);

    const files = fs.readdirSync(PHOTO_DIR).filter(f =>
        /\.(jpe?g|png|webp)$/i.test(f)
    );

    const shuffled = [...files].sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, count);

    return NextResponse.json({
        photos: selected.map(name => `/api/photo?name=${name}`),
    });
}
