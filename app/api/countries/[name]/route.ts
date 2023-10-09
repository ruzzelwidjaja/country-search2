import connectMongoDB from "@/lib/mongodb";
import Country from "@/lib/model/country";
import { NextResponse } from "next/server";


export async function GET(request: any, { params }: any) {
    const { name } = params;
    await connectMongoDB();
    const country = await Country.findOne({ name: name });
    return NextResponse.json({ country }, { status: 200 });
}

