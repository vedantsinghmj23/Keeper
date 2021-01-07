import React from "react";
import Footer from "./Footer.jsx";
import Header from "./Header.jsx";
import Note, { createNote } from "./Note.jsx";
import notes from "../notes.js";

var noteCards = notes.map(createNote)

function App() {
  return <div>
    <Header />
    {noteCards}
    <Footer />
  </div>
}

export default App;