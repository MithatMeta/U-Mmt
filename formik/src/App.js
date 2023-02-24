import './App.css';
// import { Formik, } from 'formik';
import Singup from './components/Singup';

function App() {
  return (
    <div className="App">

      <Singup />






      {/* <h1>Any place in your app!</h1>
     <Formik
       initialValues={{ 
        firstName: "", 
        lastName: "", 
        email: "",
        password:"", 
        passwordConfirm:"",
        gender:"",
        hobi:[],
        country:"",
      }}
       
       onSubmit={(values) => {
         console.log(values);
       }}
     >
       {({ handleSubmit, handleChange, values }) => (
         <form onSubmit={handleSubmit}>
           <label htmlFor="email">Email: </label>
           <input name='email' onChange={handleChange}/>
            <br /> <br />

            <label htmlFor="password">Password: </label>
           <input name='password' onChange={handleChange}/>
           <br /><br />
           <label htmlFor="passwordConfirm">Pasword Confirm: </label>
           <input name='passwordConfirm' onChange={handleChange}/>
           <br />

           <label htmlFor="firstName">Firstname: </label>
           <input name='firstName' onChange={handleChange}/>
           
           <br/>
           <label htmlFor="lastName">Lastname: </label>
           <input name='lastName' onChange={handleChange}/>
           <br />
           <br />

           <label htmlFor="gender">Gender: </label>
           <span>Male</span>
           <input type="radio"
           name='gender'
           value="male" 
           onChange={handleChange}/>
           <span>Female</span>
           <input type="radio"
           name='gender'
           value="female"
           onChange={handleChange}
            />
           
           
          <div>
            <h3>Hobi</h3>
            
           <input type="checkbox" name="hobi" onChange={handleChange} value="Futbol" /> Futbol 
           <br />
           <input type="checkbox" name="hobi" onChange={handleChange} value="Satranç" /> Satranç 
           <br />
           <input type="checkbox" name="hobi" onChange={handleChange}  value="Sinema" /> Sinema
          </div>

           
          <br /><br />

          <select name="country" onChange={handleChange}>
            <option value="Türkiyue">Türkiye</option>
            <option value="İngiltere">İngiltere</option>
            <option value="Amerika">Amerika</option>
          </select>

          <button type="submit" >
             Submit
           </button>
           <br /> <br />
           <code>{JSON.stringify(values)}</code>
         </form>
       )}
     </Formik> */}
    </div>
  );
}

export default App;
