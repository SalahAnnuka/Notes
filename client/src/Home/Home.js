import './Home.css';
import List from './List';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';


function Navbar(){
    return (
        <div className='Navbar'>
            <div className="navbar-title">My Notes</div>
            <div className="navbar-options">
                <a href="#" className="navbar-option">New</a>
            </div>
        </div>
    );
}

function Home() {
    const [ListContent, setListContent] = useState([]);
    function handleCancel(){

    }

    function handleCreate(data){   
        setListContent([notesContent,
              { id: notesContent.length+1, title: noteTitle, description:noteDescription , createdAt: current_time},
            ]);
            document.getElementById("showFormbtn").style.display = "block";
            document.getElementById("note-title").value = "" ; 
            document.getElementById("note-body").value = "" ; 
          
          }

    }
    const handleInput = event => {
        event.target.value
      };



    return (
        <div className='Home'>
             <div className='window'>
                <input id='nTit' onChange={handleInput} type='text' className='field' placeholder='Title...'/>
                <div className='option' onClick={handleCancel}>Cancel</div>
                <div className='option' onClick={()=>handleCreate()}>Create</div>
            </div>
            <div className="dim"></div>
            <Navbar/>
            <List/>
        </div>
    );
}

export default Home;
