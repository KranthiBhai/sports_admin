"use client";

import Shell from "@/components/shells/Shell";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.push('/shopping/orders');
  }, []);

  return (
    <div className=" w-full h-full flex items-center justify-center bg-clrbg">
      <h1 className="animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent text-5xl font-black py-1 italic ">
        Loading...
      </h1>
    </div>
  );
}
