import React, { useState, useContext } from 'react';
import { AppContext } from '../context/AppContext';
import axios from 'axios';
import "../styles/signup.css"

const Signup = () => {
  const { setUser, setLoggedIn } = useContext(AppContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [birthday, setBirthday] = useState('');
  const [description, setDescription] = useState('');
  const [preferenceExchange, setPreferenceExchange] = useState('');
  const [gender, setGender] = useState('');
  const [address, setAddress] = useState('');
  const [passwordShow, setPasswordShow] = useState(false)





  const signUp = async (email, password, firstName, lastName, birthday,description, preferenceExchange, gender, address, e) => {
    e.preventDefault();
    await axios({
      method: 'POST',
      url: `${process.env.REACT_APP_SERVER_URL}/users`,
      data: {
        email,
        password,
        firstName,
        lastName,
        birthday,
        description,
        preferenceExchange,
        gender,
        address
      }
    })
      .then(({ data }) => {
        console.log(data, 'response');
        setUser(data.user);
        setLoggedIn(true);
        setEmail('');
        setPassword('');
        setFirstName('');
        setLastName('');
        setBirthday('');
        setDescription('');
        setPreferenceExchange('');
        setGender('');
        setAddress('');
        localStorage.setItem('token', data.token);
      })
      .catch((e) => console.log(e.message.toString()));
  };

  return (
    <div className="sign-up-div">
      <form onSubmit={(e) => signUp(email, password, firstName, lastName, birthday, description, preferenceExchange, gender, address, e)}>
      
        <div className="sign-up-intro">
            Follow the steps to sign up and find your perfect stay!
        </div>
        <div className="form-group">
          <label htmlFor="email">Email: </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Password: </label>
          <input
            type={passwordShow ? 'text' : 'password'}
            name="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="form-control"
            id="myInput"
          />
          <input type="checkbox"  onChange={() => setPasswordShow(!passwordShow)}/>Show Password
         
        </div>


        <div className="form-group">
          <label htmlFor="name">First Name: </label>
          <input
            type="name"
            name="firstName"
            id="firstName"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="name">Last Name: </label>
          <input
            type="name"
            name="lastName"
            id="lastName"
            placeholder="Last name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
            className="form-control"
          />
        </div>
        
         <div className="form-group">
          <label htmlFor="date">Birthday </label>
          <input
            type="date"
            name="date"
            id="date"
            placeholder="Birthday"
            value={birthday}
            onChange={(e) => setBirthday(e.target.value)}
            required
            className="form-control"
          />
        </div>

     
        <div className="form-desc">
          <label htmlFor="name">Tell us a little about yourself. This is so the host can get to know you when you make a reservation.</label>
          <label> We'll help you out with some questions you can answer!</label>
          <p>Do you have a pet? Are you okay with staying with other guests as well? What type of stay are you looking for? </p>
          <textarea
            type="text"
            name="text"
            id="description"
            placeholder="Housework, mechanic, etc..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            className="form-control"
          />
        </div>

        <div className="form-group">
          <label htmlFor="name">What would you perfer?</label>
           <select
            id="preferenceExchange"
            value={preferenceExchange}
            onChange={(e) => setPreferenceExchange(e.target.value)}
            required
            className="form-control"
            >
                <option value='0'> Pay</option>
                <option value='1'> Work</option>
                <option value='2'> Both</option>
                </select>      

            </div>

            <div className="form-address">
          <label htmlFor="text">Address: </label>
          <input
            type="text"
            name="address"
            id="address"
            placeholder="Ex. 1600 Pennsylvania Ave NW, Washington, DC 20500"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
            className="form-control"
          />
        </div>


        <button type="submit" className="btn btn-primary actions">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Signup;