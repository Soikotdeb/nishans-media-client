import React from 'react';
import { useForm, Controller } from 'react-hook-form';

const Register = () => {
    const { control, handleSubmit, formState: { errors }, register } = useForm();

    const handleRegister = (data) => {
        // Handle registration logic here
        console.log(data);
    };

    return (
        <div>
            <h2 className="text-4xl mb-6 font-semibold">Register</h2>
            <form onSubmit={handleSubmit(handleRegister)} className="space-y-4 border rounded-lg p-4  shadow-lg">
                <div>
                    <label htmlFor="newEmail" className="block text-gray-600 font-semibold">Email address <span className="text-red-500">*</span></label>
                    <Controller
                        name="newEmail"
                        control={control}
                        rules={{ required: true }}
                        render={({ field }) => (
                            <input
                                type="email"
                                id="newEmail"
                                {...field}
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-green-500"
                            />
                        )}
                    />
                    {errors.newEmail && <span className="text-red-500">This field is required</span>}
                </div>
                <div className="text-gray-600">
                    A link to set a new password will be sent to your email address.
                </div>
                <p className="text-gray-600">
                    Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our
                    <span className="text-red-500 cursor-pointer"> privacy policy</span>.
                </p>
                <button type="submit" className="btn bg-red-500 hover:bg-red-500 text-white py-3 px-8 rounded-full focus:outline-none">Register</button>
            </form>
        </div>
    );
};

export default Register;
