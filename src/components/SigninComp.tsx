import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { Link } from 'react-router-dom'; // adjust if using Next.js
import { useNavigate } from 'react-router-dom'; // adjust if using Next.js
import { useRedirectIfAuth } from '../hooks/useRedirectIfAuth';

interface FormValues {
    email: string;
    password: string;
    remember: boolean;
}

const SignInComp: React.FC = () => {
    const isLoggedin = useRedirectIfAuth()
    if (isLoggedin) {
        return <div className='min-h-screen' >

        </div>; // or redirect to home page
    }
    const navigate = useNavigate(); // adjust if using Next.js
    const formik = useFormik<FormValues>({
        initialValues: {
            email: '',
            password: '',
            remember: false,
        },
        validationSchema: Yup.object({
            email: Yup.string().email('Invalid email').required('Email is required'),
            password: Yup.string().required('Password is required'),
        }),
        onSubmit: async (values, { setSubmitting, resetForm }) => {
            try {
                const API_BASE_URL = import.meta.env.VITE_REACT_APP_API_BASE_URL;
                const response = await axios.post(`${API_BASE_URL}/api/auth/signin`, values);
                console.log('Sign in success:', response.data);
                const data = response.data;
                // Store token in localStorage or cookies
                localStorage.setItem('token', data.token); // or use cookies
                // Optionally, store user info
                localStorage.setItem('user', JSON.stringify(data.user)); // or use cookies
                // Show success message
                console.log('User signed in:', data.user);
                
                alert('Login successful!');
                resetForm();
                navigate('/pricing'); // Redirect to home page after successful login
                // redirect if needed
            } catch (error) {
                console.error('Sign in error:', error);
                alert('Login failed. Please check your credentials.');
            } finally {
                setSubmitting(false);
            }
        },
    });

    return (
        <div className="flex flex-col py-20 min-h-screen lg:flex-row w-full max-w-7xl mx-auto mt-10 shadow-lg rounded overflow-hidden">
            {/* Left side: Image */}
            <div className="lg:w-1/2">
                <img
                    src="/login.png" // replace with your image
                    alt="Sign in"
                    className="object-cover h-full w-full"
                />
            </div>

            {/* Right side: Form */}
            <div className="lg:w-1/2 flex flex-col justify-center items-center w-full bg-white p-8">
                <h2 className="text-2xl font-semibold text-center text-black mb-6">Welcome back!</h2>
                <form onSubmit={formik.handleSubmit} className="flex w-full flex-col gap-8">

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

                    {/* Remember me & Forgot password */}
                    <div className="flex justify-between items-center">
                        <div className="flex items-center">
                            <input
                                type="checkbox"
                                name="remember"
                                id="remember"
                                checked={formik.values.remember}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                className="mr-2 accent-red-600"
                            />
                            <label htmlFor="remember" className="text-black">Remember me</label>
                        </div>
                        <Link to="/forgot-password" className="text-red-600 text-sm">Forgot Password?</Link>
                    </div>

                    <button
                        type="submit"
                        className="bg-red-600 text-white py-2 rounded hover:bg-red-700 transition"
                        disabled={formik.isSubmitting}
                    >
                        {formik.isSubmitting ? 'Signing in...' : 'Login'}
                    </button>

                    <div className="text-center text-black text-sm">
                        Don’t have an account?{' '}
                        <Link to="/signup" className="text-red-600">Sign Up</Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignInComp;
