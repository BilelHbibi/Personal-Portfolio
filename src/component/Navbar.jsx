import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import useTranslation from "../useTranslation"; // Make sure to use your translation hook

const Navbar = ({ navOpen }) => {
  const t = useTranslation();  // Using translation hook
  const lastActiveLink = useRef();
  const activeBox = useRef();

  const initActiveBox = () => {
    activeBox.current.style.top = lastActiveLink.current.offsetTop + "px";
    activeBox.current.style.left = lastActiveLink.current.offsetLeft + "px";
    activeBox.current.style.width = lastActiveLink.current.offsetWidth + "px";
    activeBox.current.style.height = lastActiveLink.current.offsetHeight + "px";
  };

  useEffect(initActiveBox, []);
  window.addEventListener("resize", initActiveBox);

  const activeCurrentLink = (event) => {
    lastActiveLink.current?.classList.remove("active");
    event.target.classList.add("active");
    lastActiveLink.current = event.target;
    activeBox.current.style.top = event.target.offsetTop + "px";
    activeBox.current.style.left = event.target.offsetLeft + "px";
    activeBox.current.style.width = event.target.offsetWidth + "px";
    activeBox.current.style.height = event.target.offsetHeight + "px";
  };

  const navItems = [
    {
      label: t.home, // Translated label
      link: "#home",
      className: "nav-link active",
      ref: lastActiveLink,
    },
    {
      label: t.about, // Translated label
      link: "#about",
      className: "nav-link",
    },
    {
      label: t.work, // Translated label
      link: "#work",
      className: "nav-link",
    },
    {
      label: t.reviews, // Translated label
      link: "#reviews",
      className: "nav-link",
    },
    {
      label: t.contact, // Translated label
      link: "#contact",
      className: "nav-link md:hidden contact",
    },
  ];

  return (
    <>
      <nav className={"navbar " + (navOpen ? "active " : "")}>
        {navItems.map(({ label, link, className, ref }, key) => (
          <a
            href={link}
            className={className}
            ref={ref}
            key={key}
            onClick={activeCurrentLink}
          >
            {label}
          </a>
        ))}
        <div className="active-box" ref={activeBox}></div>
      </nav>
    </>
  );
};

Navbar.propTypes = {
  navOpen: PropTypes.bool.isRequired,
};

export default Navbar;
