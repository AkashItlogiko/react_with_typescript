import User from './component/User';

function App() {
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>User Management</h1>
      <User name={'Akash saha'} age={25} isRegisterd={true} />
      <User name={'Dip'} age={2} isRegisterd={false} />
    </div>
  );
}

export default App;
