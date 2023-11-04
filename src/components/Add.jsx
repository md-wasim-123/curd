import React, { useState } from 'react'
import { supabase } from '../SupabaseClient'
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Add = () => {
    const [Add, setAdd] = useState({
        Email: '',
        Name: '',
        Address: ''
    })
    const handleSubmit = async (e) => {
        e.preventDefault()
        const { data, error } = await supabase
            .from('user')
            .insert([
                { Email: Add.Email, Name: Add.Name, Address: Add.Address },
            ])
            .select()
        setAdd({ Email: '', Name: '', Address: '' });
        if (error) {
            toast('🦄 Wow so easy!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        } else {
            toast('Successfully Add', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
        // location.reload(true)
    }
    const handleChange = (e) => {
        setAdd({ ...Add, [e.target.name]: e.target.value })
    }
    return (
        <section className="bg-gray-50 dark:bg-gray-800 h-screen">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Add New Employee
                        </h1>
                        <form className="space-y-4 md:space-y-6" >
                            <div>
                                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                                <input type="text" name="Name" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Name" value={Add.Name} required="" onChange={handleChange} />
                            </div>
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                                <input type="email" name="Email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" value={Add.Email} required="" onChange={handleChange} />
                            </div>
                            <div>
                                <label htmlFor="address" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Address</label>
                                <input type="text" name="Address" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={Add.Address} placeholder="Address" required="" onChange={handleChange} />
                            </div>

                            <div className='flex items-center justify-between'>
                                <button onClick={handleSubmit} className='bg-blue-500 p-2 px-3 rounded-md'>Add</button>
                                <Link to={'/home'}>
                                    <button className='bg-blue-200 p-2 px-3 rounded-md'>Back</button>
                                </Link>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
            <ToastContainer />
        </section >
    )
}

export default Add
