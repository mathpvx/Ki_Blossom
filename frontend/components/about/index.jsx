"use client";

import Intro from "./Intro";

const AboutMain = () => {
  return (
    <>
      <div className="container">
        <div className="tokyo_tm_about">
          <div className="tokyo_tm_title">
            <div className="title_flex">
              <div className="left">
                <span>A propos</span>
                <h3>Qui suis-je ?</h3>
              </div>
            </div>
          </div>
          {/* End title */}

          <Intro />

          <div className="tokyo_tm_button" data-position="left">
            <a href="/img/cv.pdf" download>
              <span>Télécharger CV</span>
            </a>
          </div>
        </div>
      </div>
      {/* End .container */}

      {/* /ABOUT */}
    </>
  );
};

export default AboutMain;
