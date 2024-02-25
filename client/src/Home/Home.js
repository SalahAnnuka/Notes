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
                <a href="#" className="navbar-option">Edit</a>
            </div>
        </div>
    );
}

function Home() {
    

    return (
        <div className='Home'>
            <Navbar/>
            <List/>
        </div>
    );
}

export default Home;
