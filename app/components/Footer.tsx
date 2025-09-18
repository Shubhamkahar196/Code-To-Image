"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-10 py-8 sm:py-16">
      <Link
        className="text-sm font-medium hover:text-slate-200 ease-in-out transition-all duration-500"
        href="https://x.com/Shubhamkah100?t=szI5NBRmVqGeby7teTlvSQ&s=09"
      >
         <Image src="/twitter.png" width={30} height={20} alt="" className="rounded-full" />
      </Link>
      <Link
        href="#"
        className="flex items-center text-sm font-medium hover:text-slate-200 ease-in-out transition-all duration-500"
      >
        <span className="pr-2">Made by</span>
        <Image src="/handshake.jpg" width={25} height={20} alt="" className="rounded-full" />
        <span className="pl-1 font-medium text-slate-200">Shubham Kahar</span>
      </Link>
      <Link
        href="https://github.com/Shubhamkahar196/Code-To-Image"
        className="flex items-center text-sm font-medium hover:text-slate-200 ease-in-out transition-all duration-500"
      >
               <Image src="/github.png" width={30} height={20} alt="source code" className="bg-white rounded-full" />
      </Link>
    </div>
  );
}

export default Footer;