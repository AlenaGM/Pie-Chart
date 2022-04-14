import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {

  labels: ['MACRON', 'LE PEN', 'MÉLENCHON', 'ZEMMOUR', 'JADOT', 'Autres'],

  datasets: [
    {
      label: '# of Votes',
      data: [130422, 87744, 78062, 33353, 29948, 67610],
      backgroundColor: [
        'rgba(255, 99, 132, 0.6)',
        'rgba(54, 162, 235, 0.6)',
        'rgba(255, 206, 86, 0.6)',
        'rgba(75, 192, 192, 0.6)',
        'rgba(153, 102, 255, 0.6)',
        'rgba(255, 159, 64, 0.6)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1.3,
      hoverBackgroundColor: [
        'rgba(255, 99, 132, 0.9)',
        'rgba(54, 162, 235, 0.9)',
        'rgba(255, 206, 86, 0.9)',
        'rgba(75, 192, 192, 0.9)',
        'rgba(153, 102, 255, 0.9)',
        'rgba(255, 159, 64, 0.9)',
      ],
    },
  ],

};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Election présidentielle 2022
        </h1>
        <div>Résultats au 1er tour: Haute-Savoie (74)</div>
      </header>
      <main className="App-chart">
        <Pie data={data} />
      </main>
      <footer>
        <a
          className="App-link"
          href="https://www.resultats-elections.interieur.gouv.fr/presidentielle-2022/084/074/index.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          Source: Ministère de l’Intérieur
        </a>
      </footer>
    </div>
  );
}

export default App;
