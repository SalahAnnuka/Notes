import React, { useState, useEffect } from 'react';
import {BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import {useNavigate} from 'react-router-dom';
function List() {
  const [notes, setNotes] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // Add a state for loading status
  const [isEmpty, setIsEmpty] = useState(false); // Add a state for emptiness

  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    try {
      setIsLoading(true); // Indicate loading state
      const response = await fetch('http://localhost:7777/Notes');
      const data = await response.json();

      if (data.length === 0) { // Check if data array is empty
        setIsEmpty(true);
      } else {
        setNotes(data);
      }
      setIsLoading(false); // Update loading state after data is fetched
    } catch (error) {
      console.error('Error fetching data:', error);
      // Handle errors appropriately, e.g., display an error message
    }
  };

  
  const HandleClick = (ftitle,fbody) => {
    var data = {title: ftitle, body: fbody}
    useNavigate().push('/Note',{data});
    console.log(data);
  }

  // Render based on loading and emptiness states
  if (isLoading) {
    return <div className='List'>Loading...</div>;
  } else if (isEmpty) {
    return <div className='List'>No notes here :P</div>;
  } else {
    return (
      <div className='List'>
        {notes.map((note) => (
          <Link to={{ pathname: '/Note' }} className='icon' onClick={()=>HandleClick(note.title,note.body)}>
            <div className='title'>{note.title}</div>
          </Link>
        ))}
      </div>
    );
  }
}

export default List;
