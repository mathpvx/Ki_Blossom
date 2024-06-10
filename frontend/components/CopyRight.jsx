import React from "react";

const CopyRight = () => {
  return (
    <div className="copyright">
      <p>
        &copy; {new Date().getFullYear()} <br /> Created by
        <a
          href="https://www.linkedin.com/in/mathilde-pavaux-171b81193/"
          target="_blank"
          rel="noreferrer"
        >
          Mathilde Pavaux
        </a>
      </p>
    </div>
  );
};

export default CopyRight;
