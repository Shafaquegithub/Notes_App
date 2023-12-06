import React, { useState } from "react";
import "./AddNotes.css";
import { IoAdd } from "react-icons/io5";

const AddNotes = ({
  allNotes,
  setAllNotes,
  notes,
  setNotes,
  editMode,
  setEditMode,
  editingId,
  setEditingId,
  pageNum,
  setPageNum,
}) => {
  const [error, setError] = useState("");

  const handleChange = (e) => {
    if (editMode) {
      setNotes({
        ...notes,
        [e.target.name]: e.target.value,
      });
    } else {
      setNotes({
        ...notes,
        [e.target.name]: e.target.value,
        date: new Date().toDateString(),
        status: "Open",
        id: new Date().valueOf(),
      });
    }
  };

  // .........handleSubmit.........Function for adding new data OR to edit existing one.....

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!notes.title || !notes.details || !notes.dueDate) {
      setError("Please fill all required fields");
      return;
    }
    // if (new Date() > new Date(notes.dueDate)) {
    //   setError("Please select future date");
    //   return;
    // }
    if (editMode) {
      setAllNotes(
        allNotes.map((item) => {
          if (item.id == editingId) {
            return {
              ...item,
              ...notes,
            };
          }
          return item;
        })
      );
      setEditMode(false);
      setEditingId(null);
    } else {
      setAllNotes([...allNotes, notes]);
      setPageNum(1);
    }
    setNotes({
      title: "",
      details: "",
      date: "",
      status: "",
    });
    setError("");
    let dateInput = document.getElementById("date");
    dateInput.value = "";
    dateInput.type = "text";
  };

  return (
    <>
      <section className="form-sec">
        <form onSubmit={handleSubmit}>
          {error && <div className="tooltip">{error}</div>}
          <input
            id="date"
            style={{
              fontSize: "14px",
              fontWeight: 600,
              padding: "0 0 10px 2px",
            }}
            name="dueDate"
            type="text"
            placeholder="Due Date"
            onFocus={(e) => {
              e.target.type = "date";
            }}
            onBlur={(e) => {
              e.target.type = "text";
            }}
            onChange={handleChange}
          />
          <br />
          <input
            type="text"
            placeholder="Title"
            name="title"
            onChange={handleChange}
            value={notes.title}
            maxLength={40}
          />

          <br />

          <div>
            <textarea
              placeholder="Add Notes..."
              name="details"
              onChange={handleChange}
              value={notes.details}
              maxLength={800}
              className="textarea"
            ></textarea>
          </div>
          <button type="submit" title="Save" style={{ zIndex: 1000 }}>
            <IoAdd />
          </button>
        </form>
      </section>
    </>
  );
};

export default AddNotes;
