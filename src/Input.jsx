import React, { useState } from 'react'

export const Input = ({
    id,
    label,
    onChange,
    errorMessage,
    required,
    ...props

}) => {

  const [ blur, setBlur ] = useState(false);
  
  const handleBlur = () => {
    setBlur(true)
  }


  return (
    <div className=' [&:not(:last-child)]:mb-3'>
        {/* <label htmlFor={id}
            className=' block text-sm text-gray-400 mb-1'
        >
          {label}
        </label> */}

        <input
            className=' peer w-full border border-gray-400 rounded-md p-1 shadow [&[type="date"]]:text-gray-400 [&[type="date"]]:text-sm placeholder:text-sm placeholder:text-gray-400  focus:outline-none focus:shadow-inner focus:border-indigo-500 invalid:[&[blur="true"]]:text-red-500 invalid:[&[blur="true"]]:border-red-500'
            id={id}
            {...props}
            onChange={onChange}
            required={required}
            onBlur={handleBlur}
            onFocus={() => props.name === 'passwordConfirmation' && setBlur(true)}
            blur={blur.toString()}
        />
        <span
            className=' hidden text-xs peer-[&[blur="true"]]:peer-invalid:block peer-[&[blur="true"]]:peer-invalid:text-red-500'
            >
            {errorMessage}
        </span>
    </div>
  )
}
