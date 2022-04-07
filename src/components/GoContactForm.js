import React, { useState } from 'react';

import {goContactForm, goSubmit} from '../styles/go-contact-form.module.css'


const GoContactForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [company, setCompany] = useState('');
    const [budget, setBudget] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('You have submitted');
    }

    return (
            <form className={goContactForm} onSubmit={handleSubmit}>
                {/*<div className='form-control'>*/}
                    <input
                        type='text'
                        id='name'
                        name='name'
                        value={name}
                        placeholder='Name'
                        onChange={(e) => setName(e.target.value)}
                    />
                    <input
                        type='text'
                        id='email'
                        name='email'
                        value={email}
                        placeholder='Email'
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        type='text'
                        id='phone'
                        name='phone'
                        value={phone}
                        placeholder='Phone'
                        onChange={(e) => setPhone(e.target.value)}
                    />
                    <input
                        type='text'
                        id='company'
                        name='company'
                        value={company}
                        placeholder='Company'
                        onChange={(e) => setCompany(e.target.value)}
                    />
                    <input
                        type='text'
                        id='budget'
                        name='budget'
                        value={budget}
                        placeholder='Budget'
                        onChange={(e) => setBudget(e.target.value)}
                    />
                    <input
                        type='text'
                        id='message'
                        name='message'
                        value={message}
                        placeholder='Message'
                        onChange={(e) => setMessage(e.target.value)}
                    />
                {/*</div>*/}
                <div className={goSubmit}>
                    <button type='submit'>Go!</button>
                </div>
            </form>
  );
};

export default GoContactForm;