import React from 'react';
import {Routes, Route} from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import FormTareas from './components/FormTareas';
import ListaTareas from './components/ListaTareas';
import { ContextProvider } from './context/GlobalContext';

function App() {
  return (
    <>
    <div className="h-screen text-white text-center p-10">
      <div className="container mx-auto h-full">
      
      <ContextProvider>
      <Header />
      <Routes>
        <Route path='/'  element={<ListaTareas />} />
        <Route path='/add' element={<FormTareas />} />
        <Route path='/edit/:id' element={<FormTareas />} />

      </Routes>
      </ContextProvider>

      </div>
    </div>
    </>
  );
}

export default App;
