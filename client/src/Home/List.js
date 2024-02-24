import React, { useState, useEffect } from 'react';

function List() {
    const [notes, setNotes] = useState([]);

    useEffect(() => {
        fetchNotes();
    }, []);

    const fetchNotes = async () => {
        try {
            const response = await fetch('/api/notes');
            const data = await response.json();
            setNotes(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    return (
        <div className='List'>
            {notes.map((note) => (
                <div className='preview' key={note.id}>
                    <div className='title'>{note.title}</div>
                    <div className='body'>{note.body}</div>
                </div>
            ))}
        </div>
    );
}

export default List;
