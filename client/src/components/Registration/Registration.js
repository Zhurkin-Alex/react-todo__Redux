import React, { useRef, useState } from "react";
import "./Registration.scss";

function Home(props) {
  const [admin, setAdmin] = useState(false);
  const adminHandler = () => {
    setAdmin(!admin);
  };
  const name = useRef()
  const email = useRef()
  const pasword = useRef()
  const paswordcheck = useRef()

  const registrHandler = (e) => {
    e.preventDefault();
    // console.log(name.current.value);
    // const name = name.current.value
    fetch(`${process.env.REACT_APP_AUTH}/registration`, {
      method: "POST",
      headers: {
        "Content-type": "Application/json",
      },
      body: JSON.stringify({
        name:name.current.value,
        email:email.current.value,
        password:pasword.current.value, 
        paswordcheck:paswordcheck.current.value       
      }),
    })
    .then(res=>res.json())
    .then(data=>console.log(data))
  };

  return (
    <section className="home">
      <div className="container">
        <div className="home-box">
          <div className="home-box__form">
            <form className="home-form" onSubmit={registrHandler}>
              <div className="mb-3">
                <label htmlFor="exampleInputName" className="form-label">
                  Name
                </label>
                <input
                ref={name}
                name="name"
                  type="text"
                  className="form-control"
                  id="exampleInputName"
                  aria-describedby="emailHelp"
                />
                <div id="emailHelp" className="form-text">
                  Напишите ваше полное имя
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Email address
                </label>
                <input
                ref={email}
                  name="email"
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
                <div id="emailHelp" className="form-text">
                  Напишите ваш email
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Password
                </label>
                <input
                ref={pasword}
                name="pasword"
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                />
              </div>
              <div className="mb-3 form-check registration-auth">
                <div className="registration-check">
                  <input
                    onClick={adminHandler}                    
                    type="checkbox"
                    className="form-check-input"
                    id="exampleCheck1"
                  />
                  <label className="form-check-label" htmlFor="exampleCheck1">
                    I'm admin
                  </label>
                </div>
                <div className="registration-check__password">
                {admin && (
                  <input
                     ref={paswordcheck}
                    name="paswordcheck"
                    type="password"
                    className="form-control"
                    placeholder="Password"
                  />
                )}
                </div>
              </div>
              <button type="submit" className="btn btn-primary registration-btn">
                Registration
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
