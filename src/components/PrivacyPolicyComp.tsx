

const PrivacyPolicyComp = () => {
    return (
        <>
            <div className='w-full z-10 h-full flex flex-col pt-30 justify-center items-center ' >
                <div className='bg-black w-[80%] lg:py-10 py-5 flex flex-col justify-start items-start gap-8' >
                    <h1 className='lg:text-8xl text-4xl text-[rgb(255,70,85)] font-semibold px-10 pt-10' >Privacy Policy</h1>
                </div>
                <div className=' w-[80%] py-10 flex text-black text-justify flex-col justify-start items-start gap-8' >
                    <p>
                        {`
                        This Privacy Policy governs how Realtors Match and its affiliated entities
                        (“we,” “us,” or “our”) handle the collection, use, and sharing of information when
                        you use our websites, tools, promotions, products, or any other services
                        referring to this Policy.
                       `}
                    </p>

                    <p>
                        {`By using the services provided on realtorsmatch.com, you authorize us—along with
                        our parent companies, affiliates, and partners—to contact you via
                        automated phone systems, prerecorded messages, and text messages about
                        relevant offers and services. Signing this agreement is not a condition for
                        purchasing any property, products, or services.`}
                    </p>

                    <p>
                        {`We reserve the right to update this Privacy Policy at any time. When changes
                        occur, we will revise the "Last Updated" date accordingly. By continuing to use
                        the Services, you agree to the updated Policy. If you do not agree, please do
                        not use the Services.`}
                    </p>

                    <h2 className="lg:text-2xl text-xl font-semibold mt-6">Information We Collect</h2>

                    <p>We collect information both directly from you and passively through your interaction with our site.</p>

                    <h3 className="lg:text-xl text-sm font-semibold mt-4">Direct Information You Provide:</h3>
                    <ul className="list-disc list-inside">
                        <li>Filling forms or surveys</li>
                        <li>Creating an account</li>
                        <li>Responding to our communications</li>
                        <li>Requesting newsletters, updates, or feedback</li>
                        <li>Submitting property preferences or user-generated content</li>
                    </ul>

                    <p>This may include:</p>
                    <ul className="list-disc list-inside">
                        <li>Full name</li>
                        <li>Email address</li>
                        <li>Phone number</li>
                        <li>Birthdate</li>
                        <li>Workplace and physical address</li>
                        <li>Property interest details</li>
                        <li>Photographs or audio/video content</li>
                        <li>Financial details (as needed for certain services)</li>
                    </ul>

                    <h3 className="lg:text-xl text-sm font-semibold mt-4">Information Collected Automatically:</h3>
                    <p>We gather technical data when you interact with our services, including:</p>
                    <ul className="list-disc list-inside">
                        <li>IP address, browser type, OS, geolocation</li>
                        <li>Device ID, IMEI, network carrier</li>
                        <li>Referring pages, time spent, and usage behavior</li>
                        <li>Cookies and tracking pixels to analyze performance and user preferences</li>
                    </ul>

                    <h3 className="lg:text-xl text-sm font-semibold mt-4">Location Data:</h3>
                    <p>
                        If enabled on your device, we may use GPS or IP-based geolocation to tailor
                        your experience. You can manage this through your device settings.
                    </p>

                    <h3 className="lg:text-xl text-sm font-semibold mt-4">Third-Party Data:</h3>
                    <p>
                        We may supplement collected data with information from third-party sources to
                        verify your identity, enhance services, or prevent fraud.
                    </p>

                    <h3 className="lg:text-xl text-sm font-semibold mt-4">Cross-Device Collection:</h3>
                    <p>
                        Using hashed emails, IPs, or device identifiers, we may recognize you across
                        multiple devices to ensure a seamless experience and targeted communication.
                    </p>

                    <h2 className="lg:text-2xl text-xl font-semibold mt-6">How We Use Your Information</h2>
                    <ul className="list-disc list-inside space-y-2">
                        <li>To fulfill service requests and personalize your experience</li>
                        <li>To verify identity and facilitate secure access</li>
                        <li>To send transactional emails, alerts, or promotional communications</li>
                        <li>To improve platform functionality and content</li>
                        <li>To contact you regarding surveys or offerings of potential interest</li>
                        <li>To process payments or service-related transactions</li>
                        <li>To analyze site trends and generate reports</li>
                        <li>To detect and prevent fraudulent or unauthorized activities</li>
                        <li>To deliver SMS or phone messages on your request or behalf of agents</li>
                        <li>To administer and debug technical issues</li>
                    </ul>

                    <p>
                        We may combine or anonymize your data for internal analysis and marketing
                        purposes. This information may be shared with partners or advertisers to enhance
                        service offerings.
                    </p>

                    <p>
                        Communication may be delivered via SMS, WhatsApp, Facebook, LinkedIn, email, or
                        mobile apps. These may include promotional content, but you are not obligated to
                        accept them as a condition of any purchase.
                    </p>
                    <h2 className="lg:text-2xl text-xl font-semibold mt-8 mb-4">2. How We Use Your Information</h2>
                    <ul className="list-disc pl-6 mb-4">
                        <li>Verify identity and provide services</li>
                        <li>Send transactional and promotional communications</li>
                        <li>Conduct research, improve content, and deliver ads</li>
                        <li>Respond to inquiries and enforce terms</li>
                        <li>Analyze trends, send SMS or WhatsApp updates</li>
                    </ul>

                    <h2 className="lg:text-2xl text-xl font-semibold mt-8 mb-4">3. Disclosing Your Information</h2>
                    <ul className="list-disc pl-6 mb-4">
                        <li>No mobile information will be shared with third parties/affiliates for marketing or promotional purposes.</li>
                        <li>Information may be shared with subcontractors in support services, such as customer service.</li>
                        <li>All other use cases exclude text messaging originator opt-in data and consent.</li>
                        <li>This information will not be shared with any third parties outside the purposes stated above.</li>
                    </ul>


                    <h2 className="lg:text-2xl text-xl font-semibold mt-8 mb-4">4. Online Analytics and Advertising</h2>
                    <p className="mb-4">
                        We use tools like Google Analytics and advertising platforms to collect data, evaluate usage, and deliver personalized content and ads. You may opt out via browser settings or ad platforms but may still receive non-targeted ads.
                    </p>

                    <h2 className="lg:text-2xl text-xl font-semibold mt-8 mb-4">5. Do Not Track (DNT)</h2>
                    <p className="mb-4">
                        We currently do not respond to DNT browser signals due to a lack of industry standard.
                    </p>

                    <h2 className="lg:text-2xl text-xl font-semibold mt-8 mb-4">6. Managing Your Data</h2>
                    <p className="mb-4">
                        You can update or request removal of your data by contacting us. We retain some information for legal and operational reasons even after account closure.
                    </p>

                    <h2 className="lg:text-2xl text-xl font-semibold mt-8 mb-4">7. Consent to Data Transfer</h2>
                    <p className="mb-4">
                        By using our Services, you consent to your data being transferred to and processed in the U.S. and other jurisdictions that may have different privacy laws.
                    </p>

                    <h2 className="lg:text-2xl text-xl font-semibold mt-8 mb-4">{`8. Children’s Privacy`}</h2>
                    <p className="mb-4">
                        {`Our Services are not intended for children under 13. If we learn we've collected data from such users, we will promptly delete it.
                   `} </p>

                    <h2 className="lg:text-2xl text-xl font-semibold mt-8 mb-4">9. Security</h2>
                    <p className="mb-4">
                        We use security measures to protect your data, but cannot guarantee complete protection. Please safeguard your credentials and notify us of any unauthorized access.
                    </p>

                    <h2 className="lg:text-2xl text-xl font-semibold mt-8 mb-4">10. Third-Party Links and Services</h2>
                    <p className="mb-4">
                        We are not responsible for privacy practices of third-party sites linked to or from our Services.
                    </p>

                    <h2 className="lg:text-2xl text-xl font-semibold mt-8 mb-4">11. Your California Privacy Rights</h2>
                    <p className="mb-4">
                        {`California residents may request details once a year about information we share with third parties for their direct marketing. Email us at info@realtorsmatch.com with “Privacy Support.”
            `}        </p>

                    <h2 className="lg:text-2xl text-xl font-semibold mt-8 mb-4">12. Changes to This Privacy Policy</h2>
                    <p className="mb-4">
                        We may revise this Policy at any time. Your continued use of our Services constitutes acceptance of any changes.
                    </p>

                </div>
            </div>
        </>
    )
}

export default PrivacyPolicyComp