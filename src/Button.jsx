import React from 'react'

export const Button = ({
    onClick,
    label
}
) => {
  return (
    <button
        className=' bg-black text-white text-sm py-2 px-4 w-full rounded-bl-md rounded-br-md'
        onClick={onClick}
    >
        {label}
    </button>
  )
}
