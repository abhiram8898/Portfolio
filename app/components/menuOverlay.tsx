import React from "react";
import NavLink from "./navlink";

const MenuOverlay = ({ links }: any) => {
  return (
    <ul className="flex flex-col py-4 items-center">
      {links.map((link: any, index: number) => (
        <li key={index}>
          <NavLink href={link?.path} title={link?.title} />
        </li>
      ))}
    </ul>
  );
};

export default MenuOverlay;
