import Link from "next/link";
import React from "react";

function Logo() {
  return (
    <div>
      <Link href={"/"} className="text-3xl">
        Jaloliddin
      </Link>
    </div>
  );
}

export default Logo;
