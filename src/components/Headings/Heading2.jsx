import React from 'react'
import { Link } from 'react-router-dom'

const Heading2 = ({ text1,text2 }) => {
    return (
        <div data-aos="fade-right">
            <h1 className='font-bold lg:text-3xl md:text-3xl text-3xl  mb-0'>{text1} <span className='text-sky-500'>{text2}</span></h1>
            <p className='text-gray-500 mt-4 max-w-2xl'>
            Be a part of unlimited excitement with unique game maps.
            </p>
            
        </div>
    )
}

export default Heading2