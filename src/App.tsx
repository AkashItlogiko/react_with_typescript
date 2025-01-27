import { useState } from 'react';
import './App.css';

type User = {
  id: number;
  name: string;
  email: string;
};

const App = () => {
  const [user, setUser] = useState<User>({} as User);
  const handleAddUser = () => {
    setUser({ id: 1, name: 'Akash', email: 'akash@gmail.com' });
  };
  return (
    <div style={{ textAlign: 'center' }}>
      <button onClick={handleAddUser}>AddUser</button>
      <p>{user.name}</p>
    </div>
  );
};

export default App;
