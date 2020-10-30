import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Babo from "../../images/BaboHeader.svg";

function Header() {
  const [menu, ] = useState<boolean>(false);

  return (
    <header className="head w-full fixed h-24 shadow-xl bg-gray-900 sm:flex sm:justify-end">
      <div className="flex p-4 sm:flex-1">
        <div className="flex-1">
          <Link to="/home">
            <img id="logo" className="h-16" src={Babo} alt="Babo" />
          </Link>
        </div>
      </div>
      <div className="sm:bg-gray-900 sm:flex-1 sm:flex sm:justify-end sm:items-center text-lg font-bold">
        <nav
          className={
            menu
              ? "block headerNav px-4 py-4"
              : "hidden headerNav px-4 py-4 lg:flex  "
          }
        >
          <Link
            className="block py-1 px-2 mx-2 w-auto"
            to="/dashboard/projects"
          >
            Dashboard
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
