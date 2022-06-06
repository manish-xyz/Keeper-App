import React, {useState} from "react";

function CreateArea(props) {

  let [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {

    let { name, value } = event.target;

    setNote(prevValue => {
        return {
          ...prevValue,
          [name]: value
        };
    });
  };

  function submit(event) {

    props.click(note);
    event.preventDefault();
  }

  return (
    <div>
      <form>
        <input 
        onChange = {handleChange} 
        name="title" 
        placeholder="Title" />
        <textarea 
        onChange = {handleChange} 
        name="content" placeholder="Take a note..." 
        rows="3" />
        <button onClick={submit}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
