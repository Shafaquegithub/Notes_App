import React from "react";
import "./SingleNotes.css";
import { RiCloseFill } from "react-icons/ri";
import { CgNotes } from "react-icons/cg";

const SingleNotes = ({ open, setOpen, allNotes, index, setAllNotes }) => {
  // setDate function is for changing date formats.
  const setDate = () => {
    let createdDate = new Date(allNotes[index].date).toDateString().split(" ");
    let formatedCreatedDate = `${createdDate[2]} ${createdDate[1]} ${createdDate[3]}`;
    let expiryDate = new Date(allNotes[index].dueDate)
      .toDateString()
      .split(" ");
    let formatedExpiryDate = `${expiryDate[2]} ${expiryDate[1]} ${expiryDate[3]}`;
    return { formatedCreatedDate, formatedExpiryDate };
  };

  const changeStatus = ({ myE, index }) => {
    setAllNotes(
      allNotes.map((e, notesIndex) => {
        if (notesIndex == index) {
          myE.target.checked = true;
          return { ...e, status: myE.target.value };
        }
        return e;
      })
    );
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
        <h2>{allNotes[index].title}</h2>
        <p>{allNotes[index].details}</p>

        <br />

        <h4>Status:-</h4>

        <div className="status-btn-div">
          <div>
            Open:
            <input
              checked={allNotes[index].status == "Open" ? true : false}
              type="radio"
              name="status"
              value="Open"
              onChange={(myE) => changeStatus({ myE, index })}
            />
          </div>
          <div>
            Working:
            <input
              checked={allNotes[index].status == "Working" ? true : false}
              type="radio"
              name="status"
              value="Working"
              aria-label=""
              onChange={(myE) => changeStatus({ myE, index })}
            />
          </div>
          <div>
            {" "}
            Working: Done:
            <input
              checked={allNotes[index].status == "Done" ? true : false}
              type="radio"
              name="status"
              value="Done"
              onChange={(myE) => changeStatus({ myE, index })}
            />
          </div>
          <div>
            {" "}
            Over Due:
            <input
              checked={allNotes[index].status == "Over Due" ? true : false}
              type="radio"
              name="status"
              value="Over Due"
              onChange={(myE) => changeStatus({ myE, index })}
            />
          </div>
        </div>
        <div className="date-div">
          <p>Created: {setDate().formatedCreatedDate}</p>
          <p>
            Expired:{" "}
            {allNotes[index].dueDate
              ? setDate().formatedExpiryDate
              : "Not given"}
          </p>
        </div>
      </div>
    </section>
  );
};

export default SingleNotes;
