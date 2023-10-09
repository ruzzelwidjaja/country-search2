import connectMongoDB from "@/lib/mongodb";
import Country from "@/lib/model/country";
import { NextResponse } from "next/server";


export async function GET() {
    await connectMongoDB();
    const countries = await Country.find();
    const indonesia = await Country.findOne({ name: 'Indonesia' })
    return NextResponse.json({ countries });
}

