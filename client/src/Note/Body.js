import React from 'react';
import Note from './Note';

function Body(){
    return (
        <div className="noteBody">
            <div className="noteTitle">{Note.title}</div>
            <div className="noteBody">{Note.body}</div>
        </div>
    );
}

export default Body;