import React from "react";
import Link from "next/link";
const Movie404 = () => {
  return (
    <div className="flex items-center justify-center flex-col not h-full ">
      <h2>We were unable to locate the movie you&apos;re searching for.</h2>
      <Link className="underline text-[20px] mt-2" href={"/"}>
        Go to Homepage
      </Link>
    </div>
  );
};

export default Movie404;
