import axios from "axios";
import Image from "next/image";
import SignOut from "@/components/SignOut";
export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-0">
      <div className=" text-4xl font-semibold underline text-white">
        LOGGED IN
      </div>
      <SignOut />
    </main>
  );
}
