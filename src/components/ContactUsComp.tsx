import { LocationEditIcon, MailIcon, PhoneCall } from 'lucide-react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import axios from 'axios'

const ContactUsComp = () => {
    const initialValues = {
        firstName: '',
        lastName: '',
        email: '',
        subject: '',
        message: '',
    }

    const validationSchema = Yup.object({
        firstName: Yup.string().required('First Name is required'),
        lastName: Yup.string().required('Last Name is required'),
        email: Yup.string().email('Invalid email').required('Email is required'),
        subject: Yup.string().required('Subject is required'),
        message: Yup.string().required('Message is required'),
    })

    const handleSubmit = async (values: { values: any }, { resetForm, setSubmitting }: { resetForm: any, setSubmitting: any }) => {
        try {
            await axios.post(`${import.meta.env.VITE_REACT_APP_API_BASE_URL}/api/mail/contact`, values)
            alert('Your message has been sent successfully!')
            resetForm()
        } catch (error) {
            console.error('Failed to send message:', error)
            alert('Something went wrong, please try again later.')
        } finally {
            setSubmitting(false)
        }
    }

    return (
        <>
            <div className="w-full min-h-screen text-black pt-40 flex flex-col items-center bg-gray-50">

                {/* Top Section */}
                <div className="w-[90%] max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-16">
                    {/* Text Content */}
                    <div className="bg-white p-10 rounded-xl shadow-md space-y-6 animate-fade-in">
                        <p className="lg:text-3xl text-2xl font-semibold">Contact Us</p>
                        <h1 className="lg:text-5xl text-3xl font-bold text-[#ff4655] leading-tight">We are here to help you</h1>
                        <p className="lg:text-lg text-sm text-gray-700">
                            If you have any questions or need assistance, feel free to reach out. Our team is always ready to support you.
                        </p>
                    </div>

                    {/* img */}
                    <div className="overflow-hidden rounded-xl shadow-md animate-fade-in">
                        <img src="/contact-us.jpg"
                            width={800}
                            height={600}
                            alt="Contact Us" className="w-full h-full object-cover scale-100 hover:scale-105 transition-transform duration-500 ease-in-out" />
                    </div>
                </div>

                {/* Contact Cards */}
                <div className="w-full bg-black py-12 flex  flex-wrap justify-center gap-10">
                    {/* Card Component */}
                    {[
                        {
                            icon: <MailIcon className="w-12 h-12 text-[#ff4655]" />,
                            label: "Email us at",
                            content: "info@RealtorsMatch.com",
                            href: "mailto:info@RealtorsMatch.com"
                        },
                        {
                            icon: <PhoneCall className="w-12 h-12 text-[#ff4655]" />,
                            label: "Call us at",
                            content: "+1 830-468-9292",
                            href: "tel:+18304689292"
                        },
                        {
                            icon: <LocationEditIcon className="w-12 h-12 text-[#ff4655]" />,
                            label: "Visit us at",
                            href: "https://www.google.com/maps/place/1201+N+Orange+St,+Suite+321,+Wilmington,+DE",
                            content: "1201 N Orange St, Suite 321, Wilmington, DE"
                        }
                    ].map((item, index) => (
                                <div
                                    key={index}
                                    className="w-[290px] bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-lg text-center hover:scale-105 hover:shadow-xl transition-all duration-300 ease-in-out flex flex-col items-center gap-4"
                                >
                                    {item.icon}
                                    <p className="text-lg">
                                        {item.label} <br />
                                        <a href={item.href} target="_blank" rel="noopener noreferrer" className="text-[#ff4655] font-medium underline">
                                            {item.content}
                                        </a>
                                    </p>
                                </div>
                            ))}
                </div>
                {/* Contact Form */}
                <div className="lg:w-[90%] lg:max-w-5xl my-16 bg-white p-10 rounded-xl shadow-xl">
                    <h2 className="text-3xl font-bold text-center text-[#ff4655] mb-8">Send Us a Message</h2>
                    <Formik initialValues={initialValues as any} validationSchema={validationSchema} onSubmit={handleSubmit}>
                        {({ isSubmitting }) => (
                            <Form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="flex flex-col">
                                    <label className="text-sm font-medium mb-1">First Name</label>
                                    <Field name="firstName" placeholder="John" className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff4655]" />
                                    <ErrorMessage name="firstName" component="div" className="text-red-500 text-xs mt-1" />
                                </div>
                                <div className="flex flex-col">
                                    <label className="text-sm font-medium mb-1">Last Name</label>
                                    <Field name="lastName" placeholder="Doe" className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff4655]" />
                                    <ErrorMessage name="lastName" component="div" className="text-red-500 text-xs mt-1" />
                                </div>
                                <div className="flex flex-col md:col-span-2">
                                    <label className="text-sm font-medium mb-1">Email</label>
                                    <Field name="email" type="email" placeholder="you@example.com" className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff4655]" />
                                    <ErrorMessage name="email" component="div" className="text-red-500 text-xs mt-1" />
                                </div>
                                <div className="flex flex-col md:col-span-2">
                                    <label className="text-sm font-medium mb-1">Subject</label>
                                    <Field name="subject" placeholder="Subject of your message" className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff4655]" />
                                    <ErrorMessage name="subject" component="div" className="text-red-500 text-xs mt-1" />
                                </div>
                                <div className="flex flex-col md:col-span-2">
                                    <label className="text-sm font-medium mb-1">Message</label>
                                    <Field as="textarea" name="message" rows={5} placeholder="Your message..." className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff4655]" />
                                    <ErrorMessage name="message" component="div" className="text-red-500 text-xs mt-1" />
                                </div>
                                <div className="md:col-span-2 text-center">
                                    <button type="submit" disabled={isSubmitting} className="bg-[#ff4655] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#e03e4c] transition-all duration-300">
                                        {isSubmitting ? 'Sending...' : 'Send Message'}
                                    </button>
                                </div>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
        </>
    )
}

export default ContactUsComp
