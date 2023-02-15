import { useState, useEffect } from "react";


function App() {

  const [number, setNumber] = useState(0);
//   const [name, setName] = useState("Mithat");

  useEffect(() => {
    console.log("Componen mount edildi")

    const interval = setInterval(() => {
        setNumber((n) => n+1)
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    console.log("number state guncellendı")
  }, [number])

//   useEffect(() => {
//     console.log("name state guncellendı")
//   }, [name])

  return (
    <div>
      <h1>{number}</h1>  
      <button onClick={() => setNumber(number + 1)}>Click</button>    
      <br />
      {/* <h1>{name}</h1>
      <button onClick={() => setName("Kara")}>Click</button>     */}
    </div>
  );
}

export default App;
