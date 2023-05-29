import React, { useState } from 'react'
import { Input } from './Input'
import { Button } from './Button'

export const Form = () => {

    const [ values, setValues ] = useState({
        name: '',
        email: '',
        birthdate: '',
        password: '',
        passwordConfirmation: '',
    });

    const inputs = [
        {   
            id: 0,
            name: 'Username',
            type: 'text',
            placeholder: 'Username',
            label: 'Username',
            errorMessage: 'Username should be 3-16 character long and contain only letters and numbers.',
            required: true,
            pattern: "^[A-Za-z0-9]{3,16}$"
        },
        {
            id: 1,
            name: 'email',
            type: 'email',
            placeholder: 'Email',
            label: 'Email',
            errorMessage: 'Invalid email address.',
            required: true
        },
        {
            id: 2,
            name: 'birthdate',
            type: 'date',
            placeholder: 'Birthdate',
            label: 'Birthdate'
        },
        {
            id: 3,
            name: 'password',
            type: 'password',
            placeholder: 'Password',
            label: 'Password',
            errorMessage: 'Password should be 8-20 character long and contain at least one number, one letter and one unique character such as !@#$%^&*().',
            required: true,
            pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`
        },
        {
            id: 4,
            name: 'passwordConfirmation',
            type: 'password',
            placeholder: 'Password Confirmation',
            label: 'Password Confirmation',
            errorMessage: 'Passwords do not match.',
            required: true,
            pattern: values.password
        },
    ];

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value
        });
        console.log(values[name]);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(values);
    };


  return (
    <form
        className=" max-w-md shadow-lg"
        onSubmit={handleSubmit}
    >
    
        <div className=' 
            border border-gray-300 border-b-0 rounded-tl-md rounded-tr-md p-6'>
            {inputs.map(input => (
                <Input
                    key={input.id}
                    {...input}
                    value={values[input.name]}
                    onChange={handleInputChange}
                />
            ))}
        </div>


        <div>
            <Button
                label={'SUBMIT'}
                onClick={handleSubmit}
            />
    
        </div>
    </form>
  )
}
