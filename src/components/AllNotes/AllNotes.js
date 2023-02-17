import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import Notes from "../Notes/Notes";
import "./AllNotes.css";

const AllNotes = ({
  allNotes,
  setAllNotes,
  setNotes,
  setEditingIndex,
  editMode,
  setEditMode,
  searchMode,
}) => {
  const handlePageClick = (data) => {
    console.log(data.selected);
  };
  return (
    <>
      <h3 className="notes-heading">Your Notes</h3>

      {allNotes.length == 0 ? (
        <h3 style={{ marginTop: "100px" }}>Sorry! No notes available.</h3>
      ) : (
        <section className="allNotes-sec">
          {allNotes &&
            allNotes.map((items, index) => (
              <Notes
                key={index}
                {...items}
                index={index}
                allNotes={allNotes}
                setAllNotes={setAllNotes}
                setNotes={setNotes}
                setEditingIndex={setEditingIndex}
                editMode={editMode}
                setEditMode={setEditMode}
                searchMode={searchMode}
              />
            ))}
        </section>
      )}
    </>
  );
};

export default AllNotes;
