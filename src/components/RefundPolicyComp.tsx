

const RefundPolicyComp = () => {
  return (
    <>
    <div className='w-full h-full flex flex-col pt-30 justify-center items-center ' >
        <div className='bg-black w-[80%] lg:py-10 py-5 flex flex-col justify-start items-start gap-8' >
           <h1 className='lg:text-8xl text-4xl text-[rgb(255,70,85)] font-semibold px-10 pt-10' >Refund Policy</h1>
        </div>
          <div className=' w-[80%] py-10 flex text-black text-justify flex-col justify-start items-start gap-8' >
             <p className="mb-6">
        This Refund Policy governs the terms and conditions related to the <strong>sign-up fee</strong> associated with the <strong>Referral Agreement</strong> entered into with <strong>Realtors Match</strong>. This Policy is effective for a period of <strong>60 days</strong> from the date the Referral Agreement is executed.
      </p>

      <h2 className="lg:text-2xl text-xl font-semibold mb-4">1. Refund Eligibility</h2>
      <p className="mb-2">Refunds for the sign-up fee are applicable solely under the following conditions:</p>
      <ul className="list-disc list-inside space-y-2 mb-6">
        <li>
          <strong>Failure to Provide Leads:</strong> If <strong>Realtors Match</strong> fails to deliver any leads to the agent/broker as per the Referral Agreement.
        </li>
        <li>
          <strong>Non-Exclusive Leads:</strong> If the lead lacks primary exclusivity and is shared with other agents/brokers.
        </li>
        <li>
          <strong>Unengaged Lead:</strong> If the lead is unwilling to engage in business within <strong>9 months</strong> of assignment.
        </li>
        <li>
          <strong>Pre-existing Relationship:</strong> If the lead is already under contract with the agent/broker at the time of assignment.
        </li>
        <li>
          <strong>Non-Responsive Leads:</strong> If a lead remains unresponsive for <strong>10 consecutive working days</strong>.
        </li>
        <li>
          <strong>Leads Outside Preferred Area (No Refund):</strong> {`Leads received outside of the agent/broker's preferred location are not eligible for refund or replacement.`}
        </li>
      </ul>

      <h2 className="lg:text-2xl text-xl font-semibold mb-4">2. Refund Procedure</h2>
      <ul className="list-disc list-inside space-y-2 mb-6">
        <li>
          <strong>For Failure to Provide Leads:</strong> Agents must send a <em>written reminder</em>. If no leads are delivered within <strong>1 month</strong>, they may request a refund.
        </li>
        <li>
          <strong>For Other Cases:</strong> Agents must notify <strong>Realtors Match</strong> with <em>supporting evidence</em>. If a replacement isn’t provided within <strong>1 month</strong>, they may request a refund.
        </li>
      </ul>

      <h2 className="lg:text-2xl text-xl font-semibold mb-4">3. Timely Reporting Requirement</h2>
      <p className="mb-6">
        To remain eligible, agents must report concerns or send reminders <strong>within 48 hours</strong> of accepting the referral. Failure to do so deems the lead satisfactory, voiding refund/replacement eligibility.
      </p>

      <h2 className="lg:text-2xl text-xl font-semibold mb-4">4. Policy Acknowledgement</h2>
      <p className="mb-6">
        This Policy becomes effective on the execution date of the Referral Agreement and overrides prior versions. By accepting the agreement, you consent to these terms.
      </p>

      <h2 className="lg:text-2xl text-xl font-semibold mb-4">Contact</h2>
      <p className="mb-6">
        For inquiries or refund requests, please contact our customer support team at{' '}
        <a href="mailto:info@RealtorsMatch.com" className="text-blue-600 underline">
          info@RealtorsMatch.com
        </a>
        .
      </p>

    
    </div>
          </div>
    
    </>
  )
}

export default RefundPolicyComp