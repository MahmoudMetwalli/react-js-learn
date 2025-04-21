import './App.css';
import Greet from './components/greet';
import Welcome from './components/welcome';
import CountFive from './components/countFive';

function App() {
  return (
    <div className="App">
      <Greet name="Ahmed" />
      <Welcome place="State of Art"/>
      <CountFive />
    </div>
  );
}

export default App;
