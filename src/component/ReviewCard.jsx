import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

const ReviewCard = ({
  content,
  name,
  imgSrc,
  societe,
  index,
  imageLink,
}) => {
  const [isFullScreen, setIsFullScreen] = useState(false);

  const ratings = new Array(5).fill(null).map((_, i) => ({
    icon: "star",
    style: {
      fontVariationSettings:
        i < (index === 2 ? 5 : 5) ? '"FILL" 1' : '"FILL" 0',
    },
    className: i < (index === 2 ? 5 : 5) ? "text-yellow-300" : "text-gray-500",
  }));

  // Disable scroll when the image is full screen
  useEffect(() => {
    if (isFullScreen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto"; // Cleanup when closing fullscreen
    };
  }, [isFullScreen]);


  // Open image in full-screen mode
  const handleFullScreen = () => {
    setIsFullScreen(true);
  };

  // Close full-screen mode
  const handleCloseFullScreen = () => {
    setIsFullScreen(false);
  };

  return (
    <div className="bg-zinc-800 p-5 rounded-xl min-w-[320px] flex flex-col lg:w-auto">
      <div className="flex items-center justify-between mb-3">
        <span className="text-white">{name}</span>
        <div className="flex gap-1">
          {ratings.map(({ icon, style, className }, key) => (
            <span
              className={`material-symbols-rounded text-[18px] ${className}`}
              key={key}
              style={style}
            >
              {icon}
            </span>
          ))}
        </div>
      </div>

      <p className="text-zinc-400 mb-8">{content}</p>

      <div className="flex items-center gap-2 mt-auto">
        <figure className="img-box rounded-lg">
          <img
            src={imgSrc}
            alt={name}
            className="img-cover-2"
            width={40}
            height={40}
            loading="lazy"
          />
        </figure>

        <div className="flex items-center justify-between w-full">
          {/* Infos */}
          <div>
            <p className="text-white">{societe}</p>
            <p className="text-xs text-zinc-400 -tracking-wider">
              Online Courses
            </p>
          </div>

          {/* Buttons */}
          <div className="flex items-center">
      
            <button
              className="flex items-center gap-2 bg-gray-700 text-white px-3 py-2 rounded-lg hover:bg-gray-600"
              onClick={handleFullScreen}
            >
              <span className="material-symbols-rounded text-2xl">
                fit_screen
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Full-screen Mode */}
      {isFullScreen && (
        <div className="fixed inset-0 bg-black/80 flex justify-center items-center z-50">
          {/* Close Button */}
          <button
            onClick={handleCloseFullScreen}
            className="absolute top-4 right-4 text-white text-4xl bg-gray-800 rounded-full p-2 z-50 hover:bg-gray-700"
          >
            &times;
          </button>

          {/* Full-screen Image */}
          <img
            src={imageLink} // Use dynamic URL
            alt={`Full screen view of ${name}`} // Add alt text for accessibility
            className="w-full max-w-4xl object-contain"
          />
        </div>
      )}
    </div>
  );
};

ReviewCard.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  societe: PropTypes.string.isRequired,
  imageLink: PropTypes.string.isRequired, // Ensure this is a string
};

export default ReviewCard;
