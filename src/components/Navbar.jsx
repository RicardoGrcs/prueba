import React from "react";

const Navbar = () => {
  return (
    <nav id="navbar">
      <div className="navigation">
        <h2 className="logo">
          <a href="#q">Big Dreams</a>
        </h2>
        <ul className="links">
          <li>
            <a href="#q">HOME</a>
          </li>
          <li>
            <a href="#a">ABOUT US</a>
          </li>
          <li>
            <a href="#b">SERVICES</a>
          </li>
          <li>
            <a href="#c">PORTFOLIO</a>
          </li>
          <li>
            <a href="#d">TEAM</a>
          </li>
          <li className="dropdown">
            <a href="#e">
              DROP DOWN&nbsp;<i className="fas fa-caret-down"></i>
            </a>
            <span className="dropdown-content">
              <ul>
                <li className="dropdown-r">
                  restaurantes&nbsp;<i className="fas fa-caret-down"></i>
                  <span className="dropdown-content-r">
                    <ul>
                      <li>la roca</li>
                      <li>el acomodo</li>
                      <li>el maizal</li>
                    </ul>
                  </span>
                </li>
                <li>droguerias</li>
                <li>discotecas</li>
                <li>comercio</li>
              </ul>
            </span>
          </li>

          <li>
            <a href="#f">CONTACT US</a>
          </li>
        </ul>

        <div className="social">
          <i className="fab fa-twitter"></i>
          <i className="fab fa-facebook"></i>
          <i className="fab fa-linkedin"></i>
          <i className="fab fa-instagram"></i>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
