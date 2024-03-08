import { useState, useContext, useReducer } from 'react'
import './App.css'
import Context from './Context.js';
import reducer from './reducer.js';
import MainContent from './MainContent.jsx';
import Header from './Header.jsx';
import Footer from './Footer.jsx';

function App() {

  const contextObject = {
    barHeight: 100,
    barWidth: 100
  };
  const [state, dispatch] = useReducer(reducer, contextObject)

  return (
    <>
      <Context.Provider value={{ state, dispatch }}>
        <Header />
        <MainContent />
        <Footer />
      </Context.Provider >
    </>
  )
}

export default App
