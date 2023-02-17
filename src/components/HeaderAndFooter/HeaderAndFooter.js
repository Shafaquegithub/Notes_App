import React from "react";
import "./HeaderAndFooter.css";
import { SiMicrosoftonenote } from "react-icons/si";

const HeaderAndFooter = ({ header, footer }) => {
  return (
    <>
      {header ? (
        <header>
          <SiMicrosoftonenote
            style={{ fontSize: "30px", paddingRight: "10px" }}
          />
          Notes App
        </header>
      ) : null}

      {footer ? <footer>Shz Copyright @ 2022</footer> : null}
    </>
  );
};

export default HeaderAndFooter;
