import React, { useEffect, useState } from 'react';
import { api } from './services/api'

import { User } from './components/User'

interface IUser {
  name: string;
  email: string;
}

function App() {

  const [users, setUsers] = useState<IUser[]>([])

  useEffect(() => {
    api.get<IUser[]>('/users').then(response => {
      setUsers(response.data)
    })
  }, [])

  return (
    <div style={{
      width: '100%', 
      height: '100vh', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'space-evenly', 
      flexDirection: 'column', 
      fontSize: 22,  
      backgroundColor: '#eee',
      padding: 25
    }}>
      {users.map(user => <User key={user.email} user={user} />)}
    </div>
  );
}


export default App;
