import React from "react";

function HeaderItem({ title, Icon, href }) {
  return (
    <a href={`${href}`}>
      <div className="flex flex-col items-center justify-center group cursor-pointer">
        <Icon className="h-8 mb-1 group-hover:animate-bounce transition duration-200 ease-in-out text-gray-200" />
        <p className="sm:tracking-widest text-xs sm:text-base opacity-0 group-hover:opacity-100">
          {title}
        </p>
      </div>
    </a>
  );
}

export default HeaderItem;
