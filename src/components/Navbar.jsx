import React, { useState } from "react";

import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const handleOpenMenu = () => {
    setToggle(!toggle);
  }

  return (
    <div className="flex justify-between items-center h-16 max-w-[1240px] mx-auto px-4 text-white">
      <h1 className="w-full text-3xl font-bold text-[#00df9a]">Navbar</h1>
      <ul className="hidden md:flex">
        <li className="p-4">Home</li>
        <li className="p-4">Company</li>
        <li className="p-4">Resources</li>
        <li className="p-4">About</li>
        <li className="p-4">Contact</li>
      </ul>
      <div onClick={handleOpenMenu} className="block md:hidden">
        {toggle ? <AiOutlineMenu size={20} /> : <AiOutlineClose size={20} />}
      </div>
      <div className={!toggle ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-gray-800 ease-in-out duration-500" : "fixed left-[-100%] ease-in-out"}>
        <ul className="uppercase">
          <li className="p-4">Home</li>
          <li className="p-4">Company</li>
          <li className="p-4">Resources</li>
          <li className="p-4">About</li>
          <li className="p-4">Contact</li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar;