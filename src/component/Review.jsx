import React from "react";
import ReviewCard from "./ReviewCard";
import useTranslation from "../useTranslation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Review = () => {
  const t = useTranslation();

const reviews = [
  {
    content: t.reviewsContent.webDesign,
    name: "Web design",
    imgSrc: "/images/meshkat.jpg",
    societe: "Meshkat Education",
    downloadLink: "/images/certif-web-design.pdf",
    imageLink: "/images/certif-web-design.jpg",
  },
  {
    content: t.reviewsContent.javascript,
    name: "Javascript",
    imgSrc: "/images/meshkat.jpg",
    societe: "Meshkat Education",
    downloadLink: "/images/certif-javascript.pdf",
    imageLink: "/images/certif-javascript.jpg",
  },
  {
    content: t.reviewsContent.onlineTech,
    name: "React Framework",
    imgSrc: "/images/dyma-icon.png",
    societe: "Dyma",
    downloadLink: "/images/Certificat-react.pdf",
    imageLink: "/images/Certificat-react.jpg",
  },
];

  return (
    <div className="section overflow-hidden" id="reviews">
      <div className="container">
        <h2 className="headline-2 mb-8 reveal-up">{t.ourCertifications}</h2>
        <div className="grid gap-x-3 gap-y-4 grid-cols-[repeat(auto-fill,_minmax(320px,_1fr))]">
          {reviews.map(({ content, name, imgSrc, societe, downloadLink, imageLink }, key) => (
            <ReviewCard
              key={key}
              index={key}
              name={name}
              content={content}
              imgSrc={imgSrc}
              societe={societe}
              downloadLink={downloadLink}
              imageLink={imageLink}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Review;
