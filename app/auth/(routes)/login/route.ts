import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req:NextRequest) {
    const url = new URL(req.url)

    const body = await req.json()

    const{email,pwd} = body
    
    const cookieStore = cookies()
    const supabase = createRouteHandlerClient({
        cookies:()=>cookieStore
    })

    const {data,error}  =await supabase
    .auth
    .signInWithPassword({
        email,
        password:pwd,
    })
    if (data) console.log(data)
    if(error) console.log(error)
    return NextResponse.redirect(url.origin,{
        status:301
    })
}