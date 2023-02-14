import React from 'react'
import Card from '../UI/Card'
import { useState } from 'react'
import ExpensesFilter from './ExpensesFilter'
import './Expenses.css'
import ExpenseList from './ExpenseList'

export default function Expenses(props) {
    const [filteredYear,setFilteredYear]=useState('2020');
    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear);
    };
    const filteredExpenses = props.elements.filter(expense=>{
        return expense.date.getFullYear().toString()===filteredYear;
    })
    return (
        <Card className="expenses">
            <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
            <ExpenseList list = {filteredExpenses}/>
        </Card>
    )
}
