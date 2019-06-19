import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  //destructuring from formData ( so we don't have to type formData.name etc )
  //what's great about the useState hook is that you can access anywhere (setForm data or whatever the state is)
  const { email, password } = formData;

  //in setForm data we want to change "useState" so we want to make a copy (use the spread operator)
  //we then want to change the name as the value of the input (use the onChange for every field: '[e.target.name]: e.target.value')
  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    console.log('SUCCESS');
  };

  return (
    <>
      <section className='container'>
        <h1 className='large text-primary'>Sign In</h1>
        <p className='lead'>
          <i className='fas fa-user' /> Sign Into Your Account
        </p>
        <form className='form' onSubmit={e => onSubmit(e)}>
          <div className='form-group'>
            <input
              type='email'
              placeholder='Email Address'
              name='email'
              value={email}
              onChange={e => onChange(e)}
              required
            />
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

          <input type='submit' className='btn btn-primary' value='Login' />
        </form>
        <p className='my-1'>
          Don't have an account? <Link to='/register'>Sign Up</Link>
        </p>
      </section>
    </>
  );
};

export default Login;
