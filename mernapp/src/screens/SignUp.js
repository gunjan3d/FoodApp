import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import login from './Login'

export default function SignUp() {
    const [credentials, setcredentials] = useState({ name: "", Email: "", Password: "", Geolocation: "" })

    const handlesubmit = async (q) => {

        // console.log(credentials);
        q.preventDefault();

        const response = await fetch("http://localhost:5000/createuser",
            {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ Name: credentials.name, Email: credentials.Email, Password: credentials.Password, Geolocation: credentials.Geolocation })
            })

        const j = await response.json()
        console.log(j);
        if (!j.success) {
            alert("enter valid credentials");
        }

    }
    const onChange = (event) => {
        setcredentials({ ...credentials, [event.target.name]: event.target.value })
    }



    return (
        <>
            <div className='container mt-5'>
                <form onSubmit={handlesubmit}>
                    <div className="mb-3">
                        <label htmlFor="Name" className="form-label">UserName</label>
                        <input type="text" className="form-control" name='name' value={credentials.name} onChange={onChange} />

                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={onChange} name='Email' value={credentials.Email} />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" name='Password' value={credentials.Password} onChange={onChange} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="Location" className="form-label">Location</label>
                        <input type="Location" className="form-control" name='Geolocation' value={credentials.Geolocation} onChange={onChange} />
                    </div>
                    <button type="submit" className=" m-3 btn btn-success">Submit</button>
                    <Link to="/login" className='m-3 btn btn-danger'>Already a user</Link>
                </form>
            </div>
        </>
    )
}
