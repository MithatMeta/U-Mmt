import './App.css';
import { useCallback, useMemo, useState } from 'react';
import Header from './components/Header';

function App() {
  const [ number, setNumber ] = useState(0);

  // const data = useMemo(()=>{
  //   return { name:"Mithat"};
  // }, [])

  const increment = useCallback(() => {
    setNumber((prevState) => prevState +1)
  },[])

  return (
    <div className="App">
      <Header 
      // number={number <= 5 ? 0 : number} 
      // data={data} 
      increment={increment}
      />      
      <hr />
      {number} 
      
    </div>
  );
}

export default App;
