import React, { useState } from "react";
import { Link } from "react-router-dom";
import Babo from "../../images/BaboHeader.svg";


function Header() {
  const [menu, isMenuSelected] = useState<boolean>(false);

  const selected = () => {
    isMenuSelected(!menu);
  };

  return (
    <header className="w-full shadow-xl bg-gray-900 sm:flex sm:justify-end">
      <div className="flex p-4 sm:flex-1">
        <div className="flex-1">
          <Link  to="/home">
            <img id="logo" className="h-16" src={Babo} alt="Babo" />
          </Link>
        </div>
        <div className="flex flex-1 justify-end items-center">
          <div onClick={selected} className="sm:hidden ham">
            <div className={menu ? "line line-1" : "line "}></div>
            <div className={menu ? "line line-2" : "line "}></div>
            <div className={menu ? "line line-3" : "line"}></div>
          </div>
        </div>
      </div>
      <div className="sm:bg-gray-900 sm:flex-1 sm:flex sm:justify-end sm:items-center text-lg font-bold">
          <nav className={menu ? "block headerNav px-4 py-4" : "hidden headerNav px-4 py-4 sm:flex  "}>
                <Link className="block py-1 px-2 mx-2 w-auto" to="/dashboard/projects">
                  Dashboard
                </Link>
                <Link className="block py-1 px-2 mx-2" to="/login">
                  Login
                </Link>
                <Link className="block py-1 px-2 mx-2" to="/settings">
                  Settings
                </Link>
          </nav>
      </div>
    </header>
  );
}

export default Header;
