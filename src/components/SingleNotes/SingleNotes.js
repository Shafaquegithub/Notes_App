import React, { useEffect, useLayoutEffect, useState } from "react";
import "./SingleNotes.css";
import { RiCloseFill } from "react-icons/ri";
import { CgNotes } from "react-icons/cg";

const SingleNotes = ({ open, setOpen, allNotes, index, setAllNotes }) => {
  const { title, details, dueDate, status, date, isOverDue } = allNotes[index];

  const changeStatus = (statusValue, index) => {
    setAllNotes(
      allNotes.map((e, notesIndex) => {
        if (notesIndex == index) {
          return { ...e, status: statusValue };
        }
        return e;
      })
    );
  };
  // setDate function is for changing date formats.
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
        <p>{details}</p>

        <br />

        <h4>Status:-</h4>

        <div className="status-btn-div">
          <div
            onClick={() => changeStatus("Open", index)}
            style={{
              borderColor: status == "Open" && "black",
            }}
          >
            Open
          </div>
          <div
            onClick={() => changeStatus("Working", index)}
            style={{
              borderColor: status == "Working" && "black",
            }}
          >
            Working{" "}
          </div>
          <div
            onClick={() => changeStatus("Done", index)}
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
