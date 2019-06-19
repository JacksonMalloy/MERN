import React, { useState } from 'react';
//1. Brought in connect so we could work with Redux
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
//2. Also brought in the setAlert action
import { setAlert } from '../../actions/alert';
import PropTypes from 'prop-types';

//destructure setAlert from props
//4. destructered setAlert here, pulled it out of the props
const Register = ({ setAlert }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: ''
  });

  //destructuring from formData ( so we don't have to type formData.name etc )
  //what's great about the useState hook is that you can access anywhere (setForm data or whatever the state is)
  const { name, email, password, password2 } = formData;

  //in setForm data we want to change "useState" so we want to make a copy (use the spread operator)
  //we then want to change the name as the value of the input (use the onChange for every field: '[e.target.name]: e.target.value')
  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    if (password !== password2) {
      //passes this in as a message to our actions, generate an ID, and dispatch setAlert with that message, alertType and ID
      //we put danger because of CSS alert-danger
      //5. we called setAlert when the passwords don't match (setting the message and alert type) -Go to actions/alert
      setAlert('Passwords do not match', 'danger');
    } else {
      console.log('SUCCESS');
    }
  };

  return (
    <>
      <section className='container'>
        <h1 className='large text-primary'>Sign Up</h1>
        <p className='lead'>
          <i className='fas fa-user' /> Create Your Account
        </p>
        <form className='form' onSubmit={e => onSubmit(e)}>
          <div className='form-group'>
            <input
              type='text'
              placeholder='Name'
              name='name'
              value={name}
              onChange={e => onChange(e)}
              required
            />
          </div>
          <div className='form-group'>
            <input
              type='email'
              placeholder='Email Address'
              name='email'
              value={email}
              onChange={e => onChange(e)}
              required
            />
            <small className='form-text'>
              This site uses Gravatar so if you want a profile image, use a
              Gravatar email
            </small>
          </div>
          <div className='form-group'>
            <input
              type='password'
              placeholder='Password'
              name='password'
              minLength='6'
              value={password}
              onChange={e => onChange(e)}
            />
          </div>
          <div className='form-group'>
            <input
              type='password'
              placeholder='Confirm Password'
              name='password2'
              minLength='6'
              value={password2}
              onChange={e => onChange(e)}
            />
          </div>
          <input type='submit' className='btn btn-primary' value='Register' />
        </form>
        <p className='my-1'>
          Already have an account? <Link to='/login'>Sign In</Link>
        </p>
      </section>
    </>
  );
};

Register.propTypes = {
  setAlert: PropTypes.func.isRequired
};

export default connect(
  null,
  { setAlert }
)(Register);
//3. add setAlert action in order to use it and then it's available within props
