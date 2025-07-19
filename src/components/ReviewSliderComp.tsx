// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { MdOutlineStar } from "react-icons/md";
import { IoCloseOutline } from "react-icons/io5";

// Import Swiper styles
import 'swiper/css';
import { useState } from 'react';

const ReviewSliderComp = () => {

    const [showAddBoolean,setShowAddBoolean] = useState(false);
    const showAddReview = showAddBoolean ? "fixed" : "hidden";

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [jobTitle, setJobTitle] = useState("");
    const [reviewDescription, setReviewDescription] = useState("");
    const [ rating, setRating ] = useState(1);

    const data = [
        {
            firstName: "kaif",
            lastName: "soomro",
            jobTitle: "full stack developer",
            reviewDescription: "great experince i loved to work with realtors the team is so kind.",
            rating: 4,
            date: "01/01/2023"
        },
        {
            firstName: "sajjad",
            lastName: "hussain",
            jobTitle: "AI engineer",
            reviewDescription: "great experince i loved to work with realtors the team is so kind.",
            rating: 3,
            date: "01/01/2023"
        },
        {
            firstName: "ameer",
            lastName: "ali",
            jobTitle: "civil engineer",
            reviewDescription: "great experince i loved to work with realtors the team is so kind.",
            rating: 5,
            date: "01/01/2023"
        },
        {
            firstName: "muhammad",
            lastName: "sammer",
            jobTitle: "doctor",
            reviewDescription: "great experince i loved to work with realtors the team is so kind.",
            rating: 3,
            date: "01/01/2023"
        },
        {
            firstName: "haider",
            lastName: "bux",
            jobTitle: "artist",
            reviewDescription: "great experince i loved to work with realtors the team is so kind.",
            rating: 4,
            date: "01/01/2023"
        }          
    ];

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = {
            firstName: firstName,
            lastName: lastName,
            jobTitle: jobTitle,
            reviewDescription: reviewDescription,
            rating: rating,
            date: Date.now()
        }

        console.log(formData);
        setShowAddBoolean(false);

    }

    const renderStars = (starRating: number) => {
        const stars = [];
        for (let i = 0; i < 5; i++) {
            stars.push(
                <MdOutlineStar
                    key={i}
                    className={`text-xl ${i < starRating ? 'text-yellow-400' : 'text-gray-300'}`}
                />
            );
        }
        return stars;
    };

  return (
     <>
     {/* Add new review button */}
     <div className='w-full h-10 flex items-center justify-end p-10'>
        <button onClick={()=>setShowAddBoolean(true)} className='text-lg cursor-pointer px-4 py-2 bg-[#0f1923] text-white rounded'>Add Review</button>
     </div>

     <div className={`${showAddReview} top-0 left-0 w-full z-50 h-screen bg-neutral-800/50 flex items-center justify-center px-3 md:px-0`}>
        <form onSubmit={handleSubmit} className='relative w-full md:w-[450px] md:h-[540px] bg-white rounded-xl p-7 flex items-center flex-col'>
            
            <button onClick={()=>setShowAddBoolean(false)} className='absolute top-4 right-4 text-black text-3xl cursor-pointer'><IoCloseOutline /></button>
            
            <h1 className='text-lg md:text-xl font-semibold text-black'>Add New Review</h1>

            <input onChange={(e)=>setFirstName(e.target.value)} type="text" placeholder='First Name' className='text-black w-full h-10 px-2 border border-neutral-600 rounded outline-none mt-5 md:mt-6'/>
            <input onChange={(e)=>setLastName(e.target.value)} type="text" placeholder='Last Name' className='text-black w-full h-10 px-2 border border-neutral-600 rounded outline-none my-3 md:my-4'/>
            <input onChange={(e)=>setJobTitle(e.target.value)} type="text" placeholder='Job Title' className='text-black w-full h-10 px-2 border border-neutral-600 rounded outline-none'/>
            <textarea onChange={(e)=>setReviewDescription(e.target.value)} placeholder='Write a review' rows={4} className='text-black w-full border border-neutral-600 outline-none p-3 mt-3 md:mt-4 rounded'></textarea>

            <h2 className='text-black my-3'>Rating: {rating}/5</h2>
            <div className='w-full flex items-center gap-4 justify-center mt-2'>
                <p onClick={()=>setRating(1)} className='w-7 h-7 bg-amber-400 rounded-full text-black flex items-center justify-center cursor-pointer hover:bg-amber-500'>1</p>
                <p onClick={()=>setRating(2)} className='w-7 h-7 bg-amber-400 rounded-full text-black flex items-center justify-center cursor-pointer hover:bg-amber-500'>2</p>
                <p onClick={()=>setRating(3)} className='w-7 h-7 bg-amber-400 rounded-full text-black flex items-center justify-center cursor-pointer hover:bg-amber-500'>3</p>
                <p onClick={()=>setRating(4)} className='w-7 h-7 bg-amber-400 rounded-full text-black flex items-center justify-center cursor-pointer hover:bg-amber-500'>4</p>
                <p onClick={()=>setRating(5)} className='w-7 h-7 bg-amber-400 rounded-full text-black flex items-center justify-center cursor-pointer hover:bg-amber-500'>5</p>
            </div>
            <button type='submit' className='text-lg mt-5 cursor-pointer px-7 py-2 bg-[#0f1923] hover:bg-[#1c2732] text-white rounded'>Add</button>
        </form>
     </div>

     <Swiper
          slidesPerView={1}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 0,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: -40,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: -200,
            },
          }}
    >

          { 
      
        data && data.map((value)=>(
            <SwiperSlide>
                <div className='relative w-[350px] h-[300px] bg-white shadow rounded-xl my-10 p-5 mx-auto'>
                    <div>
                        <h1 className='text-black text-2xl font-semibold capitalize'>{ value.firstName } { value.lastName }</h1>
                        <p className='text-black text-lg capitalize'>{ value.jobTitle }</p>
                    </div>
                    <div className='mt-3'>
                        <p className='text-neutral-800 text-sm font-semilight leading-6'>{ value.reviewDescription }</p>
                    </div>
                    <div className='absolute bottom-3 left-6 w-[85%] flex items-center justify-between gap-5 mt-8'>
                        <div className='flex items-center'>
                            { renderStars(value.rating) }
                        </div>
                        <div className='text-sm text-neutral-800 capitalize'>
                            <p>Reviewed on { value.date }</p>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
        ))

      }
      
      ...
    </Swiper>
     </>
  )
}

export default ReviewSliderComp;