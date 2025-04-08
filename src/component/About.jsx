import React from "react";
import useTranslation from "../useTranslation";

const aboutItems = [
  {
    labelKey: "projectDone", // Change the label to translation keys
    number: 18,
  },
  {
    labelKey: "yearsOfExperience", // Change the label to translation keys
    number: 1,
  },
];

const About = () => {
  const t = useTranslation(); // Get the translation function

  return (
    <>
      <section id="about" className="section">
        <div className="container">
          <div className="bg-zinc-800/50 p-7 rounded-2xl md:p-12 reveal-up">
            <p className="text-zinc-300 mb-4 md:mb-8 md:text-xl md:max-w-[60ch]">
              {t.welcomeText} {/* Dynamic text using translation */}
            </p>
            <div className="flex flex-wrap items-center gap-4 md:gap-7">
              {aboutItems.map(({ labelKey, number }, key) => (
                <div key={key}>
                  <div className="flex items-center md:mb-2">
                    <span className="text-2xl font-semibold md:font-4xl">
                      {number}
                    </span>
                    <span className="text-emerald-400 font-semibold md:text-3xl">
                      +
                    </span>
                  </div>
                  <p className="text-sm text-zinc-400">
                    {t[labelKey]} {/* Dynamic label */}
                  </p>
                </div>
              ))}
              <img
                src="/images/logo.svg"
                alt="Logo"
                width={30}
                height={30}
                className="ml-auto md:w-[40px] md:h-[40px]"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
