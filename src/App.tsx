import User from './component/User';

const user1 = {
  name: 'Dip',
  age: 1,
  isRegisterd: false,
  lang: ['Bangla', 'English'],
};
const user2 = {
  name: 'Jony',
  age: 2,
  isRegisterd: true,
  lang: ['English', 'Hinde'],
};

function App() {
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>User Management</h1>
      <User user={user1} />
      <User user={user2} />
    </div>
  );
}

export default App;
