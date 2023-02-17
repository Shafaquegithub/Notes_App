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
  editingIndex,
  setEditingIndex,
}) => {
  // setDate
  // const setDate = () => {
  //   let date = new Date();
  //   let day = date.getDate();
  //   let allMonths = [
  //     "Jan",
  //     "Feb",
  //     "Mar",
  //     "Apr",
  //     "May",
  //     "Jun",
  //     "Jul",
  //     "Aug",
  //     "Sep",
  //     "Oct",
  //     "Nov",
  //     "Dec",
  //   ];
  //   let month = date.getMonth();
  //   let year = date.getFullYear();
  //   let fullDate = `${day > 10 ? day : "0" + day} ${allMonths[month]} ${year}`;
  //   return fullDate;
  // };
  // .........handleChange.........Getting data from Input Fields.....

  const handleChange = (e) => {
    if (editMode) {
      setNotes({
        ...notes,
        [e.target.name]: e.target.value,
        status: "Open",
      });
    } else {
      setNotes({
        ...notes,
        [e.target.name]: e.target.value,
        date: new Date().toDateString(),
        status: "Open",
      });
    }
  };

  // .........handleSubmit.........Function for adding new data OR to edit existing one.....

  const handleSubmit = (e) => {
    e.preventDefault();

    if (notes.title && notes.details) {
      if (editMode) {
        setAllNotes(
          allNotes.map((e, index) => {
            if (index == editingIndex) {
              return notes;
            }
            return e;
          })
        );
        setEditMode(false);
        setEditingIndex(null);
      } else {
        setAllNotes([...allNotes, notes]);
      }
      setNotes({
        title: "",
        details: "",
        date: "",
        status: "",
      });
      let dateInput = document.getElementById("date");
      dateInput.value = "";
      dateInput.type = "text";
    } else {
      alert("Please fill both input fields to save your Notes");
    }
  };

  return (
    <>
      <section className="form-sec">
        <form onSubmit={handleSubmit}>
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
            ></textarea>
          </div>
          <button type="submit" title="Save">
            <IoAdd />
          </button>
        </form>
      </section>
    </>
  );
};

export default AddNotes;
