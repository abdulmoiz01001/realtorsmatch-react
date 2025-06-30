// import React, { useEffect, useState } from 'react';
// // import { MdEdit } from 'react-icons/md';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// type Payment = {
//     title: string;
//     price: number;
//     features: string[];
//     createdAt: string;
//     paymentId: string;
//     time: string;
// };

// const payments: Payment[] = [
//     {
//         title: "Hot Seller Lead",
//         price: 299,
//         features: ["Wants to list ASAP", "Exclusive listing", "Ready to close within 7–10 days"],
//         createdAt: "2024-08-28",
//         paymentId: "PAY12345",
//         time: "9:32 AM"
//     },
//     {
//         title: "Pro Closer",
//         price: 999,
//         features: ["$1,200 credit value", "Save $201", "Great for scaling up"],
//         createdAt: "2024-08-25",
//         paymentId: "PAY67890",
//         time: "11:15 AM"
//     },
// ];

// const UserProfileComp: React.FC = () => {
//     const navigate = useNavigate();
//     const [payments, setPayments] = useState<Payment[]>([]);

//     useEffect(() => {
//         const user = JSON.parse(localStorage.getItem('user') || '{}');
//         const fetchPayments = async () => {
//             try {
//                 const res = await axios.get(`${import.meta.env.VITE_REACT_APP_API_BASE_URL}/api/paypal/payments?email=${user.email}`);
//                 setPayments(res.data);
//             } catch (err) {
//                 console.error('Failed to fetch payments:', err);
//             }
//         };
//         if (user?.email) fetchPayments();
//     }, []);


//     const handleLogout = async () => {
//         try {
//             const API_BASE_URL = import.meta.env.VITE_REACT_APP_API_BASE_URL;
//             await axios.post(`${API_BASE_URL}/api/auth/logout`);
//             localStorage.removeItem('token');
//             navigate('/'); // redirect to login
//         } catch (error) {
//             console.error('Logout failed:', error);
//         }
//     };

//     const fetchDatafromLocalStorage = () => {
//         const user = localStorage.getItem('user');
//         if (user) {
//             return JSON.parse(user);
//         }
//         return null;
//     };

//     const [profile] = useState(fetchDatafromLocalStorage());

//     return (
//         <div className="flex flex-col mt-30 lg:flex-row w-full bg-gray-100 min-h-screen">

//             {/* Sidebar */}
//             <div className="bg-red-800 mb-10 h-full w-full lg:w-80 p-4 flex flex-col justify-between relative shadow">
//                 <div className="flex flex-col items-center">
//                     <button className="absolute top-4 right-4 text-blue-500">
//                         {/* <MdEdit size={20} /> */}
//                     </button>
//                     <img
//                         src="https://randomuser.me/api/portraits/women/44.jpg"
//                         alt="User"
//                         className="w-24 h-24 rounded-full object-cover mb-4"
//                     />
//                     {profile ? (
//                         <>
//                             <h2 className="font-bold text-lg">{profile.username}</h2>
//                             <p className="text-sm text-white">{profile.email}</p>
//                             <p className="text-xs text-gray-200">ID: {profile.id}</p>
//                         </>
//                     ) : (
//                         <p className="text-sm text-white">No user data</p>
//                     )}
//                 </div>

//                 {/* Logout Button */}
//                 <button
//                     onClick={handleLogout}
//                     className="mt-4 bg-white text-red-800 font-semibold py-2 px-4 rounded hover:bg-red-100 transition"
//                 >
//                     Logout
//                 </button>
//             </div>

//             {/* Content */}
//             <div className="flex-1 px-6 space-y-0">
//                 <div className="bg-white h-full rounded shadow">
//                     <div className="border-b flex">
//                         <button className="px-4 py-2 font-semibold text-red-500 border-b-2 border-red-500">
//                             Payments History
//                         </button>
//                     </div>
//                     <div className="p-4 space-y-2">
//                         {payments.map((payment, idx) => (
//                             <div key={idx} className="border-b pb-2 text-sm text-black space-y-1">
//                                 <div className="flex justify-between">
//                                     <span className="font-semibold">{payment.title}</span>
//                                     <span className="text-red-500 font-semibold">${payment.price}</span>
//                                 </div>
//                                 <div className="flex flex-col text-gray-600">
//                                     {payment.features.map((feature, index) => (
//                                         <span key={index}>• {feature}</span>
//                                     ))}
//                                 </div>
//                                 <div className="flex justify-between text-xs text-gray-500">
//                                     <span>Payment ID: {payment.paymentId}</span>
//                                     <span>{payment.createdAt} at {payment.time}</span>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default UserProfileComp;


import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

type Payment = {
  packageTitle: string;
  packagePrice: number;
  createdAt: string;
  captureId: string;
  currency: string;
};

const UserProfileComp: React.FC = () => {
  const navigate = useNavigate();
  const [payments, setPayments] = useState<Payment[]>([]);
  const [profile] = useState(() => {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  });

  useEffect(() => {
    const fetchPayments = async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_REACT_APP_API_BASE_URL}/api/paypal/payments?email=${profile?.email}`
        );
        setPayments(res.data);
      } catch (err) {
        console.error('Failed to fetch payments:', err);
      }
    };
    if (profile?.email) fetchPayments();
  }, [profile?.email]);

  const handleLogout = async () => {
    try {
      const API_BASE_URL = import.meta.env.VITE_REACT_APP_API_BASE_URL;
      await axios.post(`${API_BASE_URL}/api/auth/logout`);
      localStorage.removeItem('token');
      navigate('/'); // redirect to login
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  return (
    <div className="flex flex-col mt-30 lg:flex-row w-full bg-gray-100 min-h-screen">
      {/* Sidebar */}
      <div className="bg-red-800 mb-10 h-full w-full lg:w-80 p-4 flex flex-col justify-between relative shadow">
        <div className="flex flex-col items-center">
          <img
            src="https://randomuser.me/api/portraits/women/44.jpg"
            alt="User"
            className="w-24 h-24 rounded-full object-cover mb-4"
          />
          {profile ? (
            <>
              <h2 className="font-bold text-lg">{profile.username}</h2>
              <p className="text-sm text-white">{profile.email}</p>
              <p className="text-xs text-gray-200">ID: {profile.id}</p>
            </>
          ) : (
            <p className="text-sm text-white">No user data</p>
          )}
        </div>
        <button
          onClick={handleLogout}
          className="mt-4 bg-white text-red-800 font-semibold py-2 px-4 rounded hover:bg-red-100 transition"
        >
          Logout
        </button>
      </div>

      {/* Content */}
      <div className="flex-1 px-6 space-y-0">
        <div className="bg-white h-full rounded shadow">
          <div className="border-b flex">
            <button className="px-4 py-2 font-semibold text-red-500 border-b-2 border-red-500">
              Payments History
            </button>
          </div>
          <div className="p-4 space-y-2">
            {payments.length > 0 ? (
              payments.map((payment, idx) => (
                <div key={idx} className="border-b pb-2 text-sm text-black space-y-1">
                  <div className="flex justify-between">
                    <span className="font-semibold">{payment.packageTitle}</span>
                    <span className="text-red-500 font-semibold">
                      {payment.currency} ${payment.packagePrice}
                    </span>
                  </div>
                  <div className="flex justify-between text-xs text-gray-500">
                    <span>Capture ID: {payment.captureId}</span>
                    <span>{new Date(payment.createdAt).toLocaleString()}</span>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-gray-500 text-sm">No payment history</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfileComp;
