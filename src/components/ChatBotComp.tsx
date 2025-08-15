import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IoSend, IoClose, IoChatbubbleEllipses, IoPersonCircle } from 'react-icons/io5';
import { BsRobot } from 'react-icons/bs';
import axios from 'axios';

interface Message {
    id: string;
    text: string;
    isBot: boolean;
    timestamp: Date;
    isTyping?: boolean;
}

const ChatBotComp = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isPermanentOpen, setIsPermanentOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([]);
    const [inputText, setInputText] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);
    const hoverTimeoutRef = useRef<number | null>(null);

    // Check if chatbot is enabled
    const isChatbotEnabled = import.meta.env.VITE_ENABLE_CHATBOT === 'true';

    // Auto-scroll to bottom
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    // Initialize welcome message
    useEffect(() => {
        if ((isOpen || isPermanentOpen) && messages.length === 0) {
            setTimeout(() => {
                const welcomeMessage: Message = {
                    id: Date.now().toString(),
                    text: "🏠 Hi! I'm your RealtorsMatch AI assistant. I'm here to help you find the perfect realtor, answer real estate questions, and guide you through buying or selling property. How can I help you today?",
                    isBot: true,
                    timestamp: new Date()
                };
                setMessages([welcomeMessage]);
            }, 500);
        }
    }, [isOpen, isPermanentOpen, messages.length]);

    // Handle hover behavior
    const handleMouseEnter = () => {
        if (!isPermanentOpen) {
            if (hoverTimeoutRef.current !== null) {
                clearTimeout(hoverTimeoutRef.current);
            }
            hoverTimeoutRef.current = window.setTimeout(() => {
                setIsOpen(true);
            }, 500);
        }
    };

    const handleMouseLeave = () => {
        if (!isPermanentOpen) {
            if (hoverTimeoutRef.current !== null) {
                clearTimeout(hoverTimeoutRef.current);
            }
            hoverTimeoutRef.current = window.setTimeout(() => {
                setIsOpen(false);
            }, 1000);
        }
    };

    // Handle permanent open
    const handleClick = () => {
        setIsPermanentOpen(true);
        setIsOpen(true);
        if (hoverTimeoutRef.current !== null) {
            clearTimeout(hoverTimeoutRef.current);
        }
    };

    // Handle close
    const handleClose = () => {
        setIsPermanentOpen(false);
        setIsOpen(false);
    };

    // Fallback responses for when AI fails
    const getFallbackResponse = (userInput: string): string => {
        const lowerInput = userInput.toLowerCase();
        
        if (lowerInput.includes('buy') || lowerInput.includes('purchase') || lowerInput.includes('buying')) {
            return "🏡 I'd love to help you find your dream home! RealtorsMatch connects you with experienced buyer's agents who know your local market inside and out. Our verified realtors will help you navigate the entire buying process. Would you like me to help you find a qualified realtor in your area?";
        }
        
        if (lowerInput.includes('sell') || lowerInput.includes('selling') || lowerInput.includes('sale')) {
            return "💰 Great choice! Our selling specialists can help you get top dollar for your property. RealtorsMatch realtors use proven marketing strategies, professional photography, and detailed market analysis to sell your home quickly and for the best price. Shall I connect you with a selling expert?";
        }
        
        if (lowerInput.includes('agent') || lowerInput.includes('realtor') || lowerInput.includes('broker')) {
            return "⭐ Our platform features only verified, top-rated real estate professionals with proven track records. Each realtor is pre-screened, licensed, and has genuine client reviews. We match you based on your specific needs and location. What type of real estate help are you looking for?";
        }
        
        if (lowerInput.includes('price') || lowerInput.includes('value') || lowerInput.includes('cost') || lowerInput.includes('market')) {
            return "📊 Property values depend on location, market conditions, property features, and recent comparable sales. Our experienced realtors provide complimentary market analysis and can give you accurate pricing insights. Would you like a free property valuation or market report?";
        }
        
        if (lowerInput.includes('invest') || lowerInput.includes('investment') || lowerInput.includes('rental')) {
            return "🏢 Real estate investment can be very rewarding! Our investment specialists help with rental properties, fix-and-flip opportunities, and long-term investment strategies. They can analyze cash flow, ROI, and market trends. Would you like to connect with an investment-focused realtor?";
        }
        
        return "🤝 I'm here to help with all your real estate needs through RealtorsMatch! Whether you're buying your first home, selling property, or looking for investment opportunities, I can connect you with the perfect realtor. Our platform makes finding qualified professionals easy and stress-free. What specific real estate question can I help you with?";
    };

    // Send message to AI
    const handleSendMessage = async () => {
        if (inputText.trim() === '') return;

        const userMessage: Message = {
            id: Date.now().toString(),
            text: inputText,
            isBot: false,
            timestamp: new Date()
        };

        setMessages(prev => [...prev, userMessage]);
        const currentInput = inputText;
        setInputText('');
        setIsTyping(true);

        try {
            const response = await axios.post(`${import.meta.env.VITE_REACT_APP_API_BASE_URL}/api/chat/chat-here`, {
                message: currentInput
            }, {
                timeout: 10000 // 10 second timeout
            });

            setTimeout(() => {
                setIsTyping(false); 
                const botMessage: Message = {
                    id: (Date.now() + 1).toString(),
                    text: response.data.message || response.data.response,
                    isBot: true,
                    timestamp: new Date()
                };
                setMessages(prev => [...prev, botMessage]);
            }, 1500);

        } catch (error) {
            console.error('Chat error:', error);
            setTimeout(() => {
                setIsTyping(false);
                const fallbackResponse = getFallbackResponse(currentInput);
                const errorMessage: Message = {
                    id: (Date.now() + 1).toString(),
                    text: fallbackResponse,
                    isBot: true,
                    timestamp: new Date()
                };
                setMessages(prev => [...prev, errorMessage]);
            }, 1500);
        }
    };

    const formatTime = (date: Date) => {
        return date.toLocaleTimeString('en-US', { 
            hour: '2-digit', 
            minute: '2-digit',
            hour12: true 
        });
    };

    // Don't render if chatbot is disabled
    if (!isChatbotEnabled) {
        return null;
    }

    return (
        <>
            {/* Floating Chat Button */}
            <motion.div
                className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                {!isOpen && (
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={handleClick}
                        className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 border-2 md:border-4 border-white"
                    >
                        <IoChatbubbleEllipses className="text-xl md:text-2xl" />
                        <div className="absolute -top-1 -right-1 w-3 h-3 md:w-4 md:h-4 bg-green-500 rounded-full border-2 border-white animate-pulse"></div>
                    </motion.button>
                )}

                {/* Chat Window */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.8, y: 20 }}
                            className="absolute bottom-16 md:bottom-20 right-0 w-[90vw] max-w-sm md:w-96 h-[70vh] md:h-[550px] bg-white rounded-2xl shadow-2xl flex flex-col border-2 md:border-4 border-red-100 overflow-hidden sm:right-0 sm:w-80"
                        >
                            {/* Header */}
                            <div className="flex items-center justify-between p-3 md:p-4 bg-gradient-to-r from-red-500 to-red-600 text-white">
                                <div className="flex items-center gap-2 md:gap-3">
                                    <div className="w-8 h-8 md:w-10 md:h-10 bg-white/20 rounded-full flex items-center justify-center">
                                        <BsRobot className="text-base md:text-xl" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-base md:text-lg">RealtorsMatch AI</h3>
                                        <p className="text-red-100 text-xs">Your Real Estate Assistant</p>
                                    </div>
                                </div>
                                {isPermanentOpen && (
                                    <button
                                        onClick={handleClose}
                                        className="text-white hover:text-red-200 p-1 rounded-full hover:bg-white/10 transition-colors"
                                    >
                                        <IoClose className="text-lg md:text-xl" />
                                    </button>
                                )}
                            </div>

                            {/* Messages Container */}
                            <div className="flex-1 overflow-y-auto p-3 md:p-4 space-y-3 md:space-y-4 bg-gradient-to-b from-red-50 to-white">
                                {messages.map((message) => (
                                    <motion.div
                                        key={message.id}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
                                    >
                                        <div className={`flex items-start gap-2 max-w-[90%] md:max-w-[85%] ${message.isBot ? 'flex-row' : 'flex-row-reverse'}`}>
                                            {/* Avatar */}
                                            <div className={`${message.isBot ? "w-6 md:w-8" : "w-8 md:w-12"} h-6 md:h-8 rounded-full flex items-center justify-center text-white text-xs md:text-sm font-bold ${
                                                message.isBot ? 'bg-gradient-to-r from-red-500 to-red-600' : 'bg-gradient-to-r from-gray-500 to-gray-600'
                                            }`}>
                                                {message.isBot ? <BsRobot className="text-xs md:text-sm" /> : <IoPersonCircle className="text-sm md:text-base" />}
                                            </div>

                                            {/* Message Bubble */}
                                            <div className="flex w-[85%] md:w-[90%] flex-col">
                                                <div
                                                    className={`px-3 md:px-4 py-2 md:py-3 rounded-2xl text-xs md:text-sm leading-relaxed ${
                                                        message.isBot
                                                            ? 'bg-white text-gray-800 shadow-md border-2 border-red-100'
                                                            : 'bg-gradient-to-r from-red-500 to-red-600 text-white shadow-md'
                                                    }`}
                                                >
                                                    {message.text}
                                                </div>
                                                <span className={`text-xs text-gray-400 mt-1 px-1 ${
                                                    message.isBot ? 'text-left' : 'text-right'
                                                }`}>
                                                    {formatTime(message.timestamp)}
                                                </span>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}

                                {/* Typing Indicator */}
                                {isTyping && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="flex justify-start"
                                    >
                                        <div className="flex items-start gap-2 max-w-[90%] md:max-w-[85%]">
                                            <div className="w-6 md:w-8 h-6 md:h-8 rounded-full flex items-center justify-center text-white text-xs md:text-sm font-bold bg-gradient-to-r from-red-500 to-red-600">
                                                <BsRobot className="text-xs md:text-sm" />
                                            </div>
                                            <div className="bg-white px-3 md:px-4 py-2 md:py-3 rounded-2xl shadow-md border-2 border-red-100">
                                                <div className="flex space-x-1">
                                                    <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-red-500 rounded-full animate-bounce"></div>
                                                    <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-red-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                                                    <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-red-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                )}

                                <div ref={messagesEndRef} />
                            </div>

                            {/* Input Section */}
                            <div className="p-3 md:p-4 bg-white border-t-2 border-red-100">
                                <div className="flex gap-2">
                                    <input
                                        type="text"
                                        value={inputText}
                                        onChange={(e) => setInputText(e.target.value)}
                                        onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                                        placeholder="Ask about any query..."
                                        className="flex-1 px-3 md:px-4 py-2 md:py-3 border-2 text-black placeholder:text-black border-red-100 rounded-xl focus:outline-none focus:border-red-500 text-xs md:text-sm transition-colors"
                                        disabled={isTyping}
                                    />
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        onClick={handleSendMessage}
                                        disabled={isTyping || inputText.trim() === ''}
                                        className="px-3 md:px-4 py-2 md:py-3 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white rounded-xl disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-md"
                                    >
                                        <IoSend className="text-sm md:text-lg" />
                                    </motion.button>
                                </div>
                                <p className="text-xs text-gray-500 mt-2 text-center">
                                    Powered by RealtorsMatch AI • Always here to help 🏠
                                </p>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>
        </>
    );
};

export default ChatBotComp;