import React, { useEffect, useLayoutEffect, useState } from "react";
import "./SingleNotes.css";
import { RiCloseFill } from "react-icons/ri";
import { CgNotes } from "react-icons/cg";

const SingleNotes = ({ id, open, setOpen, allNotes, setAllNotes }) => {
  const { title, details, dueDate, status, date, isOverDue } = allNotes.find(
    (item) => {
      return item.id == id;
    }
  );

  const changeStatus = (statusValue) => {
    setAllNotes(
      allNotes.map((item) => {
        if (item.id == id) {
          return { ...item, status: statusValue };
        }
        return item;
      })
    );
  };
  const setDate = () => {
    let createdDate = new Date(date).toDateString().split(" ");
    let formatedCreatedDate = `${createdDate[2]} ${createdDate[1]} ${createdDate[3]}`;
    let expiryDate = new Date(dueDate).toDateString().split(" ");
    let formatedExpiryDate = `${expiryDate[2]} ${expiryDate[1]} ${expiryDate[3]}`;
    return { formatedCreatedDate, formatedExpiryDate };
  };

  return (
    <section
      className="singleNotes-sec"
      style={{ display: open ? "flex" : "none" }}
      onClick={() => setOpen(false)}
    >
      <div className="details" onClick={(e) => e.stopPropagation()}>
        <span className="closeBtn" onClick={() => setOpen(false)}>
          <RiCloseFill style={{ color: "white" }} />
        </span>
        <h1 className="details-icon">
          <CgNotes />
        </h1>
        <h2>{title}</h2>
        <p className="details-p">{details}</p>

        <br />
        <br />

        <h4>Status:-</h4>

        <div className="status-btn-div">
          <div
            onClick={() => changeStatus("Open")}
            style={{
              borderColor: status == "Open" && "black",
            }}
          >
            Open
          </div>
          <div
            onClick={() => changeStatus("Working")}
            style={{
              borderColor: status == "Working" && "black",
            }}
          >
            Working{" "}
          </div>
          <div
            onClick={() => changeStatus("Done")}
            style={{
              borderColor: status == "Done" && "black",
            }}
          >
            Done
          </div>
        </div>
        <div className="date-div">
          <p>Created: {setDate().formatedCreatedDate}</p>
          <p>Expires: {dueDate ? setDate().formatedExpiryDate : "Not given"}</p>
        </div>
        {isOverDue && status != "Done" && (
          <div className="overdue-div">This Project is Over Due</div>
        )}
      </div>
    </section>
  );
};

export default SingleNotes;
