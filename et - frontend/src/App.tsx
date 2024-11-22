import React from 'react';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className='container'>
        <Sidebar />
        <Header />
    </div>
  );
}

export default App;
