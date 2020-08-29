import React from 'react';
import axios from 'axios';

function App() {

  const testHandler = () => {
    axios.get('/test')
      .then(res => console.log(res.data))
      .catch(err => console.log())
  };

  return (
    <div className="App">
      Hello there tsx!
      <br />
      <button onClick={testHandler}>Test</button>
    </div>
  );
}

export default App;
