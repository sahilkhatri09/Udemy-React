import React from 'react'
import './UserList.css'
import Card from '../UI/Card'

export default function UserList(props) {
    return <Card className="users">
        <ul>
            {props.users.map((user) =>
                (<li key={user.id}> {user.name} ({user.age} year old)</li>)
            )}
        </ul>
    </Card>
}