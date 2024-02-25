import './App.css';
import { createContext, useEffect, useState } from 'react';
import ChildComp from './component/ChildComp';

 export const theme= createContext();

function App() {
  const [state, setState] = useState(true);

  const handleInput = () => {
    setState((state)=> !state);
  }

  

  return (
    <div className='container'>
      < theme.Provider value={state} >
      <button onClick={handleInput}>Change Background</button>
      {console.log(state)}
       <ChildComp />
      </theme.Provider>
    </div>
  );
}

export default App;
