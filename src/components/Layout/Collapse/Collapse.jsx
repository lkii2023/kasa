import React, { useState, useRef, useEffect } from "react";
import ArrowAnimation from "../ArrowAnimation/ArrowAnimation";

const Collapse = ({ title, children }) => {
  const [isContentVisible, setContentVisible] = useState(false);
  const [heightEl, setHeightEl] = useState();
  const refHeight = useRef();

  useEffect(() => {
    if (isContentVisible) {
      setHeightEl(`${refHeight.current.scrollHeight}px`);
    } else {
      setTimeout(() => {
        setHeightEl("0px");
      }, 300);
    }
  }, [isContentVisible]);

  const toggleContent = () => {
    setContentVisible(!isContentVisible);
  };

  return (
    <div className={`collapse ${isContentVisible ? "open" : "closed"}`}>
      <div className="banner">
        <h2>{title}</h2>
        <div className="arrow" onClick={toggleContent}>
          <ArrowAnimation isUp={isContentVisible} />
        </div>
      </div>
      <div
        ref={refHeight}
        className={`visiblecollapse ${isContentVisible ? "open" : "closed"}`}
        style={{ height: isContentVisible ? `${heightEl}` : "0" }}
      >
        {children}
      </div>
    </div>
  );
};

export default Collapse;
