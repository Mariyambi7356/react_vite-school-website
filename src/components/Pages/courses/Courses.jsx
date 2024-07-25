import React from "react";
import "./Courses.css";
import dg from "../../../assets/image/dg.png";
import ai from "../../../assets/image/ai.png";
import sd from "../../../assets/image/sd.png";
import hacker from "../../../assets/image/hacker.jpg";

export default function Courses() {
  const trend = [
    {
      title: "AI DEVELOPMENT",
      desc: "Master AI Development!!!",
      img: ai,
    },
    {
      title: "DIGITAL MARKETING",
      desc: "Master Digital Marketing!!!",
      img: dg,
    },
    {
      title: "CYBER SECURITY",
      desc: "Master Cyber Security!!!",
      img: hacker,
    },
    {
      title: "SOFTWARE DEVELOPMENT",
      desc: "Master Software Development",
      img: sd,
    },
  ];
  return (
    <div className="container course-container">
      <div className="course-top">
        <h2 className="section_title"> OUR FREE COURSES</h2>
        <p>TOP TRENDING FREE COURSES AND FREE CERTIFICATES</p>
        <div className="course-wrapper">
          {trend.map((react) => (
            <div className="course-item">
              <span className="course-icon">
                <img src={react.img} alt="image" />
              </span>
              <div className="course-content">
                <h4>{react.title}</h4>
                <p>{react.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
