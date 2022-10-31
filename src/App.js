import './App.css';


//Components
import Header from './Components/Header/Header';
import Portfolio from './Components/Portfolio/Portfolio';

function App() {
  return (
    <main>
      <div className='container'>
        <Header/>
        <Portfolio/>
      </div>
    </main>
  );
}

export default App;
