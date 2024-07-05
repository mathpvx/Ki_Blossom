import React from "react";

const Intro = () => {
  const introContent = {
    image: "/img/slider/1.jpg",
    name: "Mathilde Pavaux",
    designation: "Développeuse Logiciels et Naturopathe Heilpraktiker.",
    text: (
      <>
        <p>
          Je suis Mathilde Pavaux, naturopathe et développeuse passionnée par le bien-être. À travers mon parcours en parapharmacie et à mon compte, j'ai pu constater une chose: il y a tout un mode entre la théorie et la pratique. 
        </p>
        <p>
          Je crois fermement que le bien-être doit être accessible à tous, indépendamment du budget ou de l'emploi du temps. C'est pourquoi j'ai utilisé ma double compétence pour créé Ki Blossom, une application qui offre des recommandations personnalisées en quelques minutes, pour aider chacun à améliorer sa qualité de vie de manière simple et efficace.
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
