import React from "react";
import logo from "../../../images/logo.png";
import HeaderItem from "./HeaderItem";
import {
  CheckBadgeIcon,
  RectangleStackIcon,
  HomeIcon,
  BoltIcon,
  MagnifyingGlassIcon,
  UserIcon,
} from "@heroicons/react/24/outline";

function Header() {
  return (
    <header className="flex flex-col sm:flex-row items-center w-full justify-between p-5 h-auto">
      <div className="flex items-center justify-evenly flex-grow max-w-2xl ">
        <HeaderItem title="HOME" Icon={HomeIcon} href="/" />
        <HeaderItem title="TRENDING" Icon={BoltIcon} href="/" />
        <HeaderItem title="VERIFIED" Icon={CheckBadgeIcon} href="/" />
        <HeaderItem title="COLLECTIONS" Icon={RectangleStackIcon} href="/" />
        <HeaderItem title="SEARCH" Icon={MagnifyingGlassIcon} href="/" />
        <HeaderItem title="ACCOUNT" Icon={UserIcon} href="/" />
      </div>
      <img src={logo} className="w-28 h-8" alt="" />
    </header>
  );
}

export default Header;
