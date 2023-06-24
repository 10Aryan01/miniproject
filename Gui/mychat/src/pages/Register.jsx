import React from 'react'
import { useNavigate } from 'react-router-dom'
import "../index.css";
import { useEffect } from 'react';



function Register() {
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

    async function checkforregistration() {
        let is_present = false;
        let res = await fetch("http://localhost:9191/Message/user");
        let data = await res.json();
        let val = document.getElementById("check").value;

        data.forEach(element => {
            if (element.user_name.toLowerCase() === val.toLowerCase()) {
                is_present = true;
            }
        });
        if (is_present) {
            document.getElementById("res").value = "User name id already present"
            document.getElementById("res").style.color = "deepblue";
            document.getElementById("res").style.backgroundColor = "#DE3163";
        }
        else {
            //insert to database
            await fetch("http://localhost:8181/adduser", {
                method: "POST",
                body: JSON.stringify({
                    name: val
                }), headers:
                {
                    "Content-Type": "application/json; charset=UTF-8"
                }
            })

            let inlis = document.getElementById("check");
            inlis.addEventListener("keypress", function (event) {
                if (event.key === 'Enter') {
                    document.getElementById("loginbtn").click();
                }
            })

            document.getElementById("res").value = "You are all set";
            document.getElementById("res").style.color = "deepgreen";
            document.getElementById("res").style.backgroundColor = "lightgreen";
            setTimeout(() => {
                navigate("/");
            }, 1000);
        }

    }
    return (
        <>
            <div className="con">
                <div className='form'>
                    <h3>Sign up</h3>
                    <input className="inpfields" type="text" id="check" placeholder='Please Enter Username' />
                    <input className="inpfields" type="password" placeholder='Give a Password' />
                    <input className="inpfields" readOnly id="res" />
                   
                    <div class="box-3">
                        <div class="btn btn-three" onClick={checkforregistration} id="loginbtn">
                            <span>SUBMIT</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}

export default Register