import Counter from "./components/counter"
// import Total from "./components/total";
import './App.css';

function App() {

  
  return (
    <div className="App">
      <Counter step="1" />
      <Counter step={2} />
      <Counter step="3" />
      <Counter step={4} />
      {/* <Total/>       */}

    </div>
  );
}

export default App;
