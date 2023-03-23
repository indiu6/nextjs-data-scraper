import { NextApiRequest } from "next";

type Body = {
    search: string;
}

export async function POST(req: NextApiRequest) {
    const search = req.body?.search
}

export async function GET(req: Request) {
    return new Response('Hello, Sean', {
        status: 200
    })
}
