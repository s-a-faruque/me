import { useState } from "react";
import Scrollspy from "react-scrollspy";
import { Link } from "react-router-dom";
import {
  FiUser,
  FiFileText,
} from "react-icons/fi";
import { FaHome } from "react-icons/fa";

const Header = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <>
      {/* Header */}
      <div className="mob-header">
        <button className="toggler-menu" onClick={handleClick} aria-label="Toggle menu">
          <div className={click ? "active" : ""}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>
      </div>
      {/* End Header */}

      {/* nav bar */}
      <header className={click ? "header-left header-menu-style-two menu-open" : "header-left header-menu-style-two"}>
        <div className="scroll-bar">
          <div className="hl-top">
            <div className="hl-logo">
              <Link to="/">SF</Link>
            </div>
          </div>
          {/* End htl-top */}

          <Scrollspy
            className="nav nav-menu"
            items={["home", "about", "resume"]}
            currentClassName="active"
            offset={-30}
          >
            <li>
              <a className="nav-link" href="#home" aria-label="Home" onClick={handleClick}>
                <FaHome />
                <span className="item">Home</span>
              </a>
            </li>
            <li>
              <a className="nav-link" href="#about" aria-label="About" onClick={handleClick}>
                <FiUser />
                <span className="item">About</span>
              </a>
            </li>
            <li>
              <a className="nav-link" href="#resume" aria-label="Resume" onClick={handleClick}>
                <FiFileText />
                <span className="item">Resume</span>
              </a>
            </li>
          </Scrollspy>
        </div>
      </header>
      {/* End Header */}
    </>
  );
};

export default Header;
