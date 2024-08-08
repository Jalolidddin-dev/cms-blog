import React from "react";
import Logo from "./logo";
import { navLinks } from "../../../constants";
import Link from "next/link";
import { Search, Sun } from "lucide-react";

function Navbar() {
  return (
    <div className="bg-background group">
      <div className="container py-8 flex justify-between items-center ">
        <Logo />
        <div className="flex gap-8 items-center">
          {navLinks.map((navlink) => (
            <div key={navlink.name}>
              <Link href={navlink.route}>{navlink.name}</Link>
            </div>
          ))}
        </div>

        <div className="flex gap-8 items-center">
          <div className="flex gap-2">
            <span>Search</span>
            <Search />
          </div>
          <Sun />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
