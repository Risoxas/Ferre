import React from "react";
import "../../styles/_header.scss";
import { constants } from "../../constants/constants";
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.png";

export default function Header() {
  const { menu } = constants;

  return (
    <>
      <div className="px-lg-4 d-flex flex-md-row flex-column header-container py-3 w-100">
        <div className="mx-1 col-md-5 col-12 d-flex">
          <img src={logo} alt="" height={100} />
          <div className="sub-slogan d-md-none">
            <span>
              Siempre <strong>CERCA</strong> de usted
            </span>
          </div>
        </div>
        <ul className=" menu d-flex flex-row justify-content-between w-100 align-items-center">
          {menu.map((item) => (
            <NavLink key={item.text} to={item.route}>
              {item.text}{" "}
            </NavLink>
          ))}
        </ul>
      </div>
    </>
  );
}
