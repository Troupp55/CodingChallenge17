// src/App.js
//U61753810
import React from 'react';
import FancyText from './components/FancyText';
import TaskGenerator from './components/TaskGenerator';
import './App.css';

const App = () => {
  return (
    <div className="app">
      <FancyText title={true} text="Task Management and Motivation App" />
      <TaskGenerator />
      <footer>
        <FancyText title={false} text=" 2024 Tristen Roupp" />
      </footer>
    </div>
  );
};

export default App;
