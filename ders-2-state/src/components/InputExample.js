import React from "react";
import { useState } from "react";

function InputExample () {

    // const [name, setName] = useState("");
    // const [surname, setSurname] = useState("")

    // const onChangeName = (event)=> setName(event.target.value)
    // const onChangeSurname = (event)=> setSurname(event.target.value)

    const [form, setForm] = useState({name:"", surname:""});

    const onChanegInput = (e) => {
        // console.log(e.target.value)

        setForm({...form, [e.target.name]: e.target.value});
    }

    return (
        // <div>
            
        //     <h4>Name</h4>
        //     <input value={name} onChange={onChangeName}/>
        //     <br />
        //     <h4>Surname</h4>
            
        //     <input value={surname} onChange={onChangeSurname}/>

        // </div>
        <div>
            <h4>Name</h4>
            <input name="name" value={form.name} onChange={onChanegInput}/>
            <br />
            <h4>Surname</h4>
            
            <input name="surname" value={form.surname} onChange={onChanegInput}/>
        </div>
    )
}

export default InputExample;