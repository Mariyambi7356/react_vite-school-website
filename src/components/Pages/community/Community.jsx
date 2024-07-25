import React from "react";
import "./Community.css";
import tc from "../../../assets/image/tc.png";

export default function Community() {
  const submit = () => {
    window.open("https://www.whatsapp.com/", "_blank");
  };
  return (
    <div className="container">
      <div className="start-wrapper">
        <div className="start-img">
          <img src={tc} alt="image found" />
        </div>
        <div className="start-content">
          <h2 className="section-title">JOIN OUR FREE TECH COMMUNITY</h2>
          <p>
            unlock the power knowlegde and innovation by joining our vibrant and
            Whatsapp tech community
          </p>
          <button onClick={submit} className="register-btn">
            SUBMIT
          </button>
        </div>
      </div>
    </div>
  );
}
