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

    const response  =await supabase
    .auth
    .signUp({
        email,
        password:pwd,
        options:{
            emailRedirectTo:`${url.origin}/auth/callback`
        }
    })
    console.log(response)
    return NextResponse.redirect(url.origin,{
        status:301
    })
}