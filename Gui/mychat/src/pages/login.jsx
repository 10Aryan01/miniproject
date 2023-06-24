import React from 'react';
import { useNavigate } from 'react-router-dom';
import "../index.css";
import { useEffect } from 'react';


function Login() {
  const navigate = useNavigate();

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === 'Enter') {
        document.getElementById('loginbtn').click();
      }
    };

    const inputElement = document.getElementById('check');
    inputElement.addEventListener('keypress', handleKeyPress);

    return () => {
      inputElement.removeEventListener('keypress', handleKeyPress);
    };
  }, []);

  async function check() {
    let res = await fetch("http://localhost:9191/Message/user");
    let data = await res.json();
    let is_present = false;
    let val = document.getElementById("check").value;
    data.forEach(element => {
      if (element.user_name.toLowerCase() === val.toLowerCase()) {
        is_present = true;
      }
    });
    if (is_present) {
      navigate(`/home?username=${val}`);
    } else {
      document.getElementById("res").value = "Invalid user";
      document.getElementById("res").style.color = "red";

    }

  }

  function goregis() {
    navigate("/Register")
  }

  return (
    <div className="con">
      <div className='form'>
        <h3>Login</h3>
        <input className="inpfields" type="text" id="check" placeholder='Username..' />
        <input className="inpfields" type="password" placeholder='Password...' />
        <input className="inpfields" readOnly id="res" />
        <div className="box-3">
          <div className="btn btn-three" onClick={check} id="loginbtn">
            <span>SUBMIT</span>
          </div>
        </div>
        <p onClick={goregis}>Have an account? Register</p>
      </div>
    </div>
  );
}

export default Login;
