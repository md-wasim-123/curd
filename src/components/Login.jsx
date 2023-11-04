import React from 'react'
import { supabase } from '../SupabaseClient'
import { useNavigate,Link } from 'react-router-dom';
const Login = ({setToken}) => {
    const navigate= useNavigate()
    const [userData, setData] = React.useState({
        email: '',
        password: ''
    })

    const handleclick = async (e) => {
        e.preventDefault();
        try {

            const { data, error } = await supabase.auth.signInWithPassword({
                email: userData.email,
                password: userData.password,
            })

            if (error) throw error
            console.log(data)
            setToken(data)
            navigate('/home')
        } catch (error) {
            alert(error)
            // console.log(error)
        }

    }
    // target the value in input
    const handleChange = (e) => {
        setData({ ...userData, [e.target.name]: e.target.value })
        console.log(userData)
    }
    return (
        <div>
            <section className="bg-gray-50 dark:bg-gray-800 h-screen">
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">

                    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                Login to your account
                            </h1>
                            <form className="space-y-4 md:space-y-6" action="#">


                                <div>
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                    <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required="" onChange={handleChange} />
                                </div>
                                <div>
                                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                    <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={handleChange} required="" />
                                </div>

                                <button onClick={handleclick} type="submit" className="w-full text-white bg-sky-500  focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center  dark:focus:ring-primary-800">Login</button>
                                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                    Don’t have an account yet? <Link to={'/signup'} className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign Up</Link>
                                </p>
                            </form>
                          
                        </div>
                    </div>
                </div>

            </section >
        </div >
    )
}

export default Login
