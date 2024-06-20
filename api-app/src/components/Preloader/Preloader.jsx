import React, { useState, useEffect } from "react";
import App from "../../App";
import Lottie from "react-lottie";
import * as location from "./1055-world-locations.json";
import "./Preloader.css";

const defaultOptions1 = {
  loop: true,
  autoplay: true,
  animationData: location.default,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const Preloader = () => {
  const [, setData] = useState([]);
  const [loading, setloading] = useState(undefined);
  const [completed, setcompleted] = useState(undefined);

  useEffect(() => {
    setTimeout(() => {
      setData(true);
      setloading(true);

      setTimeout(() => {
        setcompleted(true);
      }, 1000);
    }, 2000);
  }, []);
  return (
    <>
      {!completed ? (
        <>
          {!loading ? (
            <div className="loading">
              <div className="loader">
                <Lottie options={defaultOptions1} height={150} width={150} />
              </div>
            </div>
          ) : (
            <App />
          )}
        </>
      ) : (
        <>
          <div></div>
        </>
      )}
      ;
    </>
  );
};
export default Preloader;
 