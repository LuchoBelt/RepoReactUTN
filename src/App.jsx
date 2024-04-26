import React from 'react'
import Table from './components/practicaDos/table/Table';
import './App.css'
import PracticaUno from './components/practicaUno/PracticaUno'

const App = () => {
  const netIncomes = [
    { brand: 'McDonalds', income: 1291283 },
    { brand: 'Burger King', income: 1927361 },
    { brand: 'KFC', income: 1098463 }
  ];

  const totalIncome = netIncomes.reduce((acc, curr) => acc + curr.income, 0);
  let averageIncome = totalIncome / netIncomes.length;
  averageIncome = averageIncome.toFixed(2)

  return (
    <div>
      <h1>Tabla con marca y respectivo ingreso neto</h1>
      <Table data={netIncomes}/>
      <p>El promedio de ingreso neto es: <b>{averageIncome}</b></p>
    </div>
  );
};

export default App;