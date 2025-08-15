


import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

import { motion } from 'framer-motion';
import FancyButton from './common/FancyButton';

const HeroSectionComp = () => {
  const slides = [
    '/hero-bg-1.jpg',
    '/hero-bg-2.jpg',
    '/hero-bg-3.jpg',
    '/hero-bg-4.jpg',
  ];

  return (
    <div className="relative h-screen w-full">
      {/* Swiper Carousel */}
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop
        spaceBetween={0}
        slidesPerView={1}
        speed={1000} // smooth slide transition
        className="h-full w-full z-0"
      >
        {slides.map((src, idx) => (
          <SwiperSlide key={idx}>
            <img
              src={src}
              alt={`Slide ${idx}`}
              width={1920}
              height={1080}
              className="h-full w-full  object-cover transition-all duration-1000"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Overlay Content */}
      <div className="absolute inset-0 flex items-center justify-center z-10 px-4 text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className="text-center bg-black/50 p-4 rounded-2xl backdrop-blur-sm flex flex-col justify-center items-center gap-4"
        >
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="text-4xl md:text-6xl font-bold mb-4"
          >
            Welcome to Realtors Match
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-lg md:text-xl max-w-xl mx-auto"
          >
            Helping Realtors build trust through projects, stories, and success.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="mt-8 flex w-full flex-col md:flex-row gap-4 justify-center"
          >
            <FancyButton label="Get In Touch" href="/contact-us" />
            <FancyButton label="See Our Plans" href="/pricing" />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSectionComp;
