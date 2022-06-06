import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {

  let [notesList, setNoteList] = useState([]);

  function handleClick (note) {
    setNoteList( prevValue => {
      return  [...prevValue, note]
    });
  }

  function handleDelete(id) {

    setNoteList( prevValue => {
        return prevValue.filter( (item, index) =>{ 
          return  index !== id
        } );
    } );
  }
  
  return (
    <div>
      <Header />
      <CreateArea 
        click = {handleClick} 
      />
      { notesList.map( (item, index) => (
          <Note
          title = {item.title}
          content = {item.content}
          key = {index}
          id = {index}
          delete={handleDelete}
           />
      )) }
      <Footer />
    </div>
  );
}

export default App;
