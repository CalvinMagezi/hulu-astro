import React from "react";

function HeaderItem({ title, Icon, href }) {
  return (
    <a href={`${href}`}>
      <div className="flex flex-col items-center justify-center group cursor-pointer">
        <Icon className="h-8 mb-1 group-hover:animate-bounce transition duration-200 ease-in-out text-gray-200" />
        <p className="tracking-widest text-sm sm:text-lg opacity-0 group-hover:opacity-100">
          {title}
        </p>
      </div>
    </a>
  );
}

export default HeaderItem;
