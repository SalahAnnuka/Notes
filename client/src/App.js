import Home from './Home/Home';
import Note from './Note/Note';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';


function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/Note' element={<Note/>}/>
      </Routes>
    </Router>
  );
}

export default App;
