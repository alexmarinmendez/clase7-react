import { useEffect, useState } from 'react';
import './App.css';

import customFetch from './utils/customFetch';

function App() {
  const [datos, setDatos] = useState([]);
  const [error, setError] = useState({
    isError: false,
    errorMessage: ""
  });

  //componentDidMount
  useEffect(() => {
    customFetch()
    .then(result => setDatos(result))
    .catch(err => setError({
      isError: true,
      errorMessage: err
    }))
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
          : datos.map((dato) => <li key={dato.id}>{dato.name}</li>)
        }
      </ol>
      <hr />
      &copy; 2021. Made with ❤ by the Coder Team.
    </>
  );
}

export default App;
