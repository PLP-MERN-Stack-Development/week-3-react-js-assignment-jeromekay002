import { Routes, Route, Link } from "react-router-dom";
import { useState } from 'react';
import './App.css';

// Import your components here
import Button from './components/Button';
import Layout from "./components/Layout";
import TaskManager from './components/TaskManager';
// pages
import Home from './pages/Home';
import Counter from './pages/Counter';
import ApiData from "./pages/ApiData";

function App() {

  return (
    <Layout>
      {/* Layout contains both navbar + footer */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/tasks" element={<TaskManager />} />
        <Route path="/api" element={<ApiData />} />
      </Routes>

     
    </Layout>
  );
}

export default App; 