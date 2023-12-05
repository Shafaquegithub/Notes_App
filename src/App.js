import { useEffect, useState } from "react";
import "./App.css";
import AddNotes from "./components/AddNotes/AddNotes";
import AllNotes from "./components/AllNotes/AllNotes";
import HeaderAndFooter from "./components/HeaderAndFooter/HeaderAndFooter";
import SearchBar from "./components/SearchBar/SearchBar";

function App() {
  // ......Function for getting existing notes data from localStorage........

  const getLocalStorageList = () => {
    const list = localStorage.getItem("AllNotes");
    if (list) {
      return JSON.parse(list);
    } else {
      return [];
    }
  };

  // ................All States................

  const [allNotes, setAllNotes] = useState(getLocalStorageList());
  const [notes, setNotes] = useState({
    id: "",
    title: "",
    details: "",
    date: "",
    dueDate: "",
    status: "",
  });
  const [editMode, setEditMode] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [searchMode, setSearchMode] = useState(false);
  const [createMode, setCreateMode] = useState(false);
  const [pageNum, setPageNum] = useState(1);

  // .......function for updating LocalStorage when Notes are added or edited...........
  useEffect(() => {
    if (!searchMode) {
      localStorage.setItem("AllNotes", JSON.stringify(allNotes));
    }
  }, [allNotes]);

  return (
    <div className="App">
      <HeaderAndFooter header={true} footer={false} />
      <SearchBar
        allNotes={allNotes}
        setAllNotes={setAllNotes}
        setSearchMode={setSearchMode}
      />
      <AddNotes
        notes={notes}
        setNotes={setNotes}
        allNotes={allNotes}
        setAllNotes={setAllNotes}
        editMode={editMode}
        setEditMode={setEditMode}
        editingId={editingId}
        setEditingId={setEditingId}
        pageNum={pageNum}
        setPageNum={setPageNum}
      />
      <AllNotes
        allNotes={allNotes}
        setAllNotes={setAllNotes}
        setNotes={setNotes}
        setEditingId={setEditingId}
        editMode={editMode}
        setEditMode={setEditMode}
        searchMode={searchMode}
        pageNum={pageNum}
        setPageNum={setPageNum}
      />
      <HeaderAndFooter header={false} footer={true} />
    </div>
  );
}

export default App;
