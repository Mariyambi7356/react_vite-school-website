import React from "react";
import "./Plants.css";

export default function Plants() {
  const pricingData = [
    {
      title: "Regular Member",
      price: "$0",
      duration: "/month",
      color: "#fff",
      features: [
        "Unlimited Access to the Courses",
        "Customer Support",
        "Personal Mentor",
        "Standard Options",
        "5 Classes per Week",
      ],
    },
    {
      title: "Premium Member",
      price: "$100",
      duration: "/month",
      color: "#6f55f2",
      features: [
        "Unlimited Access to the Courses",
        "Customer Support",
        "Personal Mentor",
        "Standard Options",
        "5 Classes per Week",
      ],
    },
    {
      title: "Standard Member",
      price: "$10",
      duration: "/month",
      color: "#fff",
      features: [
        "Unlimited Access to the Courses",
        "Customer Support",
        "Personal Mentor",
        "Standard Options",
        "5 Classes per Week",
      ],
    },
  ];
  return (
    <div className="container">
      <div className="pricing_top">
        <div className="pricingtop">
          <h2 className="section_title">Premium Pricing Plan</h2>
          <p>
            Unlock elite tech services with our Premium Plan and soar ahead of
            the complition
          </p>
        </div>
      </div>
      <div className="pricing_wrapper">
        {pricingData.map((newdata) => (
          <div className="pricing_item">
            <div className="pricing_card_top" style={{}}>
              <h2 className="section_title">{newdata.title}</h2>
              <h2 className="pricing_section_title">
                {newdata.price}
                <span>{newdata.duration}</span>
              </h2>
            </div>
            <div className="services">
              <ul>
                {newdata.features.map((anotherdata) => (
                  <li>{anotherdata}</li>
                ))}
              </ul>
              <button className="register-btn">join</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
