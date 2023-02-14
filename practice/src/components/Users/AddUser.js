import React from 'react'
import { useState } from 'react'
import Card from '../UI/Card'
import './AddUser.css'
import '../UI/Button'
import Button from '../UI/Button'
import ErrorMessage from '../UI/ErrorMessage'
export default function AddUser(props){
    const [valid,setValid]=useState();
    const addUserHandler = (event) =>{
        event.preventDefault();
        if(userName.trim().length === 0){
            setValid({
                title : "Invalid UserName",
                message : "UserName cannot be blank"
            })
            return;}
        if(userAge.trim().length === 0){
            setValid({
                title : "Invalid Age",
                message : "Age cannot be blank"
            })
            return;
        }
        if(+userAge <= 0){  setValid({
            title : "Invalid Age",
            message : "Age cannot be Negative"
        })
         return;}
        setValid();
        props.getUser(userName,userAge)
        setUserName('');
        setUserAge('');
    }
    const [userName , setUserName] = useState('');
    const [userAge , setUserAge]=useState('');
    function nameHandler(event){
        setUserName(event.target.value);
    }
    function ageHandler(event){
        setUserAge(event.target.value);
    }
    const setShow = () =>{
        setValid();
    }
    return (
        <>
        {valid &&  <ErrorMessage title={valid.title} message={valid.message} setShow={setShow}/>}
      <Card className = "input">
        <form onSubmit={addUserHandler}> 
            <label forhtml = "username">Enter Name : </label>
            <input id="username" type="text" onChange={nameHandler} value ={userName}/>
            <label forhtml = "userAge" value={userAge}>Enter Age(in Years)</label>
            <input id="userAge" type ="number" onChange={ageHandler} value={userAge}/>
            <Button type="submit">Add User</Button>
        </form>
        </Card>
        </>
    )
}