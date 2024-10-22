import React from "react";
import Projet from "./Projet";

const index = () => {
  return (
    <>
      {/* Projet */}

      <div className="container">
        <div className="tokyo_tm_services">
          <div className="tokyo_tm_title">
            <div className="title_flex">
              <div className="left">
                <span>Le Projet</span>
                <h3>Ki Blossom, le bien-être accessible à tous.</h3>
              </div>
            </div>
          </div>
          {/* End tokyo_tm_title */}

          <div className="list">
            <ul>
              <Projet />
            </ul>
          </div>
          {/* End list */}
        </div>
      </div>
      {/* End .container */}

      {/* /Projet */}
    </>
  );
};

export default index;
