import React from 'react';
import './App.css';
import Header from './components/Header.jsx';

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
            <table className="bitacora-table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Falla</th>
                  <th>Despr. tamenta</th>
                  <th>Reportado por</th>
                  <th>Fecha del reporte</th>
                  <th>Completado</th>
                  <th>Validado</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                {/* Additional rows would go here */}
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
