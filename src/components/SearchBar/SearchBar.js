import React from "react";
import "./SearchBar.css";
import { AiOutlineSearch } from "react-icons/ai";

const SearchBar = ({ allNotes, setAllNotes, setSearchMode }) => {
  // ...............handleSearch.........function for searching Notes.....

  const handleSearch = (e) => {
    if (!e.target.value) {
      setSearchMode(false);
      const data = JSON.parse(localStorage.getItem("AllNotes"));
      setAllNotes(data);
    } else {
      setSearchMode(true);
      const res = allNotes.filter((items) => {
        const data = Object.values(items).join(" ").toLowerCase();
        return data.includes(e.target.value.toLowerCase());
      });
      setAllNotes(res);
    }
  };

  return (
    <>
      <input
        type="search"
        placeholder="Search..."
        onChange={handleSearch}
        maxLength={25}
      />
      <span
        style={{
          fontSize: "20px",
          display: "inline-block",
          marginLeft: "-12px",
        }}
      >
        <AiOutlineSearch />
      </span>
    </>
  );
};

export default SearchBar;
