"use client"
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { SupabaseClient } from "@supabase/supabase-js";
import React, { createContext, useContext, useState } from "react";


type SupabaseContext = {
    supabase:SupabaseClient
}

const Context  = createContext<SupabaseContext|undefined>(undefined)

export default function SupabaseProvider({
    children
}:{
    children:React.ReactNode
}) {

    const [supabase] = useState(()=>createClientComponentClient<any>())

    return (
        <Context.Provider value={{supabase}}>
           <>
             {children}
           </>
        </Context.Provider>
    )
}

export const useSupabase = ()=>{
    const context = useContext(Context)

    if(context===undefined){
        throw new Error("useSupabase must be used inside SupabaseProvider")
    }

    return context
}