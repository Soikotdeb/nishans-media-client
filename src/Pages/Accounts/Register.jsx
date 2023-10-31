import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const navigate = useNavigate();
  const { createUser } = useContext(AuthContext);
  const [passwordVisible, setPasswordVisible] = useState(false);

  const onSubmit = (data) => {
    const { email, password, name } = data;

    createUser(email, password)
      .then((result) => {
        const loggedUser = result.user;


        /* 
          //     updatedUserProfiles(data.name, data.photoURL)
                //       .then(() => {
                //         const saveUser = { name: data.name, email: data.email, imgae: data.photoURL, }
                //         fetch('https://language-server-one.vercel.app/users', {
                //           method: 'POST',
                //           headers: {
                //             'content-type': 'application/json'
                //           },
                //           body: JSON.stringify(saveUser)
                //         })
                //           .then(res => res.json())
                //           .then(data => {
                //             if (data.insertedId) {
                //               reset();
                //               Swal.fire({
                //                 position: 'top-end',
                //                 icon: 'success',
                //                 title: 'Registration successfully.',
                //                 showConfirmButton: false,
                //                 timer: 1500
                //               });
                //               navigate('/')
                //             }
                //           })
                //       })
                //       .catch(error => console.log(error))
        */
        // TODO:  Send email verfication email
        // Show a success message
        Swal.fire({
          icon: 'success',
          title: 'Registration Successful',
          text: 'You are now registered.',
        });

        // Reset the form
        reset();

        // todo: any additional logic you need
      })
      .catch((error) => {
        Swal.fire({
          icon: 'error',
          title: 'Registration Failed',
          text: error.message,
        });
        console.log(error.message);
      });
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div >
      <h2 className="text-4xl mb-6 font-semibold">Register</h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-4 border rounded-lg p-4 shadow-lg"
      >
        <div>
          <label htmlFor="name" className="block text-gray-600 font-semibold">
            Name
          </label>
          <input
            type="text"
            id="name"
            {...register('name')}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-green-500"
          />
        </div>
        <div>
          <label htmlFor="newEmail" className="block text-gray-600 font-semibold">
            Email address <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="newEmail"
            {...register('email', { required: true })}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-green-500"
          />
          {errors.email && (
            <span className="text-red-500">This field is required</span>
          )}
        </div>
        <div>
          <label htmlFor="password" className="block text-gray-600 font-semibold">
            Password <span className="text-red-500">*</span>
          </label>
          <input
            type={passwordVisible ? 'text' : 'password'}
            id="password"
            {...register('password', { required: true })}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-green-500"
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
          {errors.password && (
            <span className="text-red-500">This field is required</span>
          )}
        </div>
        <div className="text-gray-600">
          A link to set a new password will be sent to your email address.
        </div>
        <p className="text-gray-600">
          Your personal data will be used to support your experience throughout
          this website, to manage access to your account, and for other purposes
          described in our
          <span className="text-red-500 cursor-pointer"> privacy policy</span>.
        </p>
        <button
          type="submit"
          className="btn bg-red-500 hover:bg-red-500 text-white py-3 px-8 rounded-full focus:outline-none"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;


