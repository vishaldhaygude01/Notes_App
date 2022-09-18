import './App.css';
import Header from './components/header/header';
import AddNote from './components/addnote/addnote';
import Showtnote from './components/shownote/shownote';
import { useState, useEffect } from 'react'
import axios from 'axios';
function App() {

  const [noteList, setnoteList] = useState([])
  useEffect(() => {
    axios.get("http://localhost:3001/api/getAll")
      .then(res => setnoteList(res.data))
  }, [])



  return (
    <div className="App">

      <Header />
      <AddNote noteList={noteList} setnoteList={setnoteList} />
      <Showtnote noteList={noteList} setnoteList={setnoteList} />
    </div>
  );
}

export default App;
