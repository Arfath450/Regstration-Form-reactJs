import React, { useState } from 'react';

const App = () => {

    const[fullName, setFullName] = useState({
        fname : "",
        lname : "",
        email : "",
        mobile : "",
        country : "",
    });

    const inputEvent = (event) => {
        const value = event.target.value;
        const name = event.target.name;

        setFullName((preValue) => {
            return{
                ...preValue,
                [name] : value
            }
        });
    }

    const Submit=(event)=>{
        event.preventDefault();
        alert("registered successfully!!!");
    }

    return(
        <>
    <div className="head">
        <h1>Registration Form...</h1>
        <h2>Hello, {fullName.fname}  {fullName.lname}</h2>
        <p>{fullName.email}</p>
        <p>{fullName.mobile}</p>
        <p>{fullName.country}</p>
    </div>

        <div className="main_form">
            <form onSubmit={Submit}>
                <div>
                    <input type="text" name="fname" placeholder="Enter Your Name..." onChange={inputEvent}
                     value={fullName.fname} autoComplete="off"/><br/><br/>
                    <input type="text" name="lname" placeholder="Enter Your LastName..." onChange={inputEvent}
                     value={fullName.lname} autoComplete="off"/><br/><br/>
                    <input type="email" name="email" placeholder="Enter Your email..." onChange={inputEvent}
                     value={fullName.email} autoComplete="off"/><br/><br/>
                    <input type="number" name="mobile" placeholder="Enter Your Mobile No..." onChange={inputEvent}
                     value={fullName.mobile}/><br/><br/>
                    <input type="text" name="country" placeholder="Enter Your Country" onChange={inputEvent}
                     value={fullName.country} autoComplete="off"/><br/><br/>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
        </>
    )
}
export default App;