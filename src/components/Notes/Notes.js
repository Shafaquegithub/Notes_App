import React, { useState } from "react";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import SingleNotes from "../SingleNotes/SingleNotes";
import "./Notes.css";

const Notes = ({
  notes,
  title,
  details,
  date,
  status,
  index,
  allNotes,
  setAllNotes,
  setNotes,
  editingIndex,
  setEditingIndex,
  setEditMode,
  searchMode,
}) => {
  // .........handleDeleting.........function for deleting any Notes.....

  const handleDelete = (index) => {
    if (window.confirm()) {
      const filteredData = allNotes.filter(
        (items, filterIndex) => index !== filterIndex
      );
      setAllNotes(filteredData);
      setNotes({
        title: "",
        details: "",
      });
    }
  };

  // .........handleEditing.........function for editing any Notes.....

  const handleEdit = (index) => {
    setNotes(allNotes[index]);
    setEditMode(true);
    setEditingIndex(index);
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  //..............handleSingleNotes.............
  const [openSingleNotes, setOpenSingleNotes] = useState(false);

  return (
    <>
      <section className="notes-sec">
        <div
          className="status-div"
          style={{
            backgroundColor:
              status == "Open"
                ? "purple"
                : status == "Working"
                ? "orange"
                : status == "Done"
                ? "green"
                : "red",
            fontSize: "12px",
          }}
        >
          {status}
        </div>
        <div className="content-div" onClick={() => setOpenSingleNotes(true)}>
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
              <span className="fullview-span">...fullview</span>
            </p>
          ) : (
            <p>{details}</p>
          )}
        </div>

        <div className="btn-div">
          <div className="date-sec">
            {date && date.split(" ")[2]} {date && date.split(" ")[1]}{" "}
            {date && date.split(" ")[3]}
          </div>
          <div className="btn-sec">
            <button
              style={{ visibility: searchMode ? "hidden" : "visible" }}
              onClick={() => handleEdit(index)}
            >
              <AiFillEdit />
            </button>
            <button
              onClick={() => handleDelete(index)}
              style={{
                color: "rgba(241, 15, 15, 0.714)",
                visibility: searchMode ? "hidden" : "visible",
              }}
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
          index={index}
        />
      </section>
    </>
  );
};

export default Notes;
