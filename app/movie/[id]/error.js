"use client";
import React from "react";
import Link from "next/link";

const Eror = () => {
  return (
    <div className="flex items-center justify-center flex-col not h-full  ">
      <h2> We apologize, an error has occurred. </h2>
      <Link className="underline text-[20px] mt-2" href={"/"}>
        Go to Homepage
      </Link>
    </div>
  );
};

export default Eror;
