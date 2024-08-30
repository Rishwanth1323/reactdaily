import React, { useRef, useState } from 'react';
import axios from 'axios';
import './UserloginuseRef.css'

export default function UserloginuseRef() {
  const [arr, setArr] = useState([]);
  const userName = useRef("");
  const password = useRef("");
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");

  const handler = async (event) => {
    event.preventDefault();
    let validation = validate(userName.current.value, password.current.value);
    if (Object.keys(validation).length > 0) {
      alert("Invalid Credentials");
    } else {
      // Hit the API
      const response = await login(userName.current.value, password.current.value);
      console.log(response);
      if (response.status === 200) {
        console.log("Object successfully passed");
        const o = {
          "username": userName.current.value,
          "password": password.current.value
        };
        setArr([...arr, o]); // Add to the table only on successful API call
      } else {
        console.log("Object didn't pass");
      }
    }
  };

  const login = async (user, pass) => {
    let response = "";
    try {
      response = await axios.post("https://dummyjson.com/auth/login", {
        username: user,
        password: pass,
      });
    } catch (e) {
      console.log(e);
    }
    console.log(response);
    return response;
  };

  const validate = (user, pass) => {
    const formError = {};
    if (user.length > 20 || user === "") {
      formError.username = "Username should not be more than 20 characters or you provided an empty string";
      setUser(formError.username);
    }
    if (pass.length > 20 || pass === "") {
      formError.password = "Password should not be more than 20 characters or you provided an empty string";
      setPass(formError.password);
    }
    return formError;
  };

  const deletehandler = (i) => {
    const newarray = arr.filter((each, j) => i !== j);
    setArr(newarray);
  };

  return (
    <div>
      <h1>User Login useRef Concept</h1>

      <form onSubmit={handler}>
        <div className="form-group">
          <label htmlFor="username">Email address:</label>
          <input type="text" className="form-control" id="username" ref={userName} />
        </div>
        <div className="form-group">
          <label htmlFor="pwd">Password:</label>
          <input type="password" className="form-control" id="pwd" ref={password} />
        </div>

        <button type="submit" className="btn btn-default">
          Submit
        </button>
      </form>

      {arr.length > 0 && 
        <>
          <h1>tables</h1>
          <table>
            <tbody>
              {arr.map((each, index) => (
                <tr key={index}>
                  <td>{each.username}</td>
                  <td>{each.password}</td>
                  <td>
                    <button onClick={() => deletehandler(index)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      }
    </div>
  );
}
