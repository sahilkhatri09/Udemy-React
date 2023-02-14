import React from "react";
import './ExpenseForm.css'
import { useState } from "react";
export default function ExpenseForm(props) {

    // const[userInput,setInput] = useState({
    //     currentTitle:'',
    //     currentAmout:'',
    //     currentDate:''
    // });


    const [enteredTitle, setTitle] = useState('');
    const [enteredAmount, setAmount] = useState('');
    const [enteredDate, setDate] = useState('');
    function titleHandler(event) {
        // setInput((prevState) =>{
        //     return {...prevState,currentTitle:event.target.value}
        // })
        setTitle(event.target.value);
    }
    function amountHandler(event) {
        // setInput({
        //     ...userInput,
        //     currentTitle:event.target.value
        // })
        setAmount(event.target.value);
    }
    function dateHandler(event) {
        // setInput({
        //     ...userInput,
        //     currentTitle:event.target.value
        // })
        setDate(event.target.value);
    }
    const submitHandler = (event) => {
        event.preventDefault();
        const expenseDate = {
            title: enteredTitle,
            date: new Date(enteredDate),
            amount: enteredAmount
        }
        props.onSaveHandler(expenseDate);
        setTitle('');
        setAmount('');
        setDate('');
    }
    const [showButton, setVisibility] = useState('false');
    const buttonHandler = () => {
        setVisibility((prev) => {
            return prev === 'false' ? 'true' : 'false';
        })
    }
    return (
        <form onSubmit={submitHandler}>
            {showButton === 'true' && <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" value={enteredTitle} onChange={titleHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" value={enteredAmount} min='0.01' step='0.01' onChange={amountHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" value={enteredDate} min='2019-01-01' max='2022-12-12' step='0.01' onChange={dateHandler} />
                </div>
            </div>}
            <div className="new-expense__actions">
                <button onClick={buttonHandler}>Add Expense</button>
            </div>
        </form>)
}
