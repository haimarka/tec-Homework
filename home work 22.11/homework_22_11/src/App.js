import logo from './logo.svg';
import './App.css';
import Counter from './componets/counter';
import CounterProps from './componets/counterProps';
import TowCounters from './componets/towCounters';
import LongText from './componets/longText';
import ShowHide from './componets/showHide';

function App() {
  return (
    <div className="App">
      <h1>react</h1>
      {/* <Counter />
      <CounterProps num={10} />
      <TowCounters />
      <LongText text="haim" />
      <LongText text="maayan" /> */}
      <ShowHide text="hello" />
    </div>
  );
}

export default App;
