import React from "react";
import preloader from "../../assets/img/preloader.gif";

function Loader() {
  return (
    <div className="loader">
      <div className="loader__container">
        <img src={preloader} alt="Loading..." />
      </div>
    </div>
  );
}

export default Loader;
