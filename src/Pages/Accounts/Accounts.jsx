import React, { useState ,useEffect} from 'react';
import { useForm } from 'react-hook-form';
import { FaEye, FaEyeSlash, FaGoogle } from 'react-icons/fa';
import Register from './Register';
import './Accounts.css'

const Accounts = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [animate, setAnimate] = useState(false); 

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    const handleLogin = (data) => {
        // Handle login logic here
        console.log(data);
    };
    useEffect(() => {
        // Trigger animation when the component mounts
        setAnimate(true);
    }, []);
    return (
        <div className={`bg-[#F7F3F5] flex flex-col md:flex-row justify-center items-center h-screen gap-5 p-4 font-sans ${animate ? 'login-form active' : 'login-form'}`}>
            <div className="lg:w-1/2 w-full">
                <h2 className="text-4xl mb-6 font-semibold">Login </h2>
                <form onSubmit={handleSubmit(handleLogin)} className="space-y-4 border rounded-lg p-4 shadow-lg">
                    <div>
                        <label htmlFor="email" className="block text-gray-600 font-semibold">Username or email address <span className="text-red-500">*</span></label>
                        <input
                            type="email"
                            id="email"
                            {...register('email', { required: true })}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
                        />
                        {errors.email && <span className="text-red-500">This field is required</span>}
                    </div>
                    <div className="relative">
                        <label htmlFor="password" className="block text-gray-600 font-semibold">Password <span className="text-red-500">*</span></label>
                        <input
                            type={passwordVisible ? 'text' : 'password'}
                            id="password"
                            {...register('password', { required: true })}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
                        />
                        <button
                            type="button"
                            className="absolute my-auto right-3"
                            onClick={togglePasswordVisibility}
                        >
                            {passwordVisible ? (
                                <FaEyeSlash className="h-5 w-5 text-gray-600" />
                            ) : (
                                <FaEye className="h-5 w-5 text-gray-600" />
                            )}
                        </button>
                    </div>
                    {errors.password && <span className="text-red-500">This field is required</span>}
                    <div className="flex justify-between items-center">
                        <label className="flex items-center">
                            <input type="checkbox" {...register('rememberMe')} className="text-blue-500 mr-2" />
                            <span className="text-gray-600 font-semibold">Remember Me</span>
                        </label>
                        <a href="#" className="text-red-500 hover:underline">Lost your password?</a>
                    </div>
                    <button type="submit" className="btn bg-red-500 hover:bg-red-500 text-white py-3 px-8 rounded-full focus:outline-none">Login</button>
                </form>
            </div>
            <div className="lg:w-1/2 w-full  shadow-lg">
                <Register />
            </div>
        </div>
    );
};

export default Accounts;
