import React, { useEffect, useState } from "react";
import Notes from "../Notes/Notes";
import "./AllNotes.css";
import Pagination from "../Pagination/Pagination";

const AllNotes = ({
  allNotes,
  setAllNotes,
  setNotes,
  setEditingId,
  editMode,
  setEditMode,
  searchMode,
}) => {
  const notesPerPage = 4;
  const [pageNum, setPageNum] = useState(1);
  const start = pageNum * notesPerPage - notesPerPage;
  const end = pageNum * notesPerPage;
  console.log([...allNotes].reverse());
  return (
    <>
      <h3 className="notes-heading">Your Notes</h3>

      {allNotes && allNotes.length == 0 ? (
        <h3 style={{ marginTop: "100px" }}>Sorry! No notes available.</h3>
      ) : (
        <section className="allNotes-sec">
          {allNotes &&
            [...allNotes]
              .reverse()
              .slice(start, end)
              .map((items, index) => (
                <Notes
                  key={index}
                  {...items}
                  index={index}
                  allNotes={allNotes}
                  setAllNotes={setAllNotes}
                  setNotes={setNotes}
                  setEditingId={setEditingId}
                  editMode={editMode}
                  setEditMode={setEditMode}
                  searchMode={searchMode}
                  setPageNum={setPageNum}
                />
              ))}
        </section>
      )}
      <Pagination
        allNotes={allNotes}
        pageNum={pageNum}
        setPageNum={setPageNum}
        notesPerPage={notesPerPage}
      />
    </>
  );
};

export default AllNotes;
