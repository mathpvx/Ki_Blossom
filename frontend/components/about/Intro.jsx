import React from "react";

const Intro = () => {
  const introContent = {
    image: "/img/slider/1.jpg",
    name: "Mathilde Pavaux",
    designation: "Développeuse Logiciels, Naturopathe Heilpraktiker.",
    text: (
      <>
        <p>
          Hello, texte à venir.
        </p>
        <p>
          texte à venir.
        </p>
      </>
    ),
  };

  return (
    <>
      <div className="top_author_image">
        <img src={introContent.image} alt="about" />
      </div>
      <div className="about_title">
        <h3>{introContent.name}</h3>
        <span>{introContent.designation}</span>
      </div>
      <div className="about_text">{introContent.text}</div>
    </>
  );
};

export default Intro;
