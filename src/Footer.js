import React from "react";
import { SocialIcon } from "react-social-icons";
import "./Footer.css";
function Footer() {
  return (
    <div className="footer">
      <div className="icons">
        <h1>Reach Me at : </h1>
        <br />
        <SocialIcon
          url="https://www.instagram.com/mr_sethi_2511/"
          style={{ height: 30, width: 30 }}
          fgColor="white"
        />
        <SocialIcon
          url="https://github.com/karansjc1/"
          style={{ height: 30, width: 30 }}
          fgColor="white"
          bgColor="black"
        />
        <SocialIcon
          url="https://www.linkedin.com/in/karan-sethi-4478b516a/"
          style={{ height: 30, width: 30 }}
          fgColor="white"
        />
        <SocialIcon
          url="https://www.facebook.com/karan.sethi.75286"
          style={{ height: 30, width: 30 }}
          fgColor="white"
        />
        <br />
      </div>
      <div className="repo">
        <h1>GitHub Repository for this App : </h1>
        <br />
        <SocialIcon
          url="https://github.com/karansjc1/Covid-19-Tracker"
          style={{ height: 30, width: 30 }}
          fgColor="white"
          bgColor="black"
        />
      </div>
      <br />
      <div className="copyright">
        <small>
          &copy; Copyright 2020, made with &#10084;&#65039; by Karan Sethi
        </small>
      </div>
    </div>
  );
}

export default Footer;
