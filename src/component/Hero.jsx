import React from "react";
import { ButtonPrimary, ButtonOutline } from "./Button";
import useTranslation from "../useTranslation";

const Hero = () => {
  const t = useTranslation();

  // Get current language from localStorage
  const currentLang = localStorage.getItem("lang") || "en";
  const cvFile = currentLang === "fr" ? "/CV FR.pdf" : "/CV EN.pdf";

  return (
    <section className="pt-28 lg:pt-36" id="home">
      <div className="container lg:grid lg:grid-cols-2 items-center lg:gap-10">
        <div>
          <div className="flex items-center gap-3">
            <figure className="img-box w-9 h-9 rounded-lg">
              <img
                src="/images/1.png"
                alt="Bilel"
                width={40}
                height={40}
                className="img-cover-3"
              />
            </figure>

            <div className="flex items-center gap-1.5 text-zinc-400 text-sm tracking-wide">
              <span className="relative w-2 h-2 rounded-full bg-emerald-400">
                <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping"></span>
              </span>
              {t.availableForWork}
            </div>
          </div>

          <h2 className="headline-1 ma-w-[15ch] sm:max-w-[20ch] lg:max-w-[15ch] mt-5 mb-8 lg:mb-10">
            {t.heroHeading}
          </h2>

          <div className="flex items-center md:items-center gap-3">
            <ButtonPrimary
              label={t.downloadCV}
              icon="download"
              href={cvFile}
              download
            />
            <ButtonOutline
              label={t.scrollDown}
              href="#about"
              icon="arrow_downward"
            />
          </div>
        </div>

        <div className="hidden lg:block">
          <figure className="w-full max-w-[480px] ml-auto bg-gradient-to-t from-[#ffffff] via-20% via-[#ffffff]/40 to-70% rounded-[60px] overflow-hidden">
            <img
              src="/images/2.png"
              width={656}
              height={800}
              alt="Hero"
              className="w-full"
            />
          </figure>
        </div>
      </div>
    </section>
  );
};

export default Hero;
