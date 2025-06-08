import "./App.css";

function Car(props) {
  return <li>I am a {props.brand}</li>;
}

function Garage() {
  const cars = [
    { id: 1, brand: "Ford" },
    { id: 2, brand: "BMW" },
    { id: 3, brand: "Audi" },
  ];
  return (
    <>
      <h1>Who live in my garage?</h1>
      <ul>
        {cars.map((cars) => (
          <Car key={cars.id} brand={cars.brand} />
        ))}
      </ul>
    </>
  );
}

function App() {
  return (
    <div>
      <Garage />
    </div>
  );
}

export default App;
