import logo from './logo.svg';
import './App.css';
import Detail from './components/ProductDetail/Detail';
import Paymets from './pages/Payments Page/Paymets';

function App() {
  return (
    <div className="App">
      Home
      <Detail/>
      <Paymets/>
    </div>
  );
}

export default App;
