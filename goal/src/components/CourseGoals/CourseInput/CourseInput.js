import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
import './CourseInput.css';

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');

  const goalInputChangeHandler = event => {
    if(enteredValue.trim().length > 0){
      setIsValid(true);
    }
    setEnteredValue(event.target.value);
    
  };
   const [isValid,setIsValid]  = useState('');
  const formSubmitHandler = event => {
    event.preventDefault();
    if(enteredValue.trim().length === 0){
      setIsValid('invalid');
      setEnteredValue('');
      return;
    }
    props.onAddGoal(enteredValue);
    setEnteredValue('');
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`form-control ${isValid}`}>
        <label >Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} value = {enteredValue}/>
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
