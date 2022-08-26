import React from "react";

import requests from "../../../helpers/requests";

function Navbar() {
  return (
    <nav className="relative">
      <div className="flex items-center space-x-10 px-10 sm:px-20 whitespace-nowrap overflow-x-scroll last:pr-24 scrollbar-hide">
        {Object.entries(requests).map(([key, { title, url }]) => (
          <a key={key} href={`/?genre=${key}`}>
            <h3 className=" hover:text-white active:text-red-600 cursor-pointer hover:scale-105 transition duration-100 ease-in-out transform">
              {title}
            </h3>
          </a>
        ))}
      </div>
      <div className="absolute top-0 right-0 bg-gradient-to-l from-[#06202A] h-10 w-1/12" />
    </nav>
  );
}

export default Navbar;
