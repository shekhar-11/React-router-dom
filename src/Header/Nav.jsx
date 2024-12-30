import React from 'react';
import { NavLink,Link } from 'react-router-dom';

function Nav() {
  return (
    <nav className="bg-black p-5 w-full text-white">
      <ul className="flex flex-row space-x-7 justify-end pr-9">
        {["Home", "About", "Skills", "Hobbies", "Projects"].map((item, index) => (
          <li key={index}>
            <Link
              to={`/${item.toLowerCase() === "home" ? "" : item.toLowerCase()}`}
              className={({ isActive }) =>
                `${isActive ? "text-red-700" : "text-slate-500"} font-semibold font-serif`
              }
            >
              {item}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Nav;
