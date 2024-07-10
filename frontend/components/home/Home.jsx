"use client";
import React from "react";
import { ReactTyped } from "react-typed";

const Home = () => {
  return (
    <>
      <div className="tokyo_tm_home">
        <div className="home_content">
          <div className="details">
            <h3 className="name">Ki Blossom</h3>
            <h4 className="typer">
              <ReactTyped
                strings={[
                  "Fais le test.",
                  "Obtiens un résultat personnalisé.",
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
            <a href="/quiz" className="quiz-button">
              Faire le Quiz
            </a>
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
