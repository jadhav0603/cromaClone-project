// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import logo from '../assets/Images/Home/croma_logo/Croma_logo-removebg.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faLocationDot, faUser, faCartShopping, faXmark } from '@fortawesome/free-solid-svg-icons';
import '../css/navbar.css';
import axios from 'axios'

function Navbar() {
  const [menuVisible, setMenuVisible] = useState(false);
  const [loginVisible, setLoginVisible] = useState(false);
  const [location, setLocation] = useState("Fetching location...");
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('');
  const [token, setToken] = useState('');

  //registration details
  const [name,setName]= useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState();
  const [regPassword, setRegPassword] = useState()

// MENU
  const toggleMenu = () => setMenuVisible(!menuVisible);


//Location
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(successCallback, errorCallback);

    function successCallback() {
      fetch(`https://api.opencagedata.com/geocode/v1/json?q=52.3877830%2C9.7334394&key=1c09c463ed7d432db20a1968c7ef2767`)
        .then(response => response.json())
        .then(data => {
          const locationComponents = data.results[0].components;
          const city = locationComponents.city || locationComponents.town || locationComponents.village || '';
          const pincode = locationComponents.postcode || '';
          setLocation(`${city}, ${pincode}`);
          console.log(locationComponents)
        })
        .catch(error => console.error('Error fetching location:', error));
    }

    function errorCallback() {
      setLocation('Unable to fetch location');
    }
  }, []);


//Login And Registration
  const showLogin = () => {
    setLoginVisible(true);
    document.getElementById('mainContainer').classList.add('blurred');
  };

  const closeLogin = () => {
    setLoginVisible(false);
    document.getElementById('mainContainer').classList.remove('blurred');
  };

  const login = () => {
    const loginAcc = document.getElementById('loginDetails');
    loginAcc.innerHTML = `
        <div>
          <span> Please enter your Email ID or Phone number</span><br />
            <input type="text" 
              placeholder="Enter your Email ID or phone number" 
              style="width: 93%; margin: 10px 0px;" 
              required />
            
            <div>
              <input type="checkbox" /> Keep me signed in <br />
            </div>
            
            <span>By continuing you agree to our 
                <span style="color: rgb(18,218,169)">Terms of Use</span> & 
                <span style="color: rgb(18,218,169)">Privacy Policy</span>
            </span> <br />
            
            <button style="background-color: rgb(18,218,169); width: 100%;">Continue</button>
        </div>
      `;
  }  

  const handleSubmit = (e)=>{
    e.preventDefault()
    axios.post('mongodb+srv://jadhavvijay0808:vijay0603@cluster0.qz1wq.mongodb.net/cromaClone',{name,email,mobile,regPassword})
    .then(result => console.log(result))
    .catch(err => console.log(err))
  }

  const register = () => {
    const createAcc = document.getElementById('loginDetails')
    createAcc.innerHTML =
      `<div>
        <form id="registerForm" onSubmit=${handleSubmit}>
            <div>
              <i className="fa-solid fa-xmark" onclick="closeLogin()"></i>
            </div>

            <h3> Create Account </h3>

            <label for="name" name="name">Name : </label>
            <input type="text" 
              id="name" 
              name="name" 
              placeholder="Enter Your Name" 
              onChange="${(e)=>setName(e.target.value)}"
              style="margin-left: 82px;" 
              required> <br>
            
            <label for="email" name="email">Email : </label>
            <input type="email" 
              id="email" 
              name="email" 
              placeholder="Enter Your email" 
              onChange="${(e)=>setEmail(e.target.value)}"
              style="margin-left: 83px;" 
              required><br>

            <label for="mobile" name="mobile">Mobile Number : </label>
            <input type="number" 
              id="mobile" 
              name="mobile" 
              placeholder="Enter Your Mobile Number" 
              onChange="${(e)=>setMobile(e.target.value)}"
              style="margin-left: 10px;" 
              required> <br>

            <label for="password" name="password">Create Password : </label>
            <input type="password" 
              id="password" 
              name="password" 
              placeholder="Enter Your Password" 
              onChange="${(e)=>setRegPassword(e.target.value)}"
              required> <br><br>

            <input type="submit" 
              value="Create Account" 
              style="width:100%; background-color:rgb(18,218,169)" >
        </form>
    </div>`
  }




  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/login', {
        username, password
      });
      setToken(response.data.token);
      alert('Login successful');
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  return (
    <div className="navbar">
      <img src={logo} alt="Croma logo" />

      <div className="menuDiv" onClick={toggleMenu}>
        <div>
          <div className="menuLine"></div>
          <div className="menuLine"></div>
          <div className="menuLine"></div>
        </div>
        <span>Menu</span>
      </div>

      {menuVisible && (
        <div className="menuList">
          <ul>
            <li>Option 1</li>
            <li>Option 2</li>
            <li>Option 3</li>
          </ul>
        </div>
      )}

      <div className="searchBar">
        <input type="text" placeholder="What are you looking for?" className="searchInput" />
        <FontAwesomeIcon icon={faMagnifyingGlass} className="searchIcon" />
      </div>

      <div className="profileIcon">
        <FontAwesomeIcon icon={faLocationDot} style={{width:'2vw'}} />
        <span>{location}</span>
        <FontAwesomeIcon icon={faUser} onClick={showLogin} style={{width:'2vw'}} />
        <FontAwesomeIcon icon={faCartShopping} style={{width:'2vw'}} />
      </div>

      {loginVisible && (
        <div className="loginModal">
          <div className="modalContent">
            <div className="modalHeader">
              <FontAwesomeIcon icon={faXmark} onClick={closeLogin} />
            </div>

            <div className="modalBody">
              <button style={{ width: '50%' }} onClick={login}>Login</button>
              <button style={{ width: '50%' }} onClick={register}>Create Account</button>

              <form id='loginDetails' onSubmit={handleLogin}>

                <span> Please enter your Email ID or Phone number</span><br />
                <input type="text" placeholder="Enter your Email ID or phone number" value={username}
                  onChange={(e) => setUsername(e.target.value)} style={{ width: '93%', margin: '10px 0px' }} required />
                <input type="text" value={password}
                  onChange={(e) => setPassword(e.target.value)} placeholder="Enter your Password" style={{ width: '93%', margin: '10px 0px' }} required />
                <div>
                  <input type="checkbox" /> Keep me signed in <br />
                </div>
                <span>By continuing you agree to our <span style={{ color: 'rgb(18,218,169)' }}>Terms of Use</span> & <span style={{ color: 'rgb(18,218,169)' }}>Privacy Policy</span></span> <br />
                <button style={{ backgroundColor: 'rgb(18,218,169)', width: '100%' }}>Continue</button>

              </form>

            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
