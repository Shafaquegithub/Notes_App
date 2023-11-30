import React from "react";
import "./HeaderAndFooter.css";
import { SiMicrosoftonenote } from "react-icons/si";

const HeaderAndFooter = ({ header, footer }) => {
  return (
    <>
      {header ? (
        <>
          <section className="header-sec">
            <header>
              <SiMicrosoftonenote
                style={{ fontSize: "30px", paddingRight: "10px" }}
              />
              Notes App
            </header>
          </section>
        </>
      ) : null}

      {footer ? <footer>Shz Copyright @ 2022</footer> : null}
    </>
  );
};

export default HeaderAndFooter;
