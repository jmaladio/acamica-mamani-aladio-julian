function App() {
  return (
    <div>
      <h1>Hola Mundo</h1>
      <ul>
        <li>{process.env.REACT_APP_API_URI}</li>
        <li>{process.env.REACT_APP_API_KEY}</li>
      </ul>
    </div>
  );
}

export default App;
