import React, { useState } from "react";
import Navbar from "./Navbar";
import data from "./data";
import Error from "./error";
import Result from "./result";

const App = () => {
  const [name, setname] = useState("");
  const [num, setnum] = useState();
  const update = (e) => {
    setname(e.target.value);
  };
  const submit = (e) => {
    let num = -1;
    e.preventDefault();
    for (let i in data) {
      if (data[i].Name === name) {
        num = i;
        setnum(i);
      }
    }
    if (num !== -1) {
      document.getElementById("res").style.visibility = "visible";
      document.getElementById("err").style.visibility = "hidden";
    } else {
      document.getElementById("err").style.visibility = "visible";
      document.getElementById("res").style.visibility = "hidden";
    }
  };
  return (
    <div>
      <Navbar />
      <h3 style={{ marginTop: 10, color: "green" }}> Welcome to our Webpage</h3>
      <center>
        {" "}
        <table>
          <tr>
            <td>
              <h4>Want to know the performance of a user????</h4>
            </td>
            <td>
              <img
                alt=""
                height={200}
                src="https://media.istockphoto.com/vectors/thinking-emoticon-question-face-emoji-with-eyeglasses-vector-vector-id1310060658?k=20&m=1310060658&s=612x612&w=0&h=xinMMHOLWfxXU-8zDafFNH4nOjlGaj9dytP9wlXTORM="
              ></img>
            </td>
          </tr>
        </table>
        <br></br>
        <form onSubmit={submit}>
          <label>Enter Valid UserName</label>
          <br></br>
          <input
            type="text"
            name="uname"
            value={name}
            onChange={update}
          ></input>
          <br></br>
          <button className="btn btn-primary" style={{ marginTop: 10 }}>
            submit
          </button>
        </form>
      </center>
      <div style={{ visibility: "hidden" }} id="err">
        <Error />
      </div>
      <div style={{ visibility: "hidden" }} id="res">
        <Result num={num} />
      </div>
    </div>
  );
};

export default App;
