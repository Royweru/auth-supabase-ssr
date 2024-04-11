"use client";

import { supabase } from "@/lib/supabase";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const LoginPage = () => {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [success, setSuccess] = useState(false);

  const login = async () => {
    try {
    //   let { data: dataUser, error } = await supabase.auth.signInWithPassword({
    //     email: email,
    //     password: pwd,
    //   });
    //   if (dataUser) {
    //     const { user } = dataUser;
    //     if (user) {
    //       setSuccess(true);
    //     }
    //   }
    //   if (error) console.error(error);
   await axios.post('/auth/login',{email,pwd})
   setEmail("");
   setPwd("");
   console.log("Success sending the data")
   router.refresh();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className=" w-full h-screen flex flex-col items-center justify-center bg-gradient-to-bl from-blue-200 via-black to-sky-950">
      <div className=" text-2xl text-sky-600 font-semibold italic">
        LOGIN USER
      </div>
      <div>
        <form className=" flex flex-col rounded-2xl bg-slate-200 gap-y-4 p-12">
          <input
            type="email"
            placeholder=" enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className=" text-lg font-semibold  text-black p-6 bg-gray-100 rounded-2xl"
          />
          <input
            type="password"
            name="pwd"
            placeholder=" enter your password"
            value={pwd}
            onChange={(e) => setPwd(e.target.value)}
            className=" text-lg font-semibold text-black p-6 bg-gray-100"
          />
         
        </form>
        <button
            onClick={login}
            className=" p-6 rounded-2xl bg-emerald-200 text-white font-semibold my-3"
          >
            LOGIN
          </button>
        <div className=" w-full underline font-bold italic hover:cursor-pointer" >
          <a href="/authorization/signup">
            Have no account sign up
          </a>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
