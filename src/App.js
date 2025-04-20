import './App.css';
import Greet from './components/greet';
import Welcome from './components/welcome';

function App() {
  return (
    <div className="App">
      <Greet name="Ahmed" />
      <Welcome place="State of Art"/>
    </div>
  );
}

export default App;
