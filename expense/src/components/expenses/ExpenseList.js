import React from 'react'
import ExpenseItems from './ExpenseItems'
import './ExpenseList.css'
export default function ExpenseList(props) {
    if(props.list.length === 0) return <h2 className='expenses-list__fallback'>No Expense Found !</h2>
  return (<ul className='expenses-list'>
            { props.list.map((ele) => {
            return <ExpenseItems element={ele} key={ele.id} />
        })}
    </ul>
  )
}
