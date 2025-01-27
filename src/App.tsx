import DataFetch from './component/DataFetch';

function App() {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>User Management</h1>
      <DataFetch status="success" />
    </div>
  );
}

export default App;
