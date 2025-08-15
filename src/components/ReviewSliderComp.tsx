// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { MdOutlineStar } from "react-icons/md";
import { IoCloseOutline } from "react-icons/io5";
import axios from 'axios';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Import Swiper styles
import 'swiper/css';

const ReviewSliderComp = () => {
    const [showAddBoolean, setShowAddBoolean] = useState(false);
    const [reviews, setReviews] = useState([]);

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [companyName, setCompanyName] = useState("");
    const [jobTitle, setJobTitle] = useState("");
    const [reviewDescription, setReviewDescription] = useState("");
    const [rating, setRating] = useState(1);
    const [loading, setLoading] = useState(false);

    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = date.getFullYear();
        return `${day}-${month}-${year}`;
    };

    useEffect(() => {
        fetchReviews();
    }, []);

    const fetchReviews = async () => {
        try {
            const response = await axios.get(`${import.meta.env.VITE_REACT_APP_API_BASE_URL}/api/reviews`);
            setReviews(response.data);
        } catch (error) {
            console.error("Error fetching reviews:", error);
        }
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);

        const newReview = {
            firstName,
            lastName,
            companyName,
            jobTitle,
            reviewDescription,
            rating,
            date: new Date().toISOString(),
        };

        try {
            await axios.post(`${import.meta.env.VITE_REACT_APP_API_BASE_URL}/api/reviews/create`, newReview);
            setShowAddBoolean(false);
            setFirstName("");
            setLastName("");
            setCompanyName("");
            setJobTitle("");
            setReviewDescription("");
            setRating(1);
            fetchReviews();
        } catch (error) {
            console.error("Error submitting review:", error);
        } finally {
            setLoading(false);
        }
    };

    const renderStars = (starRating: number) => {
        return Array.from({ length: 5 }).map((_, i) => (
            <MdOutlineStar
                key={i}
                className={`text-xl ${i < starRating ? 'text-yellow-400' : 'text-gray-300'}`}
            />
        ));
    };

    return (
        <>
            <div className="w-full h-screen flex flex-col justify-evenly items-center" >

                {/* Add new review button */}
                <div className='w-full h-10 flex items-center justify-end p-10'>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setShowAddBoolean(true)}
                        className='text-lg cursor-pointer px-4 py-2 bg-[#0f1923] text-white rounded transition-all duration-200'
                    >
                        Add Review
                    </motion.button>
                </div>

                {/* Animated Add Review Modal */}
                <AnimatePresence>
                    {showAddBoolean && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className='fixed top-0 left-0 w-full z-50 h-screen bg-neutral-800/50 flex items-center justify-center px-3 md:px-0'
                        >
                            <motion.form
                                onSubmit={handleSubmit}
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.8, opacity: 0 }}
                                transition={{ type: 'spring', stiffness: 200, damping: 20 }}
                                className='relative w-full md:w-[450px] md:h-[540px] bg-white rounded-xl p-7 flex items-center flex-col'
                            >
                                <button
                                    onClick={() => setShowAddBoolean(false)}
                                    type='button'
                                    className='absolute top-4 right-4 text-black text-3xl cursor-pointer'
                                >
                                    <IoCloseOutline />
                                </button>
                                <h1 className='text-lg md:text-xl font-semibold text-black'>Add New Review</h1>

                                <input value={firstName} onChange={(e) => setFirstName(e.target.value)} type="text" placeholder='First Name' className='text-black w-full h-10 px-2 border border-neutral-600 rounded outline-none mt-5 md:mt-6' />
                                <input value={lastName} onChange={(e) => setLastName(e.target.value)} type="text" placeholder='Last Name' className='text-black w-full h-10 px-2 border border-neutral-600 rounded outline-none my-3 md:my-4' />
                                <input value={companyName} onChange={(e) => setCompanyName(e.target.value)} type="text" placeholder='Company Name' className='text-black w-full h-10 px-2 border border-neutral-600 rounded outline-none my-3 md:my-4' />
                                <input value={jobTitle} onChange={(e) => setJobTitle(e.target.value)} type="text" placeholder='Job Title' className='text-black w-full h-10 px-2 border border-neutral-600 rounded outline-none' />
                                <textarea value={reviewDescription} onChange={(e) => setReviewDescription(e.target.value)} placeholder='Write a review' rows={4} className='text-black w-full border border-neutral-600 outline-none p-3 mt-3 md:mt-4 rounded'></textarea>

                                <h2 className='text-black my-3'>Rating: {rating}/5</h2>
                                <div className='w-full flex items-center gap-4 justify-center mt-2'>
                                    {[1, 2, 3, 4, 5].map(num => (
                                        <p key={num} onClick={() => setRating(num)} className='w-7 h-7 bg-amber-400 rounded-full text-black flex items-center justify-center cursor-pointer hover:bg-amber-500'>{num}</p>
                                    ))}
                                </div>

                                <motion.button
                                    type='submit'
                                    disabled={loading}
                                    whileHover={{ scale: 1.03 }}
                                    whileTap={{ scale: 0.97 }}
                                    className='text-lg mt-5 px-7 py-2 bg-[#0f1923] hover:bg-[#1c2732] text-white rounded flex items-center justify-center gap-2'
                                >
                                    {loading ? (
                                        <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
                                        </svg>
                                    ) : "Add"}
                                </motion.button>
                            </motion.form>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Heading and description */}
                <div className="text-center w-[90%] mx-auto mt-10">
                    <h2 className="text-3xl md:text-4xl font-bold text-black">What Our Clients Say</h2>
                    <p className="mt-4 text-neutral-700 text-base md:text-lg max-w-2xl mx-auto">
                        We’re proud to share feedback from clients who have trusted us with their journey.
                        Their experiences inspire us to continue delivering excellence every day.
                    </p>
                </div>

                {/* Swiper slider with reviews */}
                <div className="w-[90%] mx-auto">
                    <Swiper
                        modules={[Autoplay]}
                        autoplay={{ delay: 3000, disableOnInteraction: false }}
                        slidesPerView={1}
                        breakpoints={{
                            640: { slidesPerView: 1 },
                            768: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 },
                            1640: { slidesPerView: 4}
                        }}
                    >
                        {reviews.map((value: any, index: number) => (
                            <SwiperSlide key={index}>
                                <motion.div 
                                    whileHover={{ scale: 1.02, y: -5 }}
                                    transition={{ type: "spring", stiffness: 200, damping: 20 }}
                                    className='relative w-[350px] h-[320px] bg-gradient-to-br from-white to-gray-50 shadow-lg hover:shadow-xl rounded-2xl my-10 p-6 mx-auto border border-gray-100 overflow-hidden'
                                >
                                    {/* Background Pattern */}
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-red-100/80 to-red-100/30 rounded-full -translate-y-16 translate-x-16"></div>
                                    
                                    {/* Header Section */}
                                    <div className="relative z-10">
                                        <div className="flex items-center gap-2 mb-2">
                                            <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                                            <span className="text-xs font-medium text-red-600 uppercase tracking-wider">Client Review</span>
                                        </div>
                                        <h1 className='text-gray-900 text-xl font-bold capitalize leading-tight'>
                                            {value.firstName} {value.lastName}
                                        </h1>
                                        <div className="mt-2 space-y-1">
                                            <div className="flex items-center gap-2">
                                                <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">Company:</span>
                                                <p className='text-gray-700 text-sm font-semibold capitalize'>{value.companyName}</p>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">Position:</span>
                                                <p className='text-gray-600 text-sm capitalize'>{value.jobTitle}</p>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    {/* Review Content */}
                                    <div className='mt-4 relative z-10'>
                                        <div className="flex items-center gap-2 mb-2">
                                            <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">Review:</span>
                                        </div>
                                        <div className="relative">
                                            <div className="absolute -left-1 -top-1 text-4xl text-blue-200 font-serif">"</div>
                                            <p className='text-gray-700 text-sm font-medium leading-relaxed pl-4 italic'>
                                                {value.reviewDescription}
                                            </p>
                                            <div className="absolute -right-1 -bottom-2 text-4xl text-blue-200 font-serif">"</div>
                                        </div>
                                    </div>
                                    
                                    {/* Footer Section */}
                                    <div className='absolute bottom-4 left-6 right-6 flex items-center justify-between'>
                                        <div className='flex flex-col gap-1'>
                                            <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">Rating:</span>
                                            <div className='flex items-center gap-1'>
                                                {renderStars(value.rating)}
                                                {/* <span className="text-sm font-bold text-gray-700 ml-1"> */}
                                                    {/* {value.rating}/5 */}
                                                {/* </span> */}
                                            </div>
                                        </div>
                                        <div className='text-right'>
                                            <span className="text-xs font-medium text-gray-500 uppercase tracking-wide block">Date:</span>
                                            <p className="text-xs text-gray-600 font-medium">
                                                {formatDate(value.date)}
                                            </p>
                                        </div>
                                    </div>
                                    
                                    {/* Decorative Elements */}
                                    <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-red-500 via-red-500 to-red-500"></div>
                                </motion.div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </>
    );
};

export default ReviewSliderComp;
