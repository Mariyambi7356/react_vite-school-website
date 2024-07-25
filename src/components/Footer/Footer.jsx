import React from "react";
import "./Footer.css";
import footerimg from "../../assets/image/footer.png";
import { Link } from "react-router-dom";

export default function Footer() {
  const handleClick =()=>{
    Window.scrollTo(0,0)
  }

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer_wrapper">
          <div className="footer-box">
            <div className="logo">
              <div className="logo-img">
                <img src={footerimg} alt="image not found" />
              </div>
              <h2>SCHOOL OF PALESTIN</h2>
            </div>
            <p>Womens education level has increased.</p>
          </div>
          <div className="footer-box">
            <h4 className="footer_title">COMPANY</h4>
            <ul className="footer_links">
              <li>
                <Link onClick={handleClick} to="/courses">OUR PROGRAMS</Link>
              </li>
              <li>
                <Link onClick ={handleClick} to="/plants">OUR PLAN</Link>
              </li>
              <li>
                <Link onClick ={handleClick} to="/">BECOME A MEMBER</Link>
              </li>
            </ul>
          </div>

          <div className="footer-box">
            <h4 className="footer_title">QUICK LINKS</h4>
            <ul className="footer_links">
              <li>
                <Link to="/about">ABOUT US</Link>
              </li>
              <li>
                <Link to="/contact">CONTACT US</Link>
              </li>
              <li>
                <Link to="/support">SUPPORT US</Link>
              </li>
            </ul>
          </div>
          
        </div>
      </div>
    </footer>
  );
}
