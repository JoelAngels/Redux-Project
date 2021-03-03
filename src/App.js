//let us now access the counter

import { useSelector } from "react-redux";
function App() {
  const counter = useSelector((state) => state.counter); //I can have the whole counter state here
  const isLogged = useSelector((state) => state.isLogged);
  return (
    <div className="App">
      <h1>Lets go Redux {counter}</h1>
      {/* Let us now increase the counter */}
      <button>+</button>
      <button>-</button>
      {/* it is set to false so
      nothing will show up */}
      {isLogged ? <h3>Valuable Info unseen </h3> : ""}
    </div>
  );
}

export default App;
