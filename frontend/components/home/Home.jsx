"use client";
import React from "react";
import { ReactTyped } from "react-typed";
import Social from "../Social";

const Home = () => {
  return (
    <>
      <div className="tokyo_tm_home">
        <div className="home_content">
          <div className="avatar">
            <div
              className="image avatar_img"
              style={{
                backgroundImage: "url(/img/slider/1.webp)",
              }}
            ></div>
            {/* END AVATAR IMAGE */}
          </div>
          {/* END AVATAR */}
          <div className="details">
            <h3 className="name">Ki Blossom</h3>
            <h4 className="typer">
              <ReactTyped
                strings={[
                  "Fais le test.",
                  "Obtient un résultat personnalisé.",
                  "Améliore ton bien-être !",
                ]}
                loop
                typeSpeed={80}
              />
            </h4>

            <p className="job">
              La plateforme qui améliore ton bien-être en 5min.
            
            </p>
            {/* END JOB */}
            <Social />
          </div>
          {/* END DETAILS */}
        </div>
        {/* END HOME CONTENT */}
      </div>
      {/* END HOME */}
    </>
  );
};

export default Home;
