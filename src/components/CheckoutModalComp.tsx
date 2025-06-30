// // import React, { useEffect, useState, useRef } from 'react';
// // import { X } from 'lucide-react';

// // interface PackageDetails {
// //   title: string;
// //   price: number;
// //   features: string[];
// // }

// // interface CheckoutModalProps {
// //   isOpen: boolean;
// //   onClose: () => void;
// //   packageDetails: PackageDetails;
// // }

// // const CheckoutModal: React.FC<CheckoutModalProps> = ({
// //   isOpen,
// //   onClose,
// //   packageDetails,
// // }) => {
// //   const [showModal, setShowModal] = useState(isOpen);
// //   const [isVisible, setIsVisible] = useState(false);
// //   const paypalRef = useRef<HTMLDivElement | null>(null);

// //   useEffect(() => {
// //     if (isOpen) {
// //       setShowModal(true);
// //       setTimeout(() => setIsVisible(true), 10);
// //     } else {
// //       setIsVisible(false);
// //       const timeout = setTimeout(() => setShowModal(false), 300);
// //       return () => clearTimeout(timeout);
// //     }
// //   }, [isOpen]);

// //   // useEffect(() => {
// //   //   if (!showModal) return;

// //   //   const loadPayPal = async () => {
// //   //     if (!(window as any).paypal) {
// //   //       const script = document.createElement('script');
// //   //       script.src = `https://www.paypal.com/sdk/js?client-id=${
// //   //         import.meta.env.VITE_PAYPAL_CLIENT_ID
// //   //       }&currency=USD`;
// //   //       script.onload = renderPayPalButtons;
// //   //       document.body.appendChild(script);
// //   //     } else {
// //   //       renderPayPalButtons();
// //   //     }
// //   //   };

// //   //   const renderPayPalButtons = () => {
// //   //     (window as any).paypal
// //   //       .Buttons({
// //   //         createOrder: async () => {
// //   //           const user = JSON.parse(localStorage.getItem('user') || '{}');

// //   //           const res = await fetch(`${import.meta.env.VITE_REACT_APP_API_BASE_URL}/api/paypal/create-order`, {
// //   //             method: 'POST',
// //   //             headers: {
// //   //               'Content-Type': 'application/json',
// //   //               Authorization: `Bearer ${localStorage.getItem('token')}`,
// //   //             },
// //   //             body: JSON.stringify({
// //   //               amount: packageDetails.price,
// //   //               title: packageDetails.title,
// //   //               features: packageDetails.features,
// //   //               userEmail: user?.email || '', // ✅ add it
// //   //             }),
// //   //           });

// //   //           const data = await res.json();
// //   //           return data.id;
// //   //         },

// //   //         onApprove: async (data: any) => {
// //   //           const res = await fetch(`${import.meta.env.VITE_REACT_APP_API_BASE_URL}/api/paypal/capture-order`, {
// //   //             method: 'POST',
// //   //             headers: {
// //   //               'Content-Type': 'application/json',
// //   //               Authorization: `Bearer ${localStorage.getItem('token')}`,
// //   //             },
// //   //             body: JSON.stringify({ orderID: data.orderID }),
// //   //           });

// //   //           const result = await res.json();
// //   //           if (result.status === 'COMPLETED') {
// //   //             alert('Payment success!');
// //   //             onClose();
// //   //           } else {
// //   //             alert('Payment failed.');
// //   //           }
// //   //         },

// //   //         onError: (err: any) => {
// //   //           console.error(err);
// //   //           alert('PayPal checkout error.');
// //   //         },
// //   //       })
// //   //       .render(paypalRef.current!);
// //   //   };

// //   //   loadPayPal();
// //   // }, [showModal]);

// //   useEffect(() => {
// //     if (!showModal) return;

// //     const loadPayPal = async () => {
// //       // ✅ Get PayPal OAuth token first
// //       const res = await fetch(`${import.meta.env.VITE_REACT_APP_API_BASE_URL}/api/paypal/access-token`);
// //       const { access_token } = await res.json();

// //       if (!(window as any).paypal) {
// //         const script = document.createElement('script');
// //         script.src = `https://www.paypal.com/sdk/js?client-id=${import.meta.env.VITE_PAYPAL_CLIENT_ID
// //           }&currency=USD`;
// //         script.onload = () => renderPayPalButtons(access_token);
// //         document.body.appendChild(script);
// //       } else {
// //         renderPayPalButtons(access_token);
// //       }
// //     };

// //     const renderPayPalButtons = (accessToken: string) => {
// //       (window as any).paypal
// //         .Buttons({
// //           createOrder: async () => {
// //             const user = JSON.parse(localStorage.getItem('user') || '{}');
// //             const res = await fetch(`${import.meta.env.VITE_REACT_APP_API_BASE_URL}/api/paypal/create-order`, {
// //               method: 'POST',
// //               headers: {
// //                 'Content-Type': 'application/json',
// //                 Authorization: `Bearer ${accessToken}`,
// //               },
// //               body: JSON.stringify({
// //                 amount: packageDetails.price,
// //                 title: packageDetails.title,
// //                 features: packageDetails.features,
// //                 userEmail: user?.email || '',
// //               }),
// //             });

// //             const data = await res.json();
// //             return data.id;
// //           },
// //           onApprove: async (data: any) => {
// //             const res = await fetch(`${import.meta.env.VITE_REACT_APP_API_BASE_URL}/api/paypal/capture-order`, {
// //               method: 'POST',
// //               headers: {
// //                 'Content-Type': 'application/json',
// //                 Authorization: `Bearer ${accessToken}`,
// //               },
// //               body: JSON.stringify({ orderID: data.orderID }),
// //             });

// //             const result = await res.json();
// //             if (result.status === 'COMPLETED') {
// //               alert('Payment success!');
// //               onClose();
// //             } else {
// //               alert('Payment failed.');
// //             }
// //           },
// //           onError: (err: any) => {
// //             console.error(err);
// //             alert('PayPal checkout error.');
// //           },
// //         })
// //         .render(paypalRef.current!);
// //     };

// //     loadPayPal();
// //   }, [showModal]);


// //   if (!showModal) return null;

// //   return (
// //     <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
// //       <div
// //         className={`relative bg-white rounded-lg shadow-xl p-8 w-full max-w-md text-center transform transition-all duration-300 ${isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
// //           }`}
// //       >
// //         <button
// //           onClick={onClose}
// //           className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
// //         >
// //           <X className="w-6 h-6" />
// //         </button>

// //         <h2 className="text-2xl text-black font-bold mb-4">Checkout</h2>

// //         <div ref={paypalRef} />
// //       </div>
// //     </div>
// //   );
// // };

// // export default CheckoutModal;


// import React, { useEffect, useState, useRef } from 'react';
// import { X } from 'lucide-react';

// interface PackageDetails {
//   title: string;
//   price: number;
//   features: string[];
// }

// interface CheckoutModalProps {
//   isOpen: boolean;
//   onClose: () => void;
//   packageDetails: PackageDetails;
// }

// const CheckoutModal: React.FC<CheckoutModalProps> = ({
//   isOpen,
//   onClose,
//   packageDetails,
// }) => {
//   const [showModal, setShowModal] = useState(isOpen);
//   const [isVisible, setIsVisible] = useState(false);
//   const paypalRef = useRef<HTMLDivElement | null>(null);

//   useEffect(() => {
//     if (isOpen) {
//       setShowModal(true);
//       setTimeout(() => setIsVisible(true), 10);
//     } else {
//       setIsVisible(false);
//       const timeout = setTimeout(() => setShowModal(false), 300);
//       return () => clearTimeout(timeout);
//     }
//   }, [isOpen]);

//   useEffect(() => {
//     if (!showModal) return;

//     const loadPayPal = async () => {
//       if (!(window as any).paypal) {
//         const script = document.createElement('script');
//         script.src = `https://www.paypal.com/sdk/js?client-id=${import.meta.env.VITE_PAYPAL_CLIENT_ID}&currency=USD`;
//         script.onload = renderPayPalButtons;
//         document.body.appendChild(script);
//       } else {
//         renderPayPalButtons();
//       }
//     };

//     const renderPayPalButtons = () => {
//       (window as any).paypal
//         .Buttons({
//           createOrder: async () => {
//             const res = await fetch(`${import.meta.env.VITE_REACT_APP_API_BASE_URL}/api/paypal/create_order`, {
//               method: 'POST',
//               headers: { 'Content-Type': 'application/json' },
//               body: JSON.stringify({
//                 intent: 'CAPTURE',
//                 amount: "100.0",
//                 title: "Test Package",
//               }),
//             });

//             const data = await res.json();
//             return data.id;
//           },

//           onApprove: async (data: any) => {
//             const res = await fetch(`${import.meta.env.VITE_REACT_APP_API_BASE_URL}/api/paypal/complete_order`, {
//               method: 'POST',
//               headers: { 'Content-Type': 'application/json' },
//               body: JSON.stringify({
//                 order_id: data.orderID,
//                 intent: 'capture'
//               }),
//             });

//             const result = await res.json();
//             if (result.status === 'COMPLETED') {
//               alert('Payment success!');
//               onClose();
//             } else {
//               alert('Payment failed.');
//             }
//           },

//           onError: (err: any) => {
//             console.error(err);
//             alert('PayPal checkout error.');
//           },
//         })
//         .render(paypalRef.current!);
//     };

//     loadPayPal();
//   }, [showModal]);

//   if (!showModal) return null;

//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
//       <div
//         className={`relative bg-white rounded-lg shadow-xl p-8 w-full max-w-md text-center transform transition-all duration-300 ${
//           isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
//         }`}
//       >
//         <button
//           onClick={onClose}
//           className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
//         >
//           <X className="w-6 h-6" />
//         </button>

//         <h2 className="text-2xl text-black font-bold mb-4">Checkout</h2>

//         <div ref={paypalRef} />
//       </div>
//     </div>
//   );
// };

// export default CheckoutModal;


import React, { useEffect, useState, useRef } from 'react';
import { X } from 'lucide-react';

interface PackageDetails {
  title: string;
  price: number;
  features: string[];
}

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  packageDetails: PackageDetails;
}

const CheckoutModal: React.FC<CheckoutModalProps> = ({
  isOpen,
  onClose,
  packageDetails,
}) => {
  const [showModal, setShowModal] = useState(isOpen);
  const [isVisible, setIsVisible] = useState(false);
  const paypalRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (isOpen) {
      setShowModal(true);
      setTimeout(() => setIsVisible(true), 10);
    } else {
      setIsVisible(false);
      const timeout = setTimeout(() => setShowModal(false), 300);
      return () => clearTimeout(timeout);
    }
  }, [isOpen]);

  useEffect(() => {
    if (!showModal) return;

    const loadPayPal = async () => {
      if (!(window as any).paypal) {
        const script = document.createElement('script');
        script.src = `https://www.paypal.com/sdk/js?client-id=${import.meta.env.VITE_PAYPAL_CLIENT_ID}&currency=USD`;
        script.onload = renderPayPalButtons;
        document.body.appendChild(script);
      } else {
        renderPayPalButtons();
      }
    };

    const renderPayPalButtons = () => {
      (window as any).paypal
        .Buttons({
          createOrder: async () => {
            const res = await fetch(`${import.meta.env.VITE_REACT_APP_API_BASE_URL}/api/paypal/create_order`, {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                // intent: 'CAPTURE',
                amount: packageDetails.price.toFixed(2),
                title: packageDetails.title,
                features: packageDetails.features,
              }),
            });

            const data = await res.json();
            console.log('✅ PayPal Order Created:', data);
            return data.id;
          },
          onApprove: async (data: any) => {
            const res = await fetch(`${import.meta.env.VITE_REACT_APP_API_BASE_URL}/api/paypal/complete_order`, {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                order_id: data.orderID,
                // intent: 'capture',
              }),
            });

            const result = await res.json();
            console.log('✅ PayPal Capture Response:', result);

            if (result.status === 'COMPLETED') {

              // 🔥 Get user info
              const user = JSON.parse(localStorage.getItem('user') || '{}');
              // 🔥 Send mail to admin & user
              await fetch(`${import.meta.env.VITE_REACT_APP_API_BASE_URL}/api/mail/payment`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                  userEmail: user?.email,
                  userName: user?.name,
                  packageTitle: packageDetails.title,
                  packagePrice: packageDetails.price,
                  time: new Date().toISOString(),
                }),
              });
              alert('✅ Payment Success!');
              onClose();
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
  }, [showModal]);

  if (!showModal) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <div
        className={`relative bg-white rounded-lg shadow-xl p-8 w-full max-w-md text-center transform transition-all duration-300 ${isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
          }`}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
        >
          <X className="w-6 h-6" />
        </button>

        <h2 className="text-2xl text-black font-bold mb-4">Checkout</h2>
        <div ref={paypalRef} />
      </div>
    </div>
  );
};

export default CheckoutModal;
