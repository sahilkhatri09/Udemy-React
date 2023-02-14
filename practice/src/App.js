import React, { useState } from 'react';
import AddUser from './components/Users/AddUser'
import UserList from './components/Users/UserList';


function App() {
  const [usersk, setUsers] = useState([]);
  const getUser = (uname,uage) => {
    setUsers((prev)=>{
      return [{name : uname,age : uage,id : Math.random()},...usersk]
    })
  }
  return (
    <div>
      <AddUser getUser={getUser} />
      <UserList users={usersk} />
    </div>
  );
}

export default App;
