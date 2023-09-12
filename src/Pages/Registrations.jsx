import React, { useState } from 'react'
import axios from 'axios'

export default function Registrations() {

    const [isLogin, setLogin] = useState(false)
    const [tab, setTab] = useState(1)
    const [userData, setUserData] = useState([{}]);

    const [userName, setNewName] = useState('');
    const [userPhone, setNewPhone] = useState(0);
    const [userEmail, setNewEmail] = useState('');
    const [userPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [warning, setWarning] = useState('');

    const [loginEmail, setLoginEmail] = useState('');
    const [loginPass, setLoginPass] = useState('');

    const swtichTab = (tno) => {
        switch (tno) {
            case 1:
                setTab(1)
                break;
            case 2:
                setTab(2)
                break;
            case 3:
                setTab(3)
                break;
            default:
                setTab(1)
                break;
        }
    }

    const register = () => {
        if (userPassword === confirmPassword) {
            setWarning('')
            try {
                axios.post("http://localhost:6969/signup", {
                    name: userName,
                    phone: userPhone,
                    email: userEmail,
                    password: userPassword
                }).then((res) => {
                    alert("Registration Successful Now you can login ")
                    setTab(2)
                    setNewName('')
                    setNewPhone()
                    setNewEmail('')
                    setNewPassword('')
                    setConfirmPassword('')
                }).catch((err) => {
                    console.log(err)
                })
            } catch (error) {
                console.log(error)
            }

        } else {
            setWarning('Password not match')
        }
    }


    const login = async () => {
        const res = await axios.get("http://localhost:6969/login")
        setUserData(res.data)

        if (loginEmail.length === 0 && loginPass.length === 0) {
            setWarning("Enter email and password")
        } else {
            setWarning('')
            userData.filter(async (ele) => {
                if (ele.email === loginEmail) {
                    if (ele.password === loginPass) {
                        axios.post("http://localhost:6969/login", {
                            email: loginEmail
                        })
                        setLogin(true)

                        setWarning('')
                    } else {
                        setWarning("Invaild Details")

                    }
                }
            })
        }

    }




    return (
        <>

            {isLogin === false &&
                (

                    <div>
                        <div className="text-white pt-[4rem] ">
                            <div className=" text-white my-4 flex justify-between w-3/5 max-sm:w-full mx-auto">
                                <div className="">
                                    <a className='text-4xl max-sm:text-sm title-font my-5 max-sm:mx-3' href='#' onClick={() => { swtichTab(1) }}>The Spice Table</a>
                                </div>
                                <div className="text-[16px] max-sm:text-[12px] my-auto">
                                    <a className=' bg-gray-600 text-white px-4 py-1  max-sm:px-2' href="#" onClick={() => { swtichTab(2) }}>Login</a>
                                    <a className=' bg-white text-black px-4 py-1  max-sm:px-2' href="#" onClick={() => { swtichTab(3) }}>Sign up</a>
                                </div>
                            </div>
                            {tab === 1 && (

                                <div className="">

                                    <div className="text-center my-10">
                                        <div className="text-2xl">
                                            <h2>Order Food From  <span className='title-font my-5'>The Spice Table</span></h2>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-3 bg-white text-black w-3/4 max-sm:w-full  mx-auto my-5 ">
                                        <div className="">
                                            <div className="">
                                                <img className='w-40 h-40 rounded-full mx-auto  max-sm:w-24 max-sm:h-24' src="https://static.vecteezy.com/system/resources/previews/008/378/639/original/order-filled-line-icon-linear-style-sign-for-mobile-concept-and-web-design-outline-icon-symbol-logo-illustration-graphic-free-vector.jpg" alt="" />
                                            </div>
                                            <div className=" my-5">
                                                <p className='text-xl my-4 font-bold text-center  max-sm:text-sm'>No Minimum Order</p>
                                                <p className='text-sm text-center w-3/4 mx-auto max-sm:text-xs'>Order in for yourself or for the group, with no restrictions on order value</p>
                                            </div>
                                        </div>
                                        <div className="">
                                            <div className="">
                                                <img className='w-40 h-40 rounded-full mx-auto  max-sm:w-24 max-sm:h-24' src="https://media.istockphoto.com/id/1193451471/vector/map-pin-vector-glyph-icon.jpg?s=612x612&w=0&k=20&c=wuWVeHuthNAXzjOO5_VY9SUOd-6cxwpVH8VVfh6Y7Lc=" alt="" />
                                            </div>
                                            <div className=" my-5">
                                                <p className='text-xl my-4 font-bold text-center  max-sm:text-sm'>No Minimum Order</p>
                                                <p className='text-sm text-center w-3/4 mx-auto max-sm:text-xs'>Order in for yourself or for the group, with no restrictions on order value</p>
                                            </div>
                                        </div>
                                        <div className="">
                                            <div className="">
                                                <img className='w-40 h-40 rounded-full mx-auto  max-sm:w-24 max-sm:h-24' src="https://t4.ftcdn.net/jpg/04/17/80/13/360_F_417801326_v56pJQQ9LxfsPV2tGpRY9VHKnLyJQNcC.jpg" alt="" />
                                            </div>
                                            <div className=" my-5">
                                                <p className='text-xl my-4 font-bold text-center max-sm:text-sm '>No Minimum Order</p>
                                                <p className='text-sm text-center w-3/4 mx-auto max-sm:text-xs'>Order in for yourself or for the group, with no restrictions on order value</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                            {tab === 2 && (
                                <div className="">
                                    <div className="">
                                        <div className="w-3/4 mx-auto max-sm:w-full">
                                            <h2 className='text-start text-4xl mx-24 mt-10 max-sm:text-xl'>Login</h2>
                                            <div className="w-1/2 mx-auto my-8 max-sm:w-full max-sm:px-10">
                                                <form>
                                                    <div className="">
                                                        <div className="mb-6">
                                                            <label
                                                                htmlFor="email"
                                                                className="block mb-2 text-sm font-medium text-white"
                                                            >
                                                                Email
                                                            </label>
                                                            <input
                                                                type="email"
                                                                id="loginEmail"
                                                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                                                                placeholder="name@mail.com"
                                                                value={loginEmail}
                                                                onChange={(e) => { setLoginEmail(e.target.value) }}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="">
                                                        <div className="mb-6">
                                                            <label
                                                                htmlFor="password"
                                                                className="block mb-2 text-sm font-medium text-white"
                                                            >
                                                                Password
                                                            </label>
                                                            <input
                                                                type="password"
                                                                id="loginPass"
                                                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                                                placeholder='Password'
                                                                autoComplete='new-password'
                                                                value={loginPass}
                                                                onChange={(e) => { setLoginPass(e.target.value) }}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="text-sm text-red-500 my-4">
                                                        <p>{warning}</p>
                                                    </div>
                                                    {/* <button
                                                        type="submit"
                                                        className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center "

                                                    >
                                                        Login
                                                    </button> */}
                                                    <a className='bg-orange-600 px-4 py-2 rounded-md max-sm:text-sm' onClick={login} href="#">Login</a>
                                                </form>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                            {tab === 3 && (
                                <div className="">
                                    <div className="">
                                        <div className="w-3/4 mx-auto max-sm:w-full">
                                            <h2 className='text-start text-4xl mx-24 mt-10'>Sign up</h2>
                                            <div className="w-3/4 mx-auto my-8 max-sm:w-full max-sm:px-10">
                                                <form onSubmit={register}>
                                                    <div className="mb-6">
                                                        <label
                                                            htmlFor="name"
                                                            className="block mb-2 text-sm font-medium text-white"
                                                        >
                                                            Name
                                                        </label>
                                                        <input
                                                            type="name"
                                                            id="name"
                                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                                            placeholder='Name'
                                                            value={userName}
                                                            onChange={(e) => { setNewName(e.target.value) }}
                                                        />
                                                    </div>
                                                    <div className="grid grid-cols-2 space-x-2">

                                                        <div className="mb-6">
                                                            <label
                                                                htmlFor="phone"
                                                                className="block mb-2 text-sm font-medium text-white"
                                                            >
                                                                Phone Number
                                                            </label>
                                                            <input
                                                                type="number"
                                                                id="phoneNo"
                                                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                                                                placeholder="Phone Number"
                                                                value={userPhone}
                                                                onChange={(e) => { setNewPhone(e.target.value) }}
                                                            />
                                                        </div>

                                                        <div className="mb-6">
                                                            <label
                                                                htmlFor="email"
                                                                className="block mb-2 text-sm font-medium text-white"
                                                            >
                                                                Email
                                                            </label>
                                                            <input
                                                                type="email"
                                                                id="userEmail"
                                                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                                                                placeholder="name@mail.com"
                                                                autoComplete='username'
                                                                value={userEmail}
                                                                onChange={(e) => { setNewEmail(e.target.value) }}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="grid grid-cols-2 space-x-2">
                                                        <div className="mb-2">
                                                            <label
                                                                htmlFor="password"
                                                                className="block mb-2 text-sm font-medium text-white"
                                                            >
                                                                Password
                                                            </label>
                                                            <input
                                                                type="password"
                                                                id="userPassword"
                                                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                                                placeholder='Password'
                                                                value={userPassword}
                                                                autoComplete='new-password'
                                                                onChange={(e) => { setNewPassword(e.target.value) }}
                                                            />
                                                        </div>
                                                        <div className="mb-2">
                                                            <label
                                                                htmlFor="Confirm password"
                                                                className="block mb-2 text-sm font-medium text-white"
                                                            >
                                                                Confirm Password
                                                            </label>
                                                            <input
                                                                type="password"
                                                                id="confirmPass"
                                                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                                                placeholder='Confirm Password'
                                                                autoComplete='new-password'
                                                                value={confirmPassword}
                                                                onChange={(e) => { setConfirmPassword(e.target.value) }}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="">
                                                        <p className='text-sm text-red-500 my-2' >{warning}</p>
                                                    </div>
                                                    <button
                                                        type="submit"
                                                        className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center max-sm:text-sm"
                                                    >
                                                        Sign up
                                                    </button>
                                                </form>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                )
            }

            {isLogin === true && (
                <div className="text-white pt-24">
                    <div className="mx-5">

                        <h2 className='text-2xl'>profile</h2>
                    </div>
                </div>
            )}

        </>
    )
}
