
import React from 'react';
import { Provider,lightTheme } from '@adobe/react-spectrum';
import { Route, Routes } from 'react-router-dom';
import Sidebar from './Components/Sidebar'
import Header from './Components/Header';
import Airports_M from './Components/Airports'
import AirportDetails_M from './Components/Airportsdetails'
import './App.css';

function App() {
  return (
    <>
      <Header />
    <div className="app">
      <Sidebar />
      <Provider colorScheme="light" theme={lightTheme}>
      <Routes>
        <Route exact path='/' element={<Airports_M />} />
        <Route exact path='/airport-details' element={<AirportDetails_M /> } />
      </Routes>
      </Provider>
      </div>
    </>
  );
}


export default App;
