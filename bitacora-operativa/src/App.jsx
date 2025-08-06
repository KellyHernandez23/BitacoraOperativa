import React from 'react';
import './App.css';
import Header from './components/Header.jsx';
import FlexGrid from './components/Table.jsx';

function App() {
  return (
    <div className="app">
      <Header />
      <main className="main-content">
        <section className="bitacora-section">
          <h2 className='title'>Bitácora Operativa</h2>
          <h3>Bitácora #21</h3>
          <p>Primer turno</p>
          
          <div className="table-container">
            <FlexGrid />              
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
