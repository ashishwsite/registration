// index.js or App.js
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import axios from "axios";

function App() {
  const [name, setname] = useState();
  const [pass, setpass] = useState();
  const [email, setemail] = useState();
  function handlesubmit(e) {
    e.preventDefault()
    console.log("hanle cal")
    axios
      .post("https://registrationserver.vercel.app/createUser", { name, pass, email })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }
  return (
    <div
      className="container mt-3 bg-success"
      style={{
        width: "10cm",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        gap: "5px",
        border: "3px solid",
        "borderRadius": "4px",
      }}
    >
      <form  onClick={handlesubmit}>
        <div className="mb-3">
          <label htmlFor="formGroupExampleInput" className="form-label">
            Name:
          </label>
          <input
            onChange={(e) => {
              setname(e.target.value);
            }}
            type="text"
            className="form-control"
            id="name"
            placeholder="i.e name"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="formGroupExampleInput2" className="form-label">
            Email:
          </label>
          <input
            onChange={(e) => {
              setemail(e.target.value);
            }}
            type="email"
            className="form-control"
            id="email"
            placeholder="email"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="" className="form-label">
            Password:
          </label>
          <input
            onChange={(e) => {
              setpass(e.target.value);
            }}
            type="password"
            className="form-control"
            id="pass"
            placeholder="password"
          />
        </div>
        <button className="container bg-danger" type="submit" >
          Register
        </button>
        <p>
          Already user <button>login</button>{" "}
        </p>
      </form>
    </div>
  );
}

export default App;
