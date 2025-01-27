import './App.css';
import ButtonStyle from './component/ButtonStyle';

const btnStyle = { backgroundColor: 'green' };

function App() {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Children props</h1>
      {/* <Button>click me</Button> */}
      <ButtonStyle btnStyle={btnStyle} />
    </div>
  );
}

export default App;
