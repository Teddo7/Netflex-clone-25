import React from "react";

import "./Footer.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="links">
                <div className="row">
                    <a href="/audio-description">Audio Description</a>
                    <a href="/investor-relations">Investor Relations</a>
                    <a href="/privacy">Privacy</a>
                    <a href="/contact-us">Contact Us</a>
                    <a href="/service-code">Service Code</a>
                </div>
                <div className="row">
                    <a href="/help-center">Help Center</a>
                    <a href="/jobs">Jobs</a>
                    <a href="/legal-notices">Legal Notices</a>
                    <a href="/do-not-sell">Do Not Sell or Share My Personal Information</a>
                </div>
                <div className="row">
                    <a href="/gift-cards">Gift Cards</a>
                    <a href="/netflix-shop">Netflix Shop</a>
                    <a href="/cookie-preferences">Cookie Preferences</a>
                    <a href="/ad-choices">Ad Choices</a>
                </div>
                <div className="row">
                    <a href="/media-center">Media Center</a>
                    <a href="/terms-of-use">Terms of Use</a>
                    <a href="/corporate-information">Corporate Information</a>
                </div>
            </div>
            <div className="social-icons">
                <a href="https://www.facebook.com"><FacebookIcon /></a>
                <a href="https://www.instagram.com"><InstagramIcon /></a>
                <a href="https://www.twitter.com"><TwitterIcon /></a>
                <a href="https://www.youtube.com"><YouTubeIcon /></a>
            </div>
            <div className="copyright">
                &copy; 1997-2025 Your Company Name, Inc.
            </div>
        </footer>
    );
};

export default Footer;
