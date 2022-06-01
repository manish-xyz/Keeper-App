import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";

 function App() {
    return (
        <div>
            <Header />
            {notes.map(yourNote => (
                <Note
                    key={yourNote.key}
                    title={yourNote.title}
                    content={yourNote.content}
                />

            ))}
            <Footer />
        </div>
    );
}

export default App;
