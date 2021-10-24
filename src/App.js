import "./App.css";
import Button from "./components/Button";
import Quote from "./components/Quote";

function App() {
  return (
    <div>
      <div className="conatiner">
        <h3>Kanye Quotes</h3>
        <Quote />
        <Button text="Get Another Quote" />
      </div>
    </div>
  );
}

export default App;
