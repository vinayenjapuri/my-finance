import React from 'react';
import './App.css';
import { MfSideBar } from './shared/mf-side-bar/mf-side-bar';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <MfSideBar />
      <main className="main-content">
        <Outlet />
      </main>
    </div>
  );
}

export default App;
