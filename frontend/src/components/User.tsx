import React from 'react'
import './User.css'

interface IUser {
    name: string;
    email: string;
}

interface Props {
    user: IUser
}

export const User: React.FC<Props> = ({ user }) => {
    return (
        <div className='user-container'>
            <strong>Nome:</strong>{user.name}<br />
            <strong>Email:</strong>{user.email}<br />
        </div>
    )
}
