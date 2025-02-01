import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Add from './routes/Add';
import Dashboard from './routes/Dashboard';
import Chart from './routes/Chart';
import Paper from './routes/Paper';
import Settings from './routes/Settings';
import Homepage from './routes/Homepage';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import { AuthProvider } from './components/AuthContext';  
import ProtectedRoute from './components/ProtectedRoute';


const App = () => {

  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<ProtectedRoute><Homepage /></ProtectedRoute>}>
                <Route path="dashboard" element={<Dashboard />} />
                <Route path="add" element={<Add />} />
                <Route path="chart" element={<Chart />} />
                <Route path="paper" element={<Paper />} />
                <Route path="settings" element={<Settings />} />
            </Route>
            <Route path="user/signin" element={<SignIn />} />
            <Route path="user/signup" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
    
  );
}

export default App;
