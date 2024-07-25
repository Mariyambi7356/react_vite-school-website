import React from "react";
import "./Home.css";
import meta from "../../../assets/image/meta.jpeg.jpg";
import { AiOutlineWhatsApp } from "react-icons/ai";
import Plants from "../plants/Plants.jsx";
import Community from "../community/Community";
import Support from "../support/Support.jsx";
import Courses from "../courses/Courses";

export default function Home() {
  const handleClick = () => {
    window.open(
      "https://www.unicef.org/sop/stories/making-schools-safe-state-palestine-amidst-widening-pandemic"
    );
  };

  return (
    <>
      <section>
        <div className="container">
          <div className="home-container">
            <div className="home-content">
              <h2 className="section_title">Learn for free</h2>
              <p>
                This is the best educational platform for all age groups and go
                for it!
              </p>
              <div className="home-button">
                <button onClick={handleClick} className="register-btn">
                  Get started
                </button>
                <button className="register-btn">Watch now</button>
              </div>
            </div>
            <div className="home-img">
              <div className="home-img-wrapper">
                <div className="box-01">
                  <div className="box-img">
                    <img src={meta} alt="img not found" />
                  </div>
                </div>
                <div>
                  <div className="whatsaup-container">
                    <h2>500+ students</h2>
                    <AiOutlineWhatsApp color="green" />
                  </div>
                  <div className="support">Active support</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <Courses />
        <Community />
        <Plants />
        <Support />
      </section>
    </>
  );
}
