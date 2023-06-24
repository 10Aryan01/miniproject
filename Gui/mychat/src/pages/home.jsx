import React, { useState, useEffect, useRef } from 'react';
import '../index.css';
import img from '../images/cute-cat-illustration-kawaii-cartoon-logo_68410-178.webp';
import { useLocation } from 'react-router-dom';
import { BsSearch, BsCamera, BsCameraVideo, BsThreeDotsVertical } from 'react-icons/bs';
import SockJS from 'sockjs-client';
import { Stomp } from '@stomp/stompjs';
import { BiSend } from "react-icons/bi";

function Home() {
  const location = useLocation();
  const username = new URLSearchParams(location.search).get('username');
  const [stompClient, setClient] = useState();
  const [user2id, setUserTwoId] = useState();
  const [mainuserid, setMainUserId] = useState(null);
  const [users, setUsers] = useState('Hi! Welcome to our Chat App');
  const [newdata, setNdata] = useState();
  const user2idRef = useRef(user2id);


  function handleClick(event) {
    let users = event.currentTarget.dataset.name;
    let userId = event.currentTarget.dataset.id;
    setUsers(users.toUpperCase());
    console.log(userId + " user id");
    setUserTwoId(userId);
    getChats();
    
  }

  //1st useEffect
  useEffect(() => {
    user2idRef.current = user2id;
    console.log("Updated user2id:", user2id);
  }, [user2id]);

  console.log("this is user 2 id " + user2id)
  console.log("This is user 2 reference " + user2idRef.current)
  //2nd useeffect
  useEffect(() => {
    const usersocket = new SockJS("http://localhost:8080/websocket");
    const stompClient = Stomp.over(usersocket);
    setClient(stompClient);
    stompClient.connect({}, function (frame) {
      console.log("Connect to backend");
      stompClient.subscribe("/topics/message", function (message) {
        if (message) {
          chatForUser();
          const messageContent = message.body;
          const us2StartIndex = messageContent.indexOf("us2=") + 4; // Add 4 to skip the "us2=" part
          const us2EndIndex = messageContent.indexOf("]", us2StartIndex); // Assume "]" marks the end of the us2 field
          const us2 = messageContent.substring(us2StartIndex, us2EndIndex);
          getChats();
        }
      })
    })

  }, []);


  //userlist
  async function chatForUser() {
    const res = await fetch("http://localhost:9191/Message/user");
    const data = await res.json();
    let id;
    data.forEach(element => {
      if (element.user_name.toLowerCase() === username.toLowerCase()) {
        id = element.user_id;
        // setMainUserId(id);
      }
    });
    const userChats = await fetch(`http://localhost:9090/Message/${id}`);
    const chats = await userChats.json();

    const conuser = document.querySelector(".userlist");
    conuser.innerHTML = "";
    const unique = [];

    chats.forEach(element => {
      const check = element.user_2;
      if (!unique.includes(check)) {
        unique.push(check);
      }
    });


    unique.sort((a, b) => {
      const userATimeStamp = chats
        .filter(item => item.user_2 === a)
        .map(item => new Date(item.time_stamp))
        .sort((d1, d2) => d2 - d1)[0];

      const userBTimeStamp = chats
        .filter(item => item.user_2 === b)
        .map(item => new Date(item.time_stamp))
        .sort((d1, d2) => d2 - d1)[0];

      return userBTimeStamp - userATimeStamp;
    });


    unique.forEach(element => {
      data.forEach(user => {
        if (user.user_id === element) {
          const name = user.user_name;
          const userDiv = document.createElement("div");
          userDiv.className = "username";
          userDiv.dataset.name = name;
          userDiv.dataset.id = element;
          userDiv.innerHTML = `<p>${name.toUpperCase()}</p>`;
          userDiv.addEventListener("click", handleClick);
          conuser.appendChild(userDiv);
        }
      });
    });

  }



  async function sendMessage() {
    const userMsg = document.getElementById('inputdata').value;
    const res = await fetch('http://localhost:9191/Message/user');
    const data = await res.json();

    if (userMsg !== '') {
      let id;
      data.forEach((element) => {
        if (element.user_name.toLowerCase() === username.toLowerCase()) {
          id = element.user_id;
        }
      });

      let toUser = users;
      let sender_id;

      data.forEach((element) => {
        if (toUser.toLowerCase() === element.user_name.toLowerCase()) {
          sender_id = element.user_id;
        }
      });

      const message = {
        mgg: userMsg,
        us1: id,
        us2: sender_id
      }
      stompClient.send("/app/adddata", {}, JSON.stringify(message));
      document.getElementById('inputdata').value = '';
      const fix = document.querySelector('.chatarea');
      fix.scrollTop = fix.scrollHeight;
    }
  }

  //Interactions
  async function getChats() {
    const res = await fetch("http://localhost:9191/Message/user");
    const data = await res.json();
    let id;
    data.forEach(element => {
      if (element.user_name.toLowerCase() === username.toLowerCase()) {
        id = element.user_id;
      }
    });
    const userChats = await fetch(`http://localhost:9090/Message/${id}`);
    const chats = await userChats.json();
    // console.log(chats)
    const mychat = document.querySelector(".chatarea");
    mychat.innerHTML = "";
    chats.forEach(element => {
      if (user2idRef.current === element.user_2.toString()) {
        if (element.type === "Sent") {
          const chatleft = document.createElement("div");
          chatleft.className = "chats_left";
          let time=element.time_stamp;
          chatleft.innerHTML = `<p>${element.message}<br><span id="time">${time.slice(11,16)}</span></p>`;
          mychat.appendChild(chatleft);
        } else 
        {
          
          const chatright = document.createElement("div");
          chatright.className = "chats_right";
          let time=element.time_stamp;
          chatright.innerHTML = `<p>${element.message}<br><span id="time2">${time.slice(11,16)}</span></p>`;
          mychat.appendChild(chatright);
        }
      }
    });

    const fix = document.querySelector(".chatarea");
    fix.scrollTop = fix.scrollHeight;
  }
  async function search() {
    let is_present = false;
    let name;
    let uid;
    const res = await fetch("http://localhost:9191/Message/user");
    const data = await res.json();
    const key = document.getElementById("key").value;
    const conList = document.querySelector(".userlist");
    const chk = Array.from(conList.children).find(child => child.dataset.name.toLowerCase() === key.toLowerCase() || username.toLocaleLowerCase() === key.toLowerCase());
    data.forEach(element => {
      if (key.toLowerCase() === element.user_name.toLowerCase()) {
        is_present = true;
        name = element.user_name;
        uid = element.user_id;
      }
    });

    if (is_present === true) {
      if (chk) {
        alert("User already present");
      }
      else {
        const makele = document.createElement("div");
        makele.className = "username";
        makele.dataset.name = name;
        makele.dataset.id = uid;
        makele.innerHTML = `<p>${name.toUpperCase()}</p>`;
        makele.addEventListener("click", handleClick);
        // conList.appendChild(makele);
        if (conList.firstChild) {
          conList.insertBefore(makele, conList.firstChild);
        } else {
          conList.appendChild(makele);
        }
      }
    }
    else {
      alert("User not Registered ")
    }

  }
  useEffect(() => {
    chatForUser();
    getChats();
  }, [user2id])

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === 'Enter') {
        document.getElementById('send-btn').click();
      }
    };

    const inputElement = document.getElementById('inputdata');
    inputElement.addEventListener('keypress', handleKeyPress);

    return () => {
      inputElement.removeEventListener('keypress', handleKeyPress);
    };
  }, []);

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === 'Enter') {
        document.getElementById('User-search').click();
      }
    };

    const inputElement = document.getElementById('key');
    inputElement.addEventListener('keypress', handleKeyPress);

    return () => {
      inputElement.removeEventListener('keypress', handleKeyPress);
    };
  }, []);

  return (
    <>
      <div className="home_container">
        <div className="chatapp">
          <div className="sidebar">
            <div className="main_user">
              <img src={img} alt="profile" />
              <h2>{username.toUpperCase()}</h2>
            </div>
            <h5>Select a User</h5>
            <div className="search">
              <input className="UserSearch" id="key" placeholder="Add an user . . .  " />
              <button onClick={search} id="User-search"><BsSearch /></button>
            </div>
            <div className="userlist"></div>
          </div>
          <div className="data_right">
            <div className="topbar">
              <div className="usrinfo">
                <img src={img} alt="userprofilepicture" />
                <p>{users}</p>
              </div>
              <div className="icons">
                <BsCamera />
                <BsCameraVideo />
                <BsThreeDotsVertical />
              </div>
            </div>
            <div className="chatarea"></div>
            <div className="imputarea">
              <input className="inputfields" id="inputdata" />
              <button className="btn btn-primary" onClick={sendMessage} style={{display:"none"}} id="send-btn">Send</button>
              <label htmlFor="send-btn"><BiSend /></label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
