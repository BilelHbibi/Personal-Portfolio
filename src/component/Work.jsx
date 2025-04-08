import React from "react";
import ProjectCard from "./ProjectCard";
import useTranslation from "../useTranslation"; // Assuming you have a custom hook for translation

const works = [
  {
    imgSrc: "/images/projet/Pizza/pizza1.png",
    title: "Pizza delivery",
    tags: ["Web-design", "Development"],
    projectLink: "https://bilelhbibi.github.io/Pizza-Delivery/",
  },
  {
    imgSrc: "/images/projet/Education/education.png",
    title: "Education academy",
    tags: ["Web-design", "Development"],
    projectLink: "https://scintillating-smakager-860376.netlify.app/",
  },
  {
    imgSrc: "/images/projet/Agence/agence.png",
    title: "Travel agency",
    tags: ["Web-design","API"],
    projectLink: "https://agence-de-voyage-42by.onrender.com/",
  },
  {
    imgSrc: "/images/projet/BTS BK/banque.png",
    title: "BTS BANK",
    tags: ["Web-design","API"],
    projectLink: "https://bts-banque.onrender.com/",
  },
  {
    imgSrc: "/images/projet/RentUp/Group 1.png",
    title: "RentUp website",
    tags: ["eCommerce", "Development"],
    projectLink: "https://rent-up-6zd0.onrender.com",
  },
  {
    imgSrc: "/images/projet/Hotel/Group 1.png",
    title: "hotel booking",
    tags: ["Web-design", "Development"],
    projectLink: "https://tranquil-licorice-79e76f.netlify.app/",
  },
];

const Work = () => {
  const t = useTranslation(); // Custom hook for translations

  return (
    <>
      <section className="section" id="work">
        <div className="container">
          <h2 className="headline-2 mb-8 reveal-up">{t.portfolioHighlights}</h2>{" "}
          {/* Translated text */}
          <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
            {works.map(({ imgSrc, title, tags, projectLink }, key) => (
              <ProjectCard
                key={key}
                imgSrc={imgSrc}
                title={title}
                tags={tags}
                projectLink={projectLink}
                classes="reveal-up"
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Work;
