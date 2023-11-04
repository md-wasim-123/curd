import React, { useEffect, useState } from 'react'
import { supabase } from '../SupabaseClient';
const Edit = ({ visible, toggelshow, updatedata, id, handleButtonClick }) => {

    if (!visible) return null

    const [update, setupdate] = useState({})

    const handleUpdate = async (id) => {
        const { data, error } = await supabase
            .from('user')
            .update({ id: update.id, Name: update.name, Email: update.email, Address: update.address })
            .eq('id', id)
            .select()
        setupdate({})
    }

    useEffect(() => {
        setupdate(updatedata)
    }, [updatedata])


    const change = () => {
        toggelshow()
    }

    const handleChange = (e) => {
        setupdate({ ...update, [e.target.name]: e.target.value })
    }
    return (
        <div>
            <section className="h-screen w-screen mx-auto  fixed z-20 backdrop-blur-sm bg-white/25  py-8">
                <div className="flex flex-col items-center justify-center px-6  mx-auto lg:py-0">

                    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                        <p onClick={() => change()} className='text-5xl float-right p-5 text-slate-500 cursor-pointer'>+</p>
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                Edit
                            </h1>
                            <form className="space-y-4 md:space-y-6" >
                                <div>
                                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                                    <input type="text" name="name" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Name" required="" value={update.name} onChange={handleChange} />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                                    <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required="" onChange={handleChange} value={update.email} />
                                </div>
                                <div>
                                    <label htmlFor="address" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Address</label>
                                    <input type="text" name="address" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required="" onChange={handleChange} value={update.address} />
                                </div>
                                <button onClick={() => handleUpdate(update.id)} type="submit" className="w-full text-white bg-sky-500  focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center  dark:focus:ring-primary-800">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>

            </section >
        </div >
    )
}

export default Edit
