import { useState, useEffect } from "react";

import List from "./list";
import Form from "./form";
// import List from "./list"
import "./style.css"



function Contacts() {
    const [contacts, setContacts] = useState([
        {
            fullname: "mithat",
            phone_number:"123455"
        },{
            fullname:"Ali",
            phone_number:"4234124"
        },{
            fullname:"halis",
            phone_number:"12345323"
        }
    ]);

    useEffect(() => {
	}, [contacts]);

    return (
        <div id="container">
            <h1>Contacts</h1>
            <List contacts={contacts} />
            <Form addContact={setContacts} contacts={contacts} />
        </div>

    )    
}
export default Contacts;