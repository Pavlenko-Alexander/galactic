import React from "react";
import MainLogo from "../MainLogo/MainLogo";
import Link from "../Link/Link";

import facebookIcon from "../../images/facebook-icon.svg";
import linkedinIcon from "../../images/linkedin-icon.svg";
import instagramIcon from "../../images/instagram-icon.svg";

import "./Footer.scss";

function Footer() {
  return (
    <div className="footer">
      <MainLogo />
      <nav className="footer__links">
        <Link title="Affiliates" />
        <Link title="Advertisers" />
        <Link title="Events" />
        <Link title="Blog" />
        <Link title="Terms of Use" />
      </nav>
      <div className="footer__social-links">
        <div className="facebook-icon"><img alt="Icon" src={facebookIcon} /></div>
        <div className="linkedin-icon"><img alt="Icon" src={linkedinIcon} /></div>
        <div className="instagram-icon"><img alt="Icon" src={instagramIcon} /></div>  
      </div>
      <div className="contact">Contact Us</div>
      <div className="email">support@markify.com</div>
    </div>
  );
}

export default Footer;
