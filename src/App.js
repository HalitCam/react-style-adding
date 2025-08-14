import './App.css';
import A from './components/A';
import B from './components/B';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <div style={{backgroundColor:'white', color:'green', marginTop:50}} >
          lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </div>
        
         <A />
         <B />
       
      </header>
    </div>
  );
}

export default App;
