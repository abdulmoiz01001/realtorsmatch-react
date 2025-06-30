import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import type { RootState } from '../store/store';
import { ShoppingCart } from 'lucide-react';
import CheckoutModal from './CheckoutModalComp';

const CheckoutSticky: React.FC = () => {
    const selectedPackage = useSelector((state: RootState) => state.package.selectedPackage);
    const [isModalOpen, setIsModalOpen] = useState(false);

    if (!selectedPackage) return null;

    // const handleProceed = () => {
    //     // 👉 TODO: Replace with real PayPal integration
    //     console.log('Proceeding with PayPal for:', selectedPackage);
    // };

    return (
        <>
            <div className="fixed cursor-pointer bottom-6 right-6 flex flex-col items-center z-50">
                <p className="mb-2 text-sm font-semibold text-gray-700">Proceed to Checkout</p>
                <button
                    onClick={() => setIsModalOpen(true)}
                    className="relative cursor-pointer flex items-center justify-center w-16 h-16 rounded-full bg-[#ff4655] text-white shadow-lg animate-bounce"
                    aria-label="Checkout"
                >
                    <ShoppingCart className="w-7 h-7" />
                    <span className="absolute flex h-3 w-3 top-2 right-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
                    </span>
                </button>
            </div>

            <CheckoutModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                packageDetails={selectedPackage}
            />

        </>
    );
};

export default CheckoutSticky;
