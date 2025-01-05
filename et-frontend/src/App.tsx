import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Add from './routes/Add';
import Dashboard from './routes/Dashboard';
import Chart from './routes/Chart';
import Paper from './routes/Paper';
import Settings from './routes/Settings';
import Homepage from './routes/Homepage';


function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Homepage />}>
            <Route path="Dashboard" element={<Dashboard />} />
            <Route path="Add" element={<Add />} />
            <Route path="Chart" element={<Chart />} />
            <Route path="Paper" element={<Paper />} />
            <Route path="Settings" element={<Settings />} />
        </Route>
    </Routes>
</BrowserRouter>
  );
}

export default App;
