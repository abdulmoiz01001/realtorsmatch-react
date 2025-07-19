import { useEffect, useState, type FormEvent } from 'react';
import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { FaStar } from 'react-icons/fa';
import { Dialog } from '@headlessui/react';
import 'swiper/css';

type Review = {
  _id?: string;
  name: string;
  rating: number;
  comment: string;
  createdAt?: string;
  imageUrl?: string; // optional profile image
};

const ReviewsComp = () => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [form, setForm] = useState<Review>({
    name: '',
    rating: 5,
    comment: '',
  });

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_REACT_APP_API_BASE_URL}/api/reviews`)
      .then((res) => setReviews(res.data))
      .catch((err) => console.error('Fetch error:', err));
  }, []);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await axios.post(
        `${import.meta.env.VITE_REACT_APP_API_BASE_URL}/api/reviews/create`,
        form
      );
      setForm({ name: '', rating: 5, comment: '' });
      setIsOpen(false);
      const { data } = await axios.get(
        `${import.meta.env.VITE_REACT_APP_API_BASE_URL}/api/reviews`
      );
      setReviews(data);
    } catch (error) {
      console.error('Submit error:', error);
    }
  };

  return (
    <div className="relative bg-gray-100 py-10 min-h-screen px-4 sm:px-8">
      <button
        onClick={() => setIsOpen(true)}
        className="absolute top-4 right-4 bg-red-600 text-white px-4 py-2 rounded-lg shadow"
      >
        Add Review
      </button>

      <h2 className="text-3xl font-bold text-center mb-8 text-red-700">
        What People Are Saying
      </h2>

      {reviews.length === 0 ? (
        <div className="h-[100vh] flex flex-col items-center justify-center bg-[#0c0c0c] text-white px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#ff4655]">
            No Reviews Yet
          </h2>
          <p className="mt-4 text-white/80 text-lg max-w-md">
            Be the first to share your experience with us. Click the button
            above to leave a review!
          </p>
        </div>
      ) : (
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="!px-4"
        >
          {reviews.map((rev, idx) => (
            <SwiperSlide key={rev._id || idx}>
              <div className="bg-white rounded-xl shadow-md p-6 text-center flex flex-col items-center h-full justify-between max-w-sm mx-auto">
                {/* Avatar */}
                {rev.imageUrl ? (
                  <img
                    src={rev.imageUrl}
                    alt={rev.name}
                    className="w-16 h-16 rounded-full mb-3 object-cover"
                  />
                ) : (
                  <div className="w-16 h-16 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-xl font-bold mb-3">
                    {rev.name.charAt(0).toUpperCase()}
                  </div>
                )}

                {/* Name & Time */}
                <div className="mb-2">
                  <h3 className="font-semibold text-black text-sm">{rev.name}</h3>
                  <p className="text-xs text-gray-400">
                    {rev.createdAt
                      ? new Date(rev.createdAt).toLocaleDateString()
                      : 'A moment ago'}
                  </p>
                </div>

                {/* Stars */}
                <div className="flex items-center justify-center space-x-1 text-yellow-500 mb-2">
                  {[...Array(rev.rating)].map((_, i) => (
                    <FaStar key={i} size={14} />
                  ))}
                </div>

                {/* Comment */}
                <p className="text-gray-600 text-sm leading-relaxed line-clamp-3 mb-2">
                  {rev.comment}
                </p>

                {/* See more */}
                <button className="text-blue-600 text-sm font-medium hover:underline mb-3">
                  See more
                </button>

                {/* Google icon */}
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                  alt="Google"
                  className="w-5 h-5"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}

      {/* Modal */}
      <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity"
          aria-hidden="true"
        />
        <div className="fixed inset-0 flex items-center justify-center px-4">
          <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
            <Dialog.Title
              as="h3"
              className="text-lg font-bold leading-6 text-red-700 border-b pb-2 mb-4"
            >
              Leave a Review
            </Dialog.Title>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Your Name</label>
                <input
                  type="text"
                  placeholder="e.g. John Doe"
                  className="mt-1 block w-full px-4 py-2 border text-black placeholder:text-black border-gray-300 rounded-lg shadow-sm focus:ring-red-500 focus:border-red-500"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Rating</label>
                <select
                  className="mt-1 block w-full px-4 py-2 border text-black placeholder:text-black border-gray-300 rounded-lg shadow-sm focus:ring-red-500 focus:border-red-500"
                  value={form.rating}
                  onChange={(e) => setForm({ ...form, rating: parseInt(e.target.value) })}
                >
                  {[1, 2, 3, 4, 5].map((r) => (
                    <option key={r} value={r}>
                      {r} Star{r > 1 && 's'}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Your Review</label>
                <textarea
                  rows={4}
                  placeholder="Write your experience..."
                  className="mt-1 block w-full px-4 py-2 border text-black placeholder:text-black border-gray-300 rounded-lg shadow-sm focus:ring-red-500 focus:border-red-500"
                  value={form.comment}
                  onChange={(e) => setForm({ ...form, comment: e.target.value })}
                  required
                />
              </div>

              <div className="flex justify-end space-x-3 pt-4 border-t">
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-2 text-sm rounded-lg border border-gray-300 text-gray-600 hover:bg-gray-100"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-red-600 text-white text-sm rounded-lg hover:bg-red-700 transition"
                >
                  Submit Review
                </button>
              </div>
            </form>
          </Dialog.Panel>
        </div>
      </Dialog>
    </div>
  );
};

export default ReviewsComp;
