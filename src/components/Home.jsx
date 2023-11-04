import React, { useEffect, useState } from 'react'
import { supabase } from '../SupabaseClient';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Edit from './Edit';

const Home = () => {
  const navigate = useNavigate()
  const [users, setusers] = useState([])
  const [show, setshow] = useState(false)
  const [passId, setPassId] = useState()
  const [update, setupdate] = useState({
    id: '',
    name: '',
    email: '',
    address: ''
  })
  console.log(update)

  const fatchdata = async () => {
    const { data } = await supabase
      .from('user')
      .select('*')
    setusers(data)
  }

  useEffect(() => {
    fatchdata()
  }, [ fatchdata()])



  const handleButtonClick = (id) => {
    users.map((userdata) => {
      if (userdata.id === id) {
        setupdate({ id: userdata.id, name: userdata.Name, email: userdata.Email, address: userdata.Address })
      }
    })
    setPassId(id)
  }
  // this function are delete using id
  const deletedata = async (id) => {
    const { error } = await supabase
      .from('user')
      .delete()
      .eq('id', id)
    if (error) {
      toast('🦄 Wow so easy!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });
    }
    else{
      toast('Successfully Delete', {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    }
  }
  const toggelshow=()=>{
    setshow(false)
  }
  return (
    <>
      <Edit visible={show} toggelshow={toggelshow} updatedata={update} id={passId} />
      <div className='w-full h-screen bg-slate-800 py-20 px-3'>
        <a href="/add">
          <button className='bg-teal-400 p-2 rounded-lg m-2 px-5'>Add <i class="fa-solid fa-address-card"></i></button>
        </a>
        <div className="relative overflow-x-auto">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  EMP ID
                </th>
                <th scope="col" className="px-6 py-3">
                  EMP EMAIL
                </th>
                <th scope="col" className="px-6 py-3">
                  EMP NAME
                </th>
                <th scope="col" className="px-6 py-3">
                  EMP ADDRESS
                </th>
                <th scope="col" className="px-6 py-3">
                  ACTION
                </th>
              </tr>
            </thead>
            <tbody>
              {users.map((item) => (
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700" key={item.id}>
                  <th className="px-6 py-4 font-medium  text-white  dark:text-white">
                    {item.id}
                  </th>
                  <td className="px-6 py-4">
                    {item.Email}
                  </td>
                  <td className="px-6 py-4">
                    {item.Name}
                  </td>
                  <td className="px-6 py-4">
                    {item.Address}
                  </td>
                  <td className="px-6 py-4 flex items-center flex-nowrap">
                    <button onClick={() => { handleButtonClick(item.id), setshow(true)}} className='bg-blue-700 p-2 px-4  rounded-lg mx-2'>Edit <i class="fa-solid fa-pen-to-square"></i></button>
                    <button onClick={() => { deletedata(item.id) }} className='bg-neutral-600 p-2 rounded-lg hover:bg-red-700'>Delete <i class="fa-solid fa-trash"></i></button>
                  </td>
                </tr>))}
            </tbody>
          </table>
        </div>
        <ToastContainer />
      </div>
    </>
  )
}

export default Home
