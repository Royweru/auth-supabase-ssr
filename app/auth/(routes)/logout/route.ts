import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const url = new URL(req.url);

  const cookieStore = cookies();
  const supabase = createRouteHandlerClient({
    cookies: () => cookieStore,
  });

  const response =await supabase.auth.signOut();
  if(response){
    console.log(response)
  }else throw new Error("Something went wrong")
  return NextResponse.redirect(url.origin, {
    status: 301,
  });
}
