import Lottery from "./Lottery";
import { sum } from "./helper";

function App() {
  const winCondition = (ticket) => {
    return sum(ticket) === 15;  
  };

  return (
    <div className="App">
      <Lottery n={3} winCondition={winCondition} />
    </div>
  );
}

export default App;
