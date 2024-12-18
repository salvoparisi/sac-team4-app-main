import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css'
import db from './database/db'
import HomePage from './Pages/HomePage';
import Contacts from './Pages/Contacts';
import GlobalContext from './contexts/GlobalContext';

function App() {

  const [travels, setTravels] = useState(db)
  const [filteredParticipants, setFilteredParticipants] = useState([])

  console.log(db);
  console.log(travels);



  return (
    <>

      <GlobalContext.Provider value={{ travels, setTravels, filteredParticipants, setFilteredParticipants }}>

        <BrowserRouter>
          <Routes>

            <Route index element={<HomePage />} />
            <Route path='/contacts/:id' element={<Contacts />} />
          </Routes>

        </BrowserRouter>
      </GlobalContext.Provider>
    </>
  )
}

export default App
