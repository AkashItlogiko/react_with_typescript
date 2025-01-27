import UserDemo from './component/UserDemo';

const users = [
  {
    id: 1,
    name: 'anisul islam',
    email: 'anisul2010yaho.com',
    age: 32,
  },
  {
    id: 2,
    name: 'rakibul islam',
    email: 'rakibul2010.com',
    age: 32,
  },
];

function App() {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>User Management</h1>
      <UserDemo users={users} />
    </div>
  );
}

export default App;
