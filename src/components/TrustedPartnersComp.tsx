
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import GetLeadsComp from './GetLeadsComp';
import {
    BrainCircuit,
    Target,
    Handshake,
    MonitorSmartphone,
    ClipboardList,
    UserCog,
    Magnet,
    PhoneIncoming,
    LineChart,
} from 'lucide-react';


const companyLogos = [
    'https://prospectigo.com/wp-content/uploads/2024/03/Remax-1.png', // Abstract logo
    'https://prospectigo.com/wp-content/uploads/2024/03/Key-Realty.png', // Building logo
    'https://prospectigo.com/wp-content/uploads/2024/03/Keller-Williams.png', // Graph logo
    'https://prospectigo.com/wp-content/uploads/2024/03/Fathom-1.png', // Business abstract
    'https://prospectigo.com/wp-content/uploads/2024/03/exp-1.png', // Finance icon
    'https://prospectigo.com/wp-content/uploads/2024/03/Berkshire-1.png', // Code tech
    'https://prospectigo.com/wp-content/uploads/2024/03/Coldwell-Banker.png', // Code tech
];

const TrustedPartnersComp = () => {
    const featuresData = [
        {
            icon: <BrainCircuit className="text-yellow-400 w-10 h-10" />,
            title: 'Innovative Technology Integration',
            description:
                'Prospectigo integrates the latest in CRM, virtual and augmented reality, and automated marketing tools.',
        },
        {
            icon: <Target className="text-blue-400 w-10 h-10" />,
            title: 'Customized Marketing Strategies',
            description:
                'We tailor our marketing strategies—including geo-targeted digital campaigns and SEO mastery.',
        },
        {
            icon: <Handshake className="text-pink-400 w-10 h-10" />,
            title: 'Partnership-Centric Approach',
            description:
                'We ensure that our success is directly tied to yours, driving us to constantly innovate and improve our services.',
        },
        {
            icon: <MonitorSmartphone className="text-cyan-400 w-10 h-10" />,
            title: 'Comprehensive Service Offering',
            description:
                'We offer a more extensive range of services designed to support real estate professionals at every step of their journey.',
        },
        {
            icon: <ClipboardList className="text-purple-400 w-10 h-10" />,
            title: 'Dedicated Transaction Coordination Services',
            description:
                'We streamline the entire closing process, allowing realtors to prioritize client relationships and boost deal closure rates.',
        },
        {
            icon: <UserCog className="text-rose-400 w-10 h-10" />,
            title: 'Personalized Virtual Assistance Services',
            description:
                'Our skilled assistants manage all real estate-specific tasks efficiently, allowing partners to focus on strategic growth.',
        },
        {
            icon: <Magnet className="text-red-400 w-10 h-10" />,
            title: 'Exclusivity in Lead Generation',
            description:
                'We provide exclusive lead generation services, guaranteeing sole access to leads within designated ZIP codes.',
        },
        {
            icon: <PhoneIncoming className="text-orange-400 w-10 h-10" />,
            title: '100% Live Lead Transfers',
            description:
                'We focus on delivering live transfers of leads, aiming for a 100% connection rate, contingent upon realtors’ availability to take calls.',
        },
        {
            icon: <LineChart className="text-green-400 w-10 h-10" />,
            title: 'Renewable Contracts Focused on ROI',
            description:
                'Focused on ROI alignment, we adapt and optimize strategies to surpass your business objectives.',
        },
    ];

    return (
        <>
            <div className="w-full bg-black py-26 flex flex-col justify-center items-center">
                <h1 className="text-white text-3xl font-semibold mb-10">Our Proud Partners</h1>

                <div className="w-[90%] max-w-6xl">
                    <Swiper
                        modules={[Autoplay]}
                        spaceBetween={30}
                        slidesPerView={5}
                        loop={true}
                        autoplay={{
                            delay: 2000,
                            disableOnInteraction: false,
                        }}
                        breakpoints={{
                            640: { slidesPerView: 3 },
                            768: { slidesPerView: 4 },
                            1024: { slidesPerView: 5 },
                        }}
                    >
                        {companyLogos.map((logo, idx) => (
                            <SwiperSlide key={idx}>
                                <img
                                    src={logo}
                                    width={200}
                                    height={100}
                                    alt={`Partner ${idx + 1}`}
                                    className="h-32 w-auto object-contain grayscale hover:grayscale-0 transition duration-300"
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
            <div className="w-full rounded-2xl bg-amber-50 p-4 m-4 max-w-[80%] flex flex-col text-black justify-start items-start gap-8 text-center mt-10">
                <p className="text-black text-start text-2xl font-semibold">
                    Join our trusted partners and grow your business with us!
                </p>
                <h2 className="text-black text-start text-lg">
                    We collaborate with leading real estate companies to provide you with the best opportunities in the market.
                    Partner with us to expand your reach and enhance your business prospects.
                </h2>
            </div>
            <div className="w-full bg-black text-white py-10 p-8 rounded-2xl max-w-[80%] m-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {featuresData.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-8    ">
                            <div className="shrink-0">{feature.icon}</div>
                            <div>
                                <h3 className="text-lg font-bold">{feature.title}</h3>
                                <p className="text-sm text-gray-300 mt-1">{feature.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div >

            <GetLeadsComp />
        </>
    );
};

export default TrustedPartnersComp;
