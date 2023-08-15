import titleLogo from './pokemon-sprite-title.png'
import './App.css';
import Pokemon from './components/Pokemon.component';

const App = () => {

  return (
    <div className="App">
      <header className="App-header">
        <img src={titleLogo} className="App-logo" alt="logo" />
        <p>
          <Pokemon/>
        </p>
      </header>
    </div>
  );
}

export default App;
