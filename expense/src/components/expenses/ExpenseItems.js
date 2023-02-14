import React from 'react'
import Card from '../UI/Card'
import ExpenseDate from './ExpenseDate'
import './ExpenseItems.css'
export default function ExpenseItems(props) {
  return (
    <li>
    <Card className='expense-item'>
      <ExpenseDate date = {props.element.date}/>
      <div className='expense-item__description'>
        <h2>{props.element.title}</h2>
        <div className='expense-item__price'>{props.element.amount}</div>
      </div>
    </Card>
    </li>
  )
}
