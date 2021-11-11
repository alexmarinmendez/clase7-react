import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [datos, setDatos] = useState([]);
  const [error, setError] = useState({
    isError: false,
    errorMessage: ""
  });

  //componentDidMount
  useEffect(() => {
    fetch('https://api.mercadolibre.com/sites/MLA/search?q=squid')
      .then(response => response.json())
      .then(response => setDatos(response.results))
  }, []);

  return (
    <>
      <h1>Coder Simple App</h1>
      <h2>This is a simple app for the React Course</h2>
      <p>We are enjoying learning React!</p>
      <hr />
      <ol>
        {
          error.isError
          ? <p>Hubo un error</p>
          : datos.map((dato) => <li key={dato.id}>{dato.title}</li>)
        }
      </ol>
      <hr />
      &copy; 2021. Made with ❤ by the Coder Team.
    </>
  );
}

export default App;
