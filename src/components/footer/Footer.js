import React from "react";
import { Link } from "react-router-dom";

import "./footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-logo">
          <h3>Panto</h3>
          <p>
            The advantage of hiring a workspace with us is that givees you
            comfortable service and all-around facilities.
          </p>
        </div>

        <div className="content">
          <h3>Services</h3>
          <ul>
            <li>
              <Link>Email Marketing</Link>
            </li>
            <li>
              <Link>Campaigns</Link>
            </li>
            <li>
              <Link>Branding</Link>
            </li>
          </ul>
        </div>

        <div className="content">
          <h3>Furniture</h3>
          <ul>
            <li>
              <Link>Beds</Link>
            </li>
            <li>
              <Link>Chair</Link>
            </li>
            <li>
              <Link>All</Link>
            </li>
          </ul>
        </div>

        <div className="content">
          <h3>Follow Us</h3>
          <ul>
            <li>
              <Link>
                <i class="fa-brands fa-facebook-f"></i> Facebook
              </Link>
            </li>
            <li>
              <Link>
                <i class="fa-brands fa-twitter"></i> Twitter
              </Link>
            </li>
            <li>
              <Link>
                <i class="fa-brands fa-instagram"></i> Instagram
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <p className="copyright">Copyright © 2024 by oddiy inson</p>

    </footer>
  );
};

export default Footer;
