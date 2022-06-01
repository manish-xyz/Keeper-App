import React from 'react';
import Header from './Header';
import Footer from './Footer';

function Note() {

    return (
        <div>
            <Header />
            <div className="note">
                <h1>This is the note title</h1>
                <p>This is the note content</p>
            </div>
            <Footer />
        </div>
    )
}

export default Note;


