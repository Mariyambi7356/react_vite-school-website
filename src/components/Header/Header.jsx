import React from "react";
import "./Header.css";
import img from "../../assets/image/palestine-isd-2.webp";
import { Link } from "react-router-dom";

export default function Header() {
  const navigation = [
    {
      path: "/",
      display: "HOME",
    },
    {
      path: "/courses",
      display: "COURSE",
    },
    {
      path: "/plants",
      display: "SERVICE",
    },
    {
      path: "/about",
      display: "ABOUT",
    },
    {
      path: "/community",
      display: "COMMUNITY",
    },
    {
      path: "/support",
      display: "SUPPORT",
    },
  ];

  return (
    <header className="header">
      <div className="container">
        <div className="nav_container">
          <div className="logo">
            <div className="logo-img">
              <img src={img} alt="logo" />
            </div>
            <h2>school of palestine</h2>
          </div>

          <div className="navigation">
            <ul className="menu">
              {navigation.map((i,index) => (
                <li className="nav_item">
                  <Link key={index} to={i.path}>{i.display}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}
