import React, { useState, useEffect, useLayoutEffect } from "react";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import SingleNotes from "../SingleNotes/SingleNotes";
import "./Notes.css";
import { FaEye } from "react-icons/fa";

const Notes = ({
  id,
  title,
  details,
  isOverDue,
  dueDate,
  status,
  index,
  allNotes,
  setAllNotes,
  setNotes,
  setEditingId,
  setEditMode,
  searchMode,
}) => {
  // .........handleDeleting.........function for deleting any Notes.....

  const handleDelete = () => {
    if (window.confirm()) {
      const filteredData = allNotes.filter((item) => item.id !== id);
      setAllNotes(filteredData);
      setNotes({
        title: "",
        details: "",
      });
    }
  };

  // .........handleEditing.........function for editing any Notes.....

  const handleEdit = (curId) => {
    const res = allNotes.find((item) => item.id == curId);
    setNotes(res);
    setEditMode(true);
    setEditingId(id);
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  //..............handleSingleNotes.............
  const [openSingleNotes, setOpenSingleNotes] = useState(false);

  // Managing dates...........
  let mydate =
    new Date(dueDate).getDate() >= 10
      ? new Date(dueDate).getDate()
      : "0" + new Date(dueDate).getDate();
  let mymonth =
    new Date(dueDate).getMonth() + 1 >= 10
      ? new Date(dueDate).getMonth() + 1
      : "0" + new Date(dueDate).getMonth();
  let myyear = new Date(dueDate).getFullYear();

  useEffect(() => {
    if (new Date() > new Date(dueDate)) {
      setAllNotes(
        allNotes.map((item, ind) => {
          if (ind == index) {
            return { ...item, isOverDue: true };
          }
          return item;
        })
      );
    }
  }, []);

  return (
    <>
      <section className="notes-sec">
        <div
          className="status-div"
          style={{
            backgroundColor:
              status == "Open"
                ? "rgba(100, 13, 100, 0.759)"
                : status == "Working"
                ? "rgba(255, 166, 0, 0.764)"
                : "rgba(0, 128, 0, 0.745)",

            fontSize: "12px",
          }}
        >
          {status}
        </div>
        <div
          className="view-div"
          title="View Notes"
          onClick={() => setOpenSingleNotes(true)}
        >
          <FaEye />
        </div>
        <div className="content-div">
          {title && title.length > 19 ? (
            <h3>
              {title.slice(0, 19)}
              <span className="fullview-span">...</span>
            </h3>
          ) : (
            <h3>{title}</h3>
          )}
          {details && details.length > 92 ? (
            <p>
              {details.slice(0, 92)}
              <span
                className="fullview-span"
                onClick={() => setOpenSingleNotes(true)}
              >
                ...fullview
              </span>
            </p>
          ) : (
            <p>{details}</p>
          )}
        </div>

        <div
          className="btn-div"
          style={{
            background:
              isOverDue && status != "Done" ? "rgba(255, 68, 0, 0.605)" : null,
          }}
        >
          <div className="date-sec">
            Deadline - {mydate}.{mymonth}.{myyear}
          </div>
          <div className="btn-sec">
            <button
              style={{ visibility: searchMode ? "hidden" : "visible" }}
              onClick={() => handleEdit(id)}
              title="Edit Notes"
            >
              <AiFillEdit />
            </button>
            <button
              onClick={() => handleDelete(index)}
              style={{
                color: "rgba(241, 15, 15, 0.714)",
                visibility: searchMode ? "hidden" : "visible",
              }}
              title="Delete Notes"
            >
              <AiFillDelete />
            </button>
          </div>
        </div>

        <SingleNotes
          open={openSingleNotes}
          setOpen={setOpenSingleNotes}
          allNotes={allNotes}
          setAllNotes={setAllNotes}
          id={id}
        />
      </section>
    </>
  );
};

export default Notes;
