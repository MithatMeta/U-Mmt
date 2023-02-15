import { useState } from "react";


function App() {
  const [name, setName] = useState("Mithat")
  const [age, setAge] = useState(20)
  const [friend, setFriend]= useState(["ahmet", "mehmet"])
  const [adres, setAdres]= useState([{title:"İstanbul", zip:34440}])

  return (
    <div className="App">
      <h1>MErhaba {name}</h1>
      <h2>yaş: {age}</h2>
      <button onClick={()=> setName("Ahmet")}>Change Name</button>
      <button onClick={()=> setAge(30)}>Change Age</button>
      <br /><br />
      <hr />
      <h2>Friends</h2>
      <br />
      {friend.map((friend, index) => (
        <div key={index}>{friend}</div>
      ))}

      <br />
      <button onClick={() => setFriend([...friend, ["Ayşe"]])}>
        add new friend
      </button>

      <br /><br />
      <hr />
      <h2>Adres</h2>
      <br />
      {adres.map((adres, index)=> (
        <div key={index}>{adres.title} {adres.zip}</div>
      ))}
      <br />
      <button onClick={() => setAdres([...adres, {zip:44400, title:"Malatya"}])}>add new adres</button>

    </div>
  );
}

export default App;
