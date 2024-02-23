import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Home from './Home/Home.js'

function Window(){
  return (
    <div className="Window">
      <h2 className='create'>Create Note</h2>
      <textarea className="title"></textarea>
      <div className="brow">
        <button className="btn cancel">Cancel</button>
        <Link className="btn confirm" to="/Note">Confirm</Link>
      </div>
    </div>
  );
}

function Dim(){
  return (
    <div className="Dim"></div>
  );
}



function App() {
  return (
    <div className="App">
      <Dim/>
      <Router>
        <Routes>
          <Route  exact path='/' element={<Home/>}/>
          <Route  exact path='/Note' element={<Note/>}/>
          <Route  exact path='/Edit' element={<Edit/>}/>
        </Routes>
    </Router>
    <Window/>
    </div>
  );
}

export default App;