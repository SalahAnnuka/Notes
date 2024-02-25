import './Note.css';
import Body from './Body'
import React from 'react';
import { useLocation , BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';



function Navbar(){
    return (
        <div className='NoteNav'>
            <div className="notenav-options">
                <Link to="/" className="notenav-option">Back</Link>
            </div>
        </div>
    );
}

function Note(props){
    return (
        <div className='Home'>
            <Navbar/>
            <Body/>
        </div>
    );
}

export default Note;
