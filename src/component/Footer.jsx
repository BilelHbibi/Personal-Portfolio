import React, { useState, useEffect, useRef } from "react";
import { ButtonPrimary } from "./Button";
import useTranslation from "../useTranslation";

const socials = [
  { label: "GitHub", href: "https://github.com/BilelHbibi" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/bilel-habibi/" },
  { label: "Twitter X", href: "https://x.com/BilelHabibi8" },
  { label: "Instagram", href: "https://www.instagram.com/bilelhabibi97/" },
];

const Footer = () => {
  const t = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const currentLang = localStorage.getItem("lang") || "en";
  const selectedLang = currentLang === "en" ? "English" : "Français";

  const handleLanguageChange = (lang) => {
    localStorage.setItem("lang", lang);
    history.scrollRestoration = "manual"; // désactive la restauration auto du scroll
    window.scrollTo({ top: 0, behavior: "smooth" });
  
    setTimeout(() => {
      window.location.reload();
    }, 500);
  };
  

  const sitemapLinks = [
    { label: t.contactContent.sitemapHome, href: "#home" },
    { label: t.contactContent.sitemapAbout, href: "#about" },
    { label: t.contactContent.sitemapWork, href: "#work" },
    { label: t.contactContent.sitemapReviews, href: "#reviews" },
    { label: t.contactContent.sitemapContact, href: "#contact" },
  ];

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <footer className="section">
      <div className="container">
        <div className="lg:grid lg:grid-cols-2">
          <div className="mb-10">
            <h2 className="headline-1 mb-8 lg:max-w-[12ch] reveal-up">
              {t.letsWork}
            </h2>
            <ButtonPrimary
              href="mailto:bilelhabibi30@gmail.com"
              label={t.startProject}
              icon="chevron_right"
              classes="reveal-up"
            />
          </div>

          <div className="grid grid-cols-2 gap-4 lg:pl-20">
            <div>
              <p className="mb-2 reveal-up">{t.sitemap}</p>
              <ul>
                {sitemapLinks.map(({ label, href }, key) => (
                  <li key={key}>
                    <a
                      href={href}
                      className="block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200 reveal-up"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="mb-2 reveal-up">{t.socials}</p>
              <ul>
                {socials.map(({ label, href }, key) => (
                  <li key={key}>
                    <a
                      href={href}
                      className="block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200 reveal-up"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="flex justify-between mt-10 mb-15 last">
          <a href="/" className="logo reveal-up">
            <img src="./images/logo3.png" width={80} height={80} alt="logo" />
          </a>

          {/* Custom Language Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="ln flex items-center gap-2 px-4 py-2 border border-zinc-600 rounded-md bg-zinc-800 text-white hover:bg-zinc-700 transition ml-2"
            >
              <img
                src={
                  currentLang === "en"
                    ? "/images/usa.png"
                    : "/images/france.png"
                }
                alt={selectedLang}
                className="w-5 h-5"
              />
              <span>{selectedLang}</span>
              <span className="material-symbols-rounded">
                keyboard_arrow_down
              </span>
            </button>

            {isOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-zinc-800 border border-zinc-600 rounded-md shadow-lg z-50">
                {currentLang !== "en" && (
                  <div
                    onClick={() => {
                      handleLanguageChange("en");
                      setIsOpen(false); // Close dropdown after selecting language
                    }}
                    className="flex items-center w-full px-4 py-2 hover:bg-zinc-700 text-left text-sm text-white cursor-pointer"
                  >
                    <img
                      src="/images/usa.png"
                      alt="English"
                      className="w-5 h-5 mr-2"
                    />
                    English
                  </div>
                )}
                {currentLang !== "fr" && (
                  <div
                    onClick={() => {
                      handleLanguageChange("fr");
                      setIsOpen(false); // Close dropdown after selecting language
                    }}
                    className="flex items-center w-full px-4 py-2 hover:bg-zinc-700 text-left text-sm text-white cursor-pointer"
                  >
                    <img
                      src="/images/france.png"
                      alt="Français"
                      className="w-5 h-5 mr-2"
                    />
                    Français
                  </div>
                )}
              </div>
            )}
          </div>

          <p className="text-zinc-500 text-8 reveal-up ">
            &copy; 2025 <span className="text-zinc-200">Bilel Habibi</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
