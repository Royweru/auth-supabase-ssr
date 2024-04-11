import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";
import { NextResponse,NextRequest } from "next/server";


export async function middleware(req:NextRequest) {
     const res = NextResponse.next()

     const supabase = createMiddlewareClient({req,res})

     const {
        data:{
            session
        }
     } = await supabase.auth.getSession()

     console.log(session)
     
     if(!session){
       return null

     }

     return res
}


export const config = {
        matcher:['/((?!api|_next/static|_next/image|favicon.ico).*)']
    }