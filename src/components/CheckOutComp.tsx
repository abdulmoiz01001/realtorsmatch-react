import React, { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import type { RootState } from '../store/store';
import { setCustomerDetails } from '../store/features/customerSlice';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const CheckoutComp: React.FC = () => {
    const selectedPackage = useSelector((state: RootState) => state?.package.selectedPackage);
    const customerDetails = useSelector((state: RootState) => state?.customer.details);
    const paypalRef = useRef<HTMLDivElement | null>(null);
    const dispatch = useDispatch();

    useEffect(() => {
        if (!selectedPackage) return;

        let isRendered = false;

        const loadPayPal = async () => {
            if (!(window as any).paypal) {
                const script = document.createElement('script');
                script.src = `https://www.paypal.com/sdk/js?client-id=${import.meta.env.VITE_PAYPAL_CLIENT_ID}&currency=USD`;
                script.onload = () => {
                    if (!isRendered) {
                        renderPayPalButtons();
                        isRendered = true;
                    }
                };
                document.body.appendChild(script);
            } else {
                if (!isRendered) {
                    renderPayPalButtons();
                    isRendered = true;
                }
            }
        };

        const renderPayPalButtons = () => {
            if (paypalRef.current) {
                paypalRef.current.innerHTML = '';
            }

            (window as any).paypal
                .Buttons({
                    createOrder: async () => {


                        const res = await fetch(`${import.meta.env.VITE_REACT_APP_API_BASE_URL}/api/paypal/create_order`, {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify({
                                amount: selectedPackage.price.toFixed(2),
                                title: selectedPackage.title,
                                features: selectedPackage.features,
                            }),
                        });
                        const data = await res.json();
                        return data.id;
                    },
                    onApprove: async (data: any) => {
                        const captureRes = await fetch(`${import.meta.env.VITE_REACT_APP_API_BASE_URL}/api/paypal/complete_order`, {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify({ order_id: data.orderID }),
                        });
                        const captureResult = await captureRes.json();

                        if (captureResult.status === 'COMPLETED') {
                            const saveRes = await fetch(`${import.meta.env.VITE_REACT_APP_API_BASE_URL}/api/paypal/complete`, {
                                method: 'POST',
                                headers: { 'Content-Type': 'application/json' },
                                body: JSON.stringify({
                                    orderID: data.orderID,
                                    userEmail: customerDetails?.email,
                                    firstName: customerDetails?.firstName,
                                    lastName: customerDetails?.lastName,
                                    phone: customerDetails?.phone,
                                    address: customerDetails?.address,
                                    city: customerDetails?.city,
                                    state: customerDetails?.state,
                                    packageTitle: selectedPackage.title,
                                    packagePrice: selectedPackage.price,
                                }),
                            });
                            const saveResult = await saveRes.json();

                            if (saveRes.ok) {
                                alert('✅ Payment Success!');
                            } else {
                                alert('❌ Payment failed: ' + (saveResult.error || 'Unknown error'));
                            }
                        } else {
                            alert('❌ Payment Failed.');
                        }
                    },
                    onError: (err: any) => {
                        console.error(err);
                        alert('❌ PayPal checkout error.');
                    },
                })
                .render(paypalRef.current!);
        };

        loadPayPal();
    }, [selectedPackage, customerDetails, dispatch]);

    if (!selectedPackage) {
        return (
            <div className="min-h-screen flex items-center justify-center text-gray-600 text-xl">
                No plan selected.
            </div>
        );
    }

    return (
        <section className="w-full mt-30 min-h-screen bg-gray-100 py-12 px-4">
            <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-md p-6 md:p-10 border border-gray-200">
                <h1 className="text-3xl font-bold mb-8 text-center text-[#ff4655]">Checkout</h1>

                <div className="overflow-x-auto mb-8">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-[#ff4655]/90 text-white uppercase text-sm">
                                <th className="p-4">Product</th>
                                <th className="p-4">Price</th>
                                <th className="p-4">Quantity</th>
                                <th className="p-4">Subtotal</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-b hover:bg-gray-50">
                                <td className="p-4 text-gray-800">{selectedPackage.title}</td>
                                <td className="p-4 text-gray-800">${selectedPackage.price} USD</td>
                                <td className="p-4 text-gray-800">1</td>
                                <td className="p-4 font-semibold text-gray-900">${selectedPackage.price.toFixed(2)} USD</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                {/* Customer Details Form */}
                <div className="mb-8">
                    <h2 className="text-xl font-semibold mb-4 text-gray-800">Customer Details </h2>
                    <Formik
                        initialValues={{
                            firstName: '',
                            lastName: '',
                            email: '',
                            phone: '',
                            address: '',
                            city: '',
                            state: '',
                        }}
                        validationSchema={Yup.object({
                            firstName: Yup.string().required('First name is required.'),
                            lastName: Yup.string().required('Last name is required.'),
                            email: Yup.string().email('Invalid email').required('Email is required.'),
                            phone: Yup.string().required('Phone number is required.'),
                            address: Yup.string().required('Address is required.'),
                            city: Yup.string().required('City is required.'),
                            state: Yup.string().required('state is required.'),
                        })}
                        onSubmit={(values) => {
                            dispatch(setCustomerDetails(values as any));
                        }}
                    >
                        <Form className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="flex flex-col">
                                <label className="mb-1 text-gray-700">First Name</label>
                                <Field
                                    name="firstName"
                                    type="text"
                                    placeholder="First Name"
                                    className="w-full border border-gray-300 rounded px-3 py-2 text-black bg-white placeholder-black focus:outline-none focus:border-[#ff4655]"
                                />
                                <ErrorMessage name="firstName" component="div" className="text-red-500 text-sm mt-1" />
                            </div>

                            <div className="flex flex-col">
                                <label className="mb-1 text-gray-700">Last Name</label>
                                <Field
                                    name="lastName"
                                    type="text"
                                    placeholder="Last Name"
                                    className="w-full border border-gray-300 rounded px-3 py-2 text-black bg-white placeholder-black focus:outline-none focus:border-[#ff4655]"
                                />
                                <ErrorMessage name="lastName" component="div" className="text-red-500 text-sm mt-1" />
                            </div>

                            <div className="md:col-span-2 flex flex-col">
                                <label className="mb-1 text-gray-700">Email Address</label>
                                <Field
                                    name="email"
                                    type="email"
                                    placeholder="Email Address"
                                    className="w-full border border-gray-300 rounded px-3 py-2 text-black bg-white placeholder-black focus:outline-none focus:border-[#ff4655]"
                                />
                                <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1" />
                            </div>

                            <div className="md:col-span-2 flex flex-col">
                                <label className="mb-1 text-gray-700">Phone Number</label>
                                <Field
                                    name="phone"
                                    type="text"
                                    placeholder="Phone Number"
                                    className="w-full border border-gray-300 rounded px-3 py-2 text-black bg-white placeholder-black focus:outline-none focus:border-[#ff4655]"
                                />
                                <ErrorMessage name="phone" component="div" className="text-red-500 text-sm mt-1" />
                            </div>

                            <div className="flex flex-col">
                                <label className="mb-1 text-gray-700">City</label>
                                <Field
                                    name="city"
                                    type="text"
                                    placeholder="City"
                                    className="w-full border border-gray-300 rounded px-3 py-2 text-black bg-white placeholder-black focus:outline-none focus:border-[#ff4655]"
                                />
                                <ErrorMessage name="city" component="div" className="text-red-500 text-sm mt-1" />
                            </div>

                            <div className="flex flex-col">
                                <label className="mb-1 text-gray-700">State</label>
                                <Field
                                    name="state"
                                    type="text"
                                    placeholder="state"
                                    className="w-full border border-gray-300 rounded px-3 py-2 text-black bg-white placeholder-black focus:outline-none focus:border-[#ff4655]"
                                />
                                <ErrorMessage name="state" component="div" className="text-red-500 text-sm mt-1" />
                            </div>

                            <div className="md:col-span-2 flex flex-col">
                                <label className="mb-1 text-gray-700">Address</label>
                                <Field
                                    name="address"
                                    type="text"
                                    placeholder="Full Address"
                                    className="w-full border border-gray-300 rounded px-3 py-2 text-black bg-white placeholder-black focus:outline-none focus:border-[#ff4655]"
                                />
                                <ErrorMessage name="address" component="div" className="text-red-500 text-sm mt-1" />
                            </div>

                            <div className="md:col-span-2 flex justify-end">
                                <button
                                    type="submit"
                                    className="mt-2 px-6 py-2 bg-[#ff4655] hover:bg-[#e63b48] text-white rounded transition-all"
                                >
                                    Save Details
                                </button>
                            </div>
                        </Form>
                    </Formik>
                </div>

                <div className="flex flex-col sm:flex-row justify-end items-end gap-6">
                    <div className="w-full sm:w-80 border rounded-lg p-4 bg-gray-50 shadow">
                        <h2 className="text-xl font-semibold mb-4 text-gray-800">Basket Total</h2>
                        <div className="flex justify-between mb-2 text-gray-600">
                            <span>Subtotal</span>
                            <span>${selectedPackage.price.toFixed(2)} USD</span>
                        </div>
                        <div className="flex justify-between font-bold text-lg text-[#ff4655]">
                            <span>Total</span>
                            <span>${selectedPackage.price.toFixed(2)} USD</span>
                        </div>
                    </div>
                </div>

                <div className="mt-8">
                    <h2 className="text-xl font-semibold mb-4 text-gray-800">Pay securely with PayPal</h2>
                    <div ref={paypalRef} />
                </div>
            </div>
        </section>
    );
};

export default CheckoutComp;
