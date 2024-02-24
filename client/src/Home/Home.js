import './Home.css';
import React, { useState } from 'react';

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
    const [notes, setNotes] = useState([
        {
            id: 1,
            title: 'Meeting Agenda',
            body: '1. Discuss project timelines.\n2. Review budget allocations.\n3. Assign tasks for next week.'
        },
        {
            id: 2,
            title: 'Grocery List',
            body: '1. Milk\n2. Eggs\n3. Bread\n4. Apples\n5. Pasta\n6. Chicken\n7. Spinach'
        },
        {
            id: 3,
            title: 'Ideas for Website Redesign',
            body: '1. Implement responsive design.\n2. Update color scheme.\n3. Improve navigation.\n4. Add testimonials section.'
        }
    ]);

    return (
        <div className='Home'>
            <Navbar/>
            <div className='List'>
                {notes.map((note)=>(
                    <div className='preview' key={note.id}>
                        <div className='title'>{note.title}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Home;
