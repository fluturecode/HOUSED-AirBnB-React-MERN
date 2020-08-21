import React, { useState, useContext } from 'react';
import { AppContext } from '../context/AppContext';
import axios from 'axios';
import '../styles/signup.css';
import FileUpload from './FileUpload';

const initialState = {
  email: '',
  password: '',
  birthday: '',
  phone: '',
  address: '',
  firstName: '',
  lastName: '',
  preferencesExchange: 'Pay',
  isHost: '',
  gender: '',
  description: ''
};

const Signup = ({ history }) => {
  const { setUser, setLoggedIn } = useContext(AppContext);
  const [state, setState] = useState(initialState);
  const [passwordShow, setPasswordShow] = useState(false);

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const {
    email,
    password,
    firstName,
    lastName,
    birthday,
    description,
    preferencesExchange,
    gender,
    address,
    phone,
    isHost
  } = state;

  const handleSignUp = async (e) => {
    e.preventDefault();
    await axios({
      method: 'POST',
      url: '/api/register',
      data: {
        email,
        password,
        firstName,
        lastName,
        address,
        description,
        isHost,
        phone,
        gender,
        preferencesExchange,
        birthday
      }
    })
      .then(({ data }) => {
        setUser(data.user);
        setLoggedIn(true);
        setState(initialState);
        localStorage.setItem('token', data.token);
        history.push('/');
      })
      .catch((error) => console.log(error.message));
  };

  const isInvalid = state.password.length < 8;

  return (
    <div className="sign-up-div">
      <form onSubmit={(e) => handleSignUp(e)}>
        <h3>Follow the steps to sign up and find your perfect stay!</h3>

        <div className="form-group">
          <label htmlFor="email">
            <p>Email: </p>{' '}
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter email"
            value={state.email}
            onChange={handleChange}
            required
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password: </label>
          <input
            type={passwordShow ? 'text' : 'password'}
            name="password"
            placeholder="Enter password"
            value={state.password}
            onChange={handleChange}
            required
            className="form-control"
            id="myInput"
          />
          <div>
            <input
              type="checkbox"
              onChange={() => setPasswordShow(!passwordShow)}
            />
          </div>
          Show password
        </div>

        <div className="form-group">
          <label htmlFor="name">First Name: </label>
          <input
            type="name"
            name="firstName"
            id="firstName"
            placeholder="First Name"
            value={state.firstName}
            onChange={handleChange}
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
            value={state.lastName}
            onChange={handleChange}
            required
            className="form-control"
          />
        </div>

        <div className="form-group">
          <label htmlFor="date">
            <p>Birthday </p>
          </label>
          <input
            type="date"
            name="birthday"
            id="date"
            placeholder="Birthday"
            value={state.birthday}
            onChange={handleChange}
            required
            className="form-control"
          />
        </div>

        <div className="form-desc">
          <label htmlFor="name">
            Tell us a little about yourself. This is so the host can get to know
            you when you make a reservation.
          </label>
          <p>
            Do you have a pet? Are you okay with staying with other guests as
            well? What type of stay are you looking for?{' '}
          </p>
          <textarea
            type="text"
            name="description"
            id="description"
            placeholder="Housework, mechanic, etc..."
            value={state.description}
            onChange={handleChange}
            required
            className="form-control"
          />
        </div>

        <div className="form-group">
          <label htmlFor="name">
            <p> What would you perfer? </p>
          </label>
          <select
            id="preferenceExchange"
            name="preferencesExchange"
            value={state.preferencesExchange}
            onChange={handleChange}
            required
            className="form-control"
          >
            <option value="Pay"> Pay</option>
            <option value="Work"> Work</option>
            <option value="Both"> Both</option>
          </select>
        </div>

        <div className="form-address">
          <label htmlFor="text">Address: </label>
          <input
            type="text"
            name="address"
            id="address"
            placeholder="Ex. 1600 Pennsylvania Ave NW, Washington, DC 20500"
            value={state.address}
            onChange={handleChange}
            required
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="select">
            <p>Gender: </p>
          </label>
          <select
            type="select"
            name="gender"
            id="gender"
            value={state.gender}
            onChange={handleChange}
            required
            className="form-control"
          >
            <option value=""> Select Gender:</option>
            <option value="Male"> Male</option>
            <option value="Female"> Female</option>
            <option value="Other"> Other</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="text">
            <p>Phone: </p>
          </label>
          <input
            type="text"
            name="phone"
            id="phone"
            placeholder="Phone Number"
            value={state.phone}
            onChange={handleChange}
            required
            className="form-control"
          />
        </div>

        <div className="form-group">
          <label htmlFor="select">Lastly, what are you looking for? </label>
          <select
            type="select"
            name="isHost"
            id="isHost"
            value={state.isHost}
            onChange={handleChange}
            required
            className="form-control"
          >
            <option value=""> Choose One:</option>
            <option value="false"> A place to stay</option>
            <option value="true"> To share my space</option>
          </select>
        </div>

        <p> Please Upload License (optional until booking)</p>

        <FileUpload />
        <button type="submit" className="submit-btn" disabled={isInvalid}>
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Signup;
