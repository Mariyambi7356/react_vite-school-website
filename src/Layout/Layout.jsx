import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import About from "../components/Pages/about/About";
import Community from "../components/Pages/community/Community";
import Contact from "../components/Pages/contact/Contact";
import Courses from "../components/Pages/courses/Courses";
import Home from "../components/Pages/home/Home";
import Plants from "../components/Pages/plants/Plants";
import Support from "../components/Pages/support/Support";

export default function Layout() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/community" element={<Community />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/plants" element={<Plants />} />
        <Route path="/support" element={<Support />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
