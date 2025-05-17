import React from "react";

const LinksButton = ({item, element}) => {
  return (
    <div className="hidden sm:flex items-center gap-3  border p-3 px-7 rounded-full capitalize relative overflow-hidden  z-[10] group hover:text-white transition-all duration-300 font-[neu2] font-[100] border-black/30 cursor-pointer">
      <a className="relative z-[10]" href="#">
        {item}
      </a>
      {element}
      <div className="w-full group-hover:bottom-0 transition-all duration-300 h-full absolute bottom-[-100%] rounded-full left-0 bg-black"></div>
    </div>
  );
};

export default LinksButton;
