import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useRedirectIfAuth } from '../hooks/useRedirectIfAuth';

interface FormValues {
    username: string;
    email: string;
    password: string;
    agree: boolean;
}

const SignUpComp: React.FC = () => {
   const isLoggedin = useRedirectIfAuth()
    if (isLoggedin) {
        return <div className='min-h-screen' >

        </div>;; // or redirect to home page
    }
    const navigate = useNavigate();
    const formik = useFormik<FormValues>({
        initialValues: {
            username: '',
            email: '',
            password: '',
            agree: false,
        },
        validationSchema: Yup.object({
            username: Yup.string().required('Username is required'),
            email: Yup.string().email('Invalid email').required('Email is required'),
            password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
            agree: Yup.boolean().oneOf([true], 'You must accept terms and conditions'),
        }),
        onSubmit: async (values, { setSubmitting, resetForm }) => {
            try {
                const API_BASE_URL = import.meta.env.VITE_REACT_APP_API_BASE_URL;
                const response = await axios.post(`${API_BASE_URL}/api/auth/signup`, values);
                console.log('Signup success:', response.data);
                alert('Registration successful!');
                resetForm();
                navigate('/signin'); // Redirect to sign-in page after successful registration
            } catch (error) {
                console.error('Signup error:', error);
                alert('Registration failed. Please try again.');
            } finally {
                setSubmitting(false);
            }
        },
    });

    return (
        <div className="flex py-20 min-h-screen flex-col lg:flex-row w-full max-w-7xl mx-auto mt-10 shadow-lg rounded overflow-hidden">
            {/* Left side: Image */}
            <div className="lg:w-1/2">
                <img
                    src="/signup.jpg" // replace with your image
                    alt="Signup"
                    className="object-cover h-full w-full"
                />
            </div>

            {/* Right side: Form */}
            <div className="lg:w-1/2 flex justify-center items-center flex-col w-full bg-white p-8">
                <h2 className="text-2xl font-semibold text-center text-black mb-6">Create Your Account</h2>
                <form onSubmit={formik.handleSubmit} className="flex w-full flex-col gap-8">

                    {/* Username */}
                    <div className="relative">
                        <input
                            type="text"
                            name="username"
                            id="username"
                            className={`peer w-full border-b-2 border-gray-300 bg-transparent py-2 placeholder-transparent focus:border-red-600 text-black focus:outline-none ${formik.touched.username && formik.errors.username ? 'border-red-500' : ''
                                }`}
                            placeholder="Username"
                            value={formik.values.username}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        <label
                            htmlFor="username"
                            className="absolute left-0 -top-3.5 text-black text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-black"
                        >
                            Username
                        </label>
                        {formik.touched.username && formik.errors.username && (
                            <p className="text-red-500 text-sm">{formik.errors.username}</p>
                        )}
                    </div>

                    {/* Email */}
                    <div className="relative">
                        <input
                            type="email"
                            name="email"
                            id="email"
                            className={`peer w-full border-b-2 text-black border-gray-300 bg-transparent py-2 placeholder-transparent focus:border-red-600 focus:outline-none ${formik.touched.email && formik.errors.email ? 'border-red-500' : ''
                                }`}
                            placeholder="Email Address"
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        <label
                            htmlFor="email"
                            className="absolute left-0 -top-3.5 text-black text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-black"
                        >
                            Email Address
                        </label>
                        {formik.touched.email && formik.errors.email && (
                            <p className="text-red-500 text-sm">{formik.errors.email}</p>
                        )}
                    </div>

                    {/* Password */}
                    <div className="relative">
                        <input
                            type="password"
                            name="password"
                            id="password"
                            className={`peer w-full border-b-2 text-black border-gray-300 bg-transparent py-2 placeholder-transparent focus:border-red-600 focus:outline-none ${formik.touched.password && formik.errors.password ? 'border-red-500' : ''
                                }`}
                            placeholder="Password"
                            value={formik.values.password}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        <label
                            htmlFor="password"
                            className="absolute left-0 -top-3.5 text-black text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-black"
                        >
                            Password
                        </label>
                        {formik.touched.password && formik.errors.password && (
                            <p className="text-red-500 text-sm">{formik.errors.password}</p>
                        )}
                    </div>

                    {/* Agree checkbox */}
                    <div className="flex items-center">
                        <input
                            type="checkbox"
                            name="agree"
                            id="agree"
                            checked={formik.values.agree}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            className="mr-2 accent-red-600"
                        />
                        <label htmlFor="agree" className="text-black">I agree to the terms and conditions</label>
                    </div>
                    {formik.touched.agree && formik.errors.agree && (
                        <p className="text-red-500 text-sm">{formik.errors.agree}</p>
                    )}

                    <button
                        type="submit"
                        className="bg-red-600 text-white py-2 rounded hover:bg-red-700 transition"
                        disabled={formik.isSubmitting}
                    >
                        {formik.isSubmitting ? 'Registering...' : 'Register'}
                    </button>
                    <div className="text-center text-black text-sm">
                        Already have an account?{' '}
                        <Link to="/signin" className="text-red-600">Sign In</Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignUpComp;
