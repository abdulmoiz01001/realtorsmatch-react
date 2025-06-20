

const TermsofUseComp = () => {
    return (
        <>
            <div className='w-full h-full flex flex-col pt-30 justify-center items-center ' >
                <div className='bg-black w-[80%] lg:py-10 py-5 flex flex-col justify-start items-start gap-8' >
                    <h1 className='lg:text-8xl text-4xl text-[rgb(255,70,85)] font-semibold px-10 pt-10' >Terms Of Use</h1>
                </div>
                <div className=' w-[80%] py-10 flex text-black text-justify flex-col justify-start items-start gap-8' >
                    <p>Welcome to <strong>RealtorsMatch</strong>, {`a platform built to support real estate professionals and clients through secure, efficient, and responsible services. These Terms of Use govern your access and use of RealtorsMatch’s website, mobile tools, and related services ("Services").`}</p>

                    <h2 className="mt-6 text-xl font-semibold">Third-Party Services and Disclaimers</h2>
                    <p>
                        {`Through the RealtorsMatch platform, users may be introduced to independent service providers such as licensed real estate agents, mortgage brokers, and inspectors. RealtorsMatch does not recommend, endorse, or take responsibility for any service provider's performance. All users are responsible for conducting their own background checks and due diligence prior to engaging with a third party.
                `}    </p>
                    <p>
                        RealtorsMatch is not a financial institution, lender, or brokerage. We do not make lending decisions or handle transactions. We connect users with professionals and do not participate in any financial agreements between users and providers. RealtorsMatch does not charge users for basic access to its connection services.
                    </p>

                    <h2 className="mt-6 text-xl font-semibold">Content Ownership and Submission</h2>
                    <p>
                        If you share any material, message, or content that is not trademarked or copyrighted, you grant RealtorsMatch permission to use, adapt, and publish it across platforms. For content protected by copyright or trademark, you must have written authorization to share it, and by doing so, grant RealtorsMatch rights to utilize it as necessary.
                    </p>

                    <h2 className="mt-6 text-xl font-semibold">Prohibited Content</h2>
                    <p>
                        RealtorsMatch prohibits submissions that are illegal, abusive, infringe on intellectual property, mislead others, spread malware, or are promotional in nature without permission. We reserve the right to screen, reject, or remove any material that violates these terms, and you are fully responsible for your submissions.
                    </p>

                    <h2 className="mt-6 text-xl font-semibold">User Data and Privacy</h2>
                    <p>
                        By using our Services, you agree that we may use your information to:
                        <ul className="list-disc pl-5">
                            <li>Provide RealtorsMatch services and customer support</li>
                            <li>Investigate or prevent misuse, security threats, or fraud</li>
                            <li>Respond to legal inquiries or protect others in emergency scenarios</li>
                            <li>Comply with legal obligations</li>
                        </ul>
                        All use of data complies with our <strong>Privacy Policy</strong>, which we encourage you to review.
                    </p>

                    <h2 className="mt-6 text-xl font-semibold">Usage Restrictions</h2>
                    <p>
                        You must not resell, sublicense, or exploit our Services outside of intended use. You also agree not to reverse-engineer or attempt to extract source code from our technology. Misuse of Services or breach of law will result in suspension or termination of your account.
                    </p>

                    <h2 className="mt-6 text-xl font-semibold">Leads and Partner Disclosures</h2>
                    <p>
                        RealtorsMatch may introduce you to Service or Lead Partners. While we may receive compensation from these partners, the services or products you engage with are offered directly by those partners. You agree that we may share your information with them when you express interest. We are not liable for the products, services, or terms associated with third-party partners.
                    </p>

                    <h2 className="mt-6 text-xl font-semibold">Confidentiality</h2>
                    <p>
                        Both parties agree to safeguard confidential data shared in the course of service. This includes internal documents, proprietary technology, or personal user data. RealtorsMatch may share such data only with authorized staff or partners under strict confidentiality obligations and only as required to provide services.
                    </p>

                    <p>
                        You may opt-out of our services by sending “STOP” via text, should you not agree with data usage terms.
                    </p>

                    <h2 className="mt-6 text-xl font-semibold">Usage Restrictions</h2>
                    <p>
                        Users may not resell, sublicense, reverse-engineer, or exploit RealtorsMatch services. Usage must comply with applicable laws and these terms. Violations may result in suspension or legal action.
                    </p>

                    <h2 className="mt-6 text-xl font-semibold">Lead and Partner Disclosures</h2>
                    <p>
                        RealtorsMatch collaborates with third-party Service/Lead Partners who may offer additional products and services. While we may share your information with these partners and are compensated for doing so, any transaction is solely between you and the third-party provider. We are not responsible for their offerings or terms.
                    </p>

                    <h2 className="mt-6 text-xl font-semibold">Confidential Information</h2>
                    <p>
                        Any confidential information shared during your use of RealtorsMatch is protected. We may disclose such information only to authorized individuals for service delivery, under strict confidentiality agreements, or if required by law.
                    </p>

                    <h2 className="mt-6 text-xl font-semibold">Warranty Disclaimer</h2>
                    <p>
                        {`RealtorsMatch is provided "as-is" without any warranties—express or implied—including merchantability or fitness for a specific purpose. We disclaim liability to the fullest extent permitted by law.
                    `}</p>

                    <h2 className="mt-6 text-xl font-semibold">Warranty Disclaimer</h2>
                    <p>
                   {`     The RealtorsMatch platform is provided “as-is” without warranties of any kind. We disclaim all implied warranties including but not limited to merchantability, fitness for purpose, and non-infringement. Any liability arising from your use of the Services is limited to the fullest extent allowed by applicable law.
                  `}  </p>

                    <h2 className="mt-6 text-xl font-semibold">Indemnification</h2>
                    <p>
                        You agree to defend, indemnify, and hold harmless RealtorsMatch and its affiliates from any claims, damages, liabilities, or expenses arising out of your use of our Services, your breach of these terms, or any violation of law or third-party rights.
                    </p>

                    <p className="mt-8">If you have any questions about these terms, please contact us at <strong>info@RealtorsMatch.com</strong>.</p>
                </div>
            </div>
        </>
    )
}

export default TermsofUseComp