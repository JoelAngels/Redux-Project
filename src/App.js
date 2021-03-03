//let us now access the counter
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./actions";
function App() {
  const counter = useSelector((state) => state.counter); //I can have the whole counter state here
  const isLogged = useSelector((state) => state.isLogged);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>Lets go Redux {counter}</h1>
      {/* Let us now increase the counter and increment it by 5*/}
      <button onClick={() => dispatch(increment(5))}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      {/* it is set to false so
      nothing will show up */}
      {isLogged ? <h3>Valuable Info unseen </h3> : ""}
    </div>
  );
}

export default App;
