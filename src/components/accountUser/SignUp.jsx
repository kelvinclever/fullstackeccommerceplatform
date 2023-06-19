import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './signup.css';

const SignUp = () => {
  const [birthDate, setBirthDate] = useState(null);
  const [gender, setGender] = useState('');
  const [termsAccepted, setTermsAccepted] = useState(false);

  const handleBirthDateChange = (date) => {
    setBirthDate(date);
  };

  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

  const handleTermsAcceptedChange = (event) => {
    setTermsAccepted(event.target.checked);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform signup logic here
  };

  return (
    <div className='signup'>
      <form className='form' onSubmit={handleSubmit}>
        <p className='title'>
          <button data-text='Awesome' className='button'>
            <span className='actual-text'>&nbsp;Register&nbsp;</span>
            <span className='hover-text' aria-hidden='true'>&nbsp;Register&nbsp;</span>
          </button>
        </p>
        <p className='message'>Signup now and get full access to our app.</p>
        <div className='flex'>
          <label>
            <input required='' placeholder='' type='text' className='input' />
            <span>Firstname</span>
          </label>

          <label>
            <input required='' placeholder='' type='text' className='input' />
            <span>Lastname</span>
          </label>
        </div>

        <label>
          <input required='' placeholder='' type='email' className='input' />
          <span>Email</span>
        </label>

        <label>
          <input required='' placeholder='' type='password' className='input' />
          <span>Password</span>
        </label>
        <label>
          <input required='' placeholder='' type='password' className='input' />
          <span>Confirm password</span>
        </label>

        <label>
          <DatePicker
            selected={birthDate}
            onChange={handleBirthDateChange}
            placeholderText='YYYY-MM-DD'
            className='input'
            dateFormat='yyyy-MM-dd'
          />
          <span>Birth Date</span>
        </label>

        <div className='gender-container'>
          <span>Gender</span>
          <label>
            <input
              type='radio'
              name='gender'
              value='male'
              checked={gender === 'male'}
              onChange={handleGenderChange}
            />
            Male
          </label>
          <label>
            <input
              type='radio'
              name='gender'
              value='female'
              checked={gender === 'female'}
              onChange={handleGenderChange}
            />
            Female
          </label>
        </div>

        <div className='terms-container'>
          <label>
            <input
              type='checkbox'
              required=''
              checked={termsAccepted}
              onChange={handleTermsAcceptedChange}
            />
            I accept the terms and conditions
          </label>
        </div>

        <button type='submit' className='buttonsignup'>
          Sign up
          <div className='arrow-wrapper'>
            <div className='arrow'></div>
          </div>
        </button>
        <p className='signin'>
          Already have an account? <a href='/login'>Sign in</a>
        </p>
      </form>
    </div>
  );
};

export default SignUp;
