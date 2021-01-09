import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {

  const [notes, setNotes] = React.useState([]);

  function addNote(note) {
    setNotes(old => {
      return [...old, note];
    });
  }

  function deleteNote(id) {
    setNotes(old => {
      return old.filter((item, index) => {
        return index !== id
      })
    })
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map(function (element, index) {
        return <Note key={index} id={index} title={element.title} content={element.content} delete={deleteNote} />
      })}
      <Footer />
    </div>
  );
}

export default App;