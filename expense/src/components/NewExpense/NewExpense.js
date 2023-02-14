import React from "react";
import ExpenseForm from "./ExpenseForm";
import './NewExpense.css'

export default function NewExpense(props){
    const onSave = (expensesData)=>{
       const expenseData ={
        ...expensesData,
        id : Math.random().toString()
       } 
       props.onSave(expenseData);
    }
    return (<div className="new-expense">
        <ExpenseForm onSaveHandler={onSave}/>
    </div>)
}