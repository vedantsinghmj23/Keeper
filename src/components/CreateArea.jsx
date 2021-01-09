import React from "react";

function CreateArea(props) {

  const [note, setNote] = React.useState({
    title: "",
    content: ""
  })

  function handleChange(event) {
    const { name, value } = event.target;
    if (name === "title") {
      setNote(function (old) {
        return {
          title: value,
          content: old.content
        }
      })
    } else {
      setNote(function (old) {
        return {
          title: old.title,
          content: value
        }
      })
    }
  }

  function handleClick(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    })
    event.preventDefault();

  }

  return (
    <div>
      <form>
        <input onChange={handleChange} name="title" placeholder="Title" value={note.title} />
        <textarea onChange={handleChange} name="content" placeholder="Take a note..."
          value={note.content} rows="3" />
        <button onClick={handleClick}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
