import React from "react";
import { useState } from "react";
import Expenses from "./components/expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  const [expenses,setExpense] = useState([
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    }
  ]);
  const newExpense = (newExpense)=>{
     setExpense((prevExpense) => {
      return [newExpense,...prevExpense];
     })
  }
  return (
    <div>
      <NewExpense onSave={newExpense}/>
       <Expenses elements = {expenses} key={expenses.id}/>
    </div>
  );
}

export default App;
