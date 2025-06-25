

const CommunicationPolicyComp = () => {
    return (
        <>
            <div className='w-full z-10 h-full flex flex-col pt-30 justify-center items-center ' >
                <div className='bg-black w-[80%] lg:py-10 py-5 flex flex-col justify-start items-start gap-8' >
                    <h1 className='lg:text-8xl text-3xl text-[rgb(255,70,85)] font-semibold lg:px-10 pl-3 lg:pt-10' >Communication Policy</h1>
                </div>
                <div className=' w-[80%] py-10 flex text-black text-justify flex-col justify-start items-start gap-8' >
                    <p className="mb-4">
                        Our communication policy outlines the guidelines for interacting with our users and ensures compliance with applicable laws, including the Telephone Consumer Protection Act (TCPA). Please review these Terms and Conditions carefully as they include a mandatory arbitration clause, requiring arbitration on an individual basis to resolve disputes instead of jury trials or class actions.
                    </p>

                    <h2 className="text-xl font-semibold mt-6 mb-2">Introduction</h2>
                    <p className="mb-4">
                        RealtorsMatch (“we”, “us”, or “our”) values your privacy. This Communication Policy explains how we collect, use, and protect your information when you interact with our website (
                        <a href="https://realtorsmatch.com" className="text-blue-600 underline">RealtorsMatch.com</a>) and associated platforms. If you disagree with our terms, please refrain from using our services.
                    </p>

                    <h2 className="text-xl font-semibold mt-6 mb-2">Consent to Communication</h2>
                    <p className="mb-4">
                        By accepting this agreement, you authorize RealtorsMatch, its affiliates, and partners to contact you via SMS, email, phone calls, WhatsApp, and social media (e.g., Facebook, Instagram, Google, Pinterest, Twitter, etc.). Communication may involve promotional or marketing content using automated technology, prerecorded messages, or texts—even if your number is listed on a national DNC registry.
                    </p>
                    <p className="mb-4">
                        Signing this agreement is not a condition of purchasing any property, goods, or services.
                    </p>

                    <h2 className="text-xl font-semibold mt-6 mb-2">Policy Modifications</h2>
                    <p className="mb-4">
                        We may update this Communication Policy at any time. Updates will be reflected by changing the “Last Updated” date. Continued use of our services after changes signifies your agreement to those changes.
                    </p>

                    <h2 className="text-xl font-semibold mt-6 mb-2">Service Availability</h2>
                    <p className="mb-4">
                        {`  RealtorsMatch’s communication services are provided “as is” and may not work across all carriers or locations. We are not responsible for technical issues, delays, or undelivered messages. Your carrier’s message and data rates may apply.
                    `}</p>

                    <h2 className="text-xl font-semibold mt-6 mb-2">Text Alerts & Enrollment</h2>
                    <p className="mb-4">
                        You may receive recurring SMS/MMS alerts about your orders or services. By enrolling, you provide your mobile number and consent to receive these alerts. To stop receiving messages, reply “STOP” to any message. Standard carrier rates may apply.
                    </p>

                    <h2 className="text-xl font-semibold mt-6 mb-2">Types of Consent</h2>
                    <ul className="list-disc list-inside mb-4">
                        <li>
                            <strong>Conversational:</strong> When you initiate a text and we reply once with relevant info, your message implies consent.
                        </li>
                        <li>
                            <strong>Informational:</strong> If you provide your phone number for updates, we require your express consent to send future messages.
                        </li>
                        <li>
                            <strong>Promotional:</strong> We require your explicit written, verbal, or digital consent to send marketing messages.
                        </li>
                    </ul>

                    <h2 className="text-xl font-semibold mt-6 mb-2">Opt-Out Option</h2>
                    <p className="mb-4">
                        {`    You may opt out at any time by replying "STOP" to any text message from RealtorsMatch. You may receive one confirmation message, after which no further messages will be sent unless you opt in again.
                   `} </p>
                    <h2 className="text-xl font-semibold mt-8 mb-2">Promotional Text Messaging</h2>
                    <p className="mb-4">
                        {` Promotional messages are used to promote our services. You may opt-in by signing a form, checking a box online, or other methods. You can opt-out at any time by replying "STOP" or "UNSUBSCRIBE".
                   `} </p>

                    <h2 className="text-xl font-semibold mt-6 mb-2">Text Message Calls-to-Action (CTAs)</h2>
                    <p className="mb-4">
                        CTAs include links or buttons in messages encouraging actions such as paying invoices, scheduling, or opting out/in.
                    </p>

                    <h2 className="text-xl font-semibold mt-6 mb-2">SMS Messages</h2>
                    <p className="mb-4">
                        Message and data rates may apply. Message frequency depends on your activity. Text HELP to 1 (786) 633-1912 for support or STOP to opt-out.
                    </p>

                    <h2 className="text-xl font-semibold mt-6 mb-2">Informational Messaging</h2>
                    <p className="mb-4">
                        Requires express consent via text opt-in, forms, websites, or verbal agreement to receive service-related information.
                    </p>

                    <h2 className="text-xl font-semibold mt-6 mb-2">Conversational Messaging</h2>
                    <p className="mb-4">
                        If you message us first and we reply once with relevant info, it is considered implied consent and does not require written approval.
                    </p>

                    <h2 className="text-xl font-semibold mt-6 mb-2">General SMS Policy</h2>
                    <p className="mb-4">
                        By agreeing to this policy, you acknowledge you may receive texts from RealtorsMatch. We will only contact you based on your activity or service requests. Promotional messages are sent to users from inbound queries via lead generation platforms.
                    </p>

                    {/* SECTION: Call Monitoring */}
                    <h2 className="text-xl font-semibold mt-8 mb-2">Call Monitoring & Recording</h2>
                    <p className="mb-4">
                        All incoming/outgoing calls may be recorded for quality, compliance, training, and legal purposes. Recordings are securely stored and accessible only to authorized staff. We notify callers that calls may be recorded, and by continuing, you provide consent.
                    </p>

                    {/* SECTION: Data Collection */}
                    <h2 className="text-xl font-semibold mt-8 mb-2">Personal Data Collection</h2>
                    <ul className="list-disc list-inside mb-4">
                        <li>Adequate, relevant, and not excessive</li>
                        <li>Used only for specified purposes</li>
                        <li>Accessible only to authorized personnel</li>
                        <li>Handled confidentially and securely</li>
                        <li>Stored securely and destroyed when no longer needed</li>
                    </ul>

                    {/* SECTION: Social Media Integration */}
                    <h2 className="text-xl font-semibold mt-8 mb-2">Social Media Access</h2>
                    <p className="mb-4">
                        If you connect via social platforms (Facebook, Google, Instagram, Twitter, etc.), we may collect data including name, email, location, profile picture, friends, and more — only if you allow access.
                    </p>

                    {/* SECTION: Contests, Surveys, and Giveaways */}
                    <h2 className="text-xl font-semibold mt-8 mb-2">Surveys, Contests, and Giveaways</h2>
                    <p className="mb-4">
                        Participation may require submitting personal data. All data collected will be used in accordance with this policy.
                    </p>

                    {/* SECTION: Legal & Third-Party Disclosure */}
                    <h2 className="text-xl font-semibold mt-8 mb-2">Legal Compliance & Disclosures</h2>
                    <p className="mb-4">
                        We may disclose your data to comply with legal processes, investigate violations, protect rights, or prevent fraud.
                    </p>

                    <h2 className="text-xl font-semibold mt-6 mb-2">Third-Party Service Providers</h2>
                    <p className="mb-4">
                        We may share your information with service providers performing tasks such as payment processing, data analysis, hosting, marketing, or customer support on our behalf.
                    </p>

                    <h2 className="text-xl font-semibold mt-6 mb-2">Marketing Communications</h2>
                    <p className="mb-4">
                        With your consent, we may share your information with third parties for marketing purposes.
                    </p>

                    <h2 className="text-xl font-semibold mt-6 mb-2">Interactions & Postings</h2>
                    <p className="mb-4">
                        When interacting with other users or posting on our platform, your content may be publicly visible and shareable.
                    </p>

                    <h2 className="text-xl font-semibold mt-6 mb-2">Advertising</h2>
                    <p className="mb-4">
                        We may use third-party advertisers. These companies may use cookies and other tracking technologies to deliver personalized ads.
                    </p>

                    <h2 className="text-xl font-semibold mt-6 mb-2">Affiliates & Partners</h2>
                    <p className="mb-4">
                        We may share your information with our parent companies, subsidiaries, and business partners under shared policies and guidelines.
                    </p>

                    <h2 className="text-xl font-semibold mt-6 mb-2">Business Transfers</h2>
                    <p className="mb-4">
                        In the event of a merger, acquisition, or bankruptcy, your data may be transferred to the new entity and may be used per this policy.
                    </p>

                    {/* SECTION: Communication Preferences */}
                    <h2 className="text-xl font-semibold mt-8 mb-2">Managing Communication Preferences</h2>
                    <p className="mb-4">
                        You may opt out of emails and messages by:
                    </p>
                    <ul className="list-disc list-inside mb-4">
                        <li>Updating your preferences in your account settings</li>
                        <li>Clicking “unsubscribe” in emails</li>
                        <li>Contacting us directly at <a href="mailto:info@RealtorsMatch.com" className="text-blue-600 underline">info@RealtorsMatch.com</a></li>
                    </ul>
                    <p className="mb-4">
                        To stop messages from third parties, contact them directly.
                    </p>

                    <h2 className="text-xl font-semibold mt-6 mb-2">Contact Us</h2>
                    <p>
                        If you have any questions about this policy, please reach out to us at:{" "}
                        <a href="mailto:info@RealtorsMatch.com" className="text-blue-600 underline">info@RealtorsMatch.com</a>
                    </p>
                </div>
            </div>

        </>
    )
}

export default CommunicationPolicyComp