
import './App.css';

function Car(props) {
  return <li>I am a {props.brand}</li>;
}

function Garage() {
  const cars = ['Ford', 'BMW', 'Audi'];
  return (
    <>
      <h1>Who live in my garage?</h1>
      <ul>
      {cars.map((cars) => <Car brand={cars} />)}
      </ul>
    </>
  );
}

function App() {
  return (
    <div className="App">
      <Garage />
     
    </div>
  );
}

export default App;
