import React from 'react'
import logo from '../assets/Supabase.svg'
import { useNavigate } from 'react-router-dom';
const Navber = ({token}) => {
    const navigate= useNavigate()

const handleLogout=()=>{
    localStorage.removeItem('token');
    navigate('/login')
}
    return (
        <nav className="bg-white border-gray-200 dark:bg-gray-900">
            <div className="max-w-screen-xl flex  items-center justify-between  p-4">
                <a href="/" className="flex items-center">
                    <img src={logo} className="h-8 mr-3" alt="Flowbite Logo" />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Ap</span>
                </a>
                <div className="" >
                    <ul className="font-medium   border-gray-100 rounded-lg bg-gray-50 md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                    {!token ?  <div className='flex items-center justify-center md:gap-6'>
                            <li>
                                <a href="/login" className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">Login</a>
                            </li>
                            <li>
                                <a href="/signup" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Sign Up</a>
                            </li>
                        </div>
                       : <div>
                            <button className='bg-slate-700 p-2 rounded-lg' onClick={handleLogout}>Logout</button>
                        </div>}
                    </ul>
                </div>
            </div>
        </nav>

    )
}

export default Navber
