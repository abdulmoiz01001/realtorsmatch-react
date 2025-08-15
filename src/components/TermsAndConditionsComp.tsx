const TermsAndConditionsComp = () => {
  return (
    <>
      <div className="w-full z-10 h-full flex flex-col pt-30 justify-center items-center">
        <div className="bg-black w-[80%] lg:py-10 py-5 flex flex-col justify-start items-start gap-8">
          <h1 className="lg:text-8xl text-4xl text-[rgb(255,70,85)] font-semibold px-10 pt-10">
            Terms & Conditions
          </h1>
        </div>

        <div className="w-[80%] py-10 flex text-black text-justify flex-col justify-start items-start gap-8">
          <p>
            This Lead Fee Agreement ("Agreement") is entered into between <strong>Realtors Match</strong> ("Lead Provider") and the real estate agent identified below ("Agent"). The following terms govern the delivery, acceptance, and payment of exclusive, pre-qualified seller leads.
          </p>

          <h2 className="lg:text-2xl text-xl font-semibold mb-4">1. Purpose of Agreement</h2>
          <p>
            The purpose of this Agreement is to establish a working relationship in which the Agent will receive live, pre-qualified seller leads from the Lead Provider. The Agent agrees to engage leads according to the prescribed process and remit payment upon formal acceptance of each verified lead.
          </p>

          <h2 className="lg:text-2xl text-xl font-semibold mb-4">2. Lead Quality Standards</h2>
          <p>
            All leads provided by Realtors Match shall meet the following minimum standards:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Accurate Contact:</strong> Lead includes correct name and functioning phone number.</li>
            <li><strong>Live Transfer:</strong> A live three-way call introduction is facilitated.</li>
            <li><strong>Exclusive Contact:</strong> Lead is not currently under contract with any other agent.</li>
            <li><strong>Off-Market:</strong> Property is not currently listed for sale.</li>
            <li><strong>Seller Motivation:</strong> Prospect demonstrates genuine interest in selling.</li>
            <li><strong>Timeline to Sell:</strong> Expected sale within six (6) months.</li>
            <li><strong>Ownership Status:</strong> Prospect is the legal and sole owner of the property.</li>
            <li><strong>No Power of Attorney:</strong> Prospect holds full legal authority to transact.</li>
            <li><strong>Exclusive Assignment:</strong> Lead is assigned to only one Agent.</li>
          </ul>

          <h2 className="lg:text-2xl text-xl font-semibold mb-4">3. Live Call & Lead Acceptance</h2>
          <p>
            Leads will be introduced to the Agent via a live three-way call. During the call, the Agent may confirm:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>Full name of the prospect</li>
            <li>Ownership status of the property</li>
            <li>Motivation and reason for selling</li>
            <li>Timeline for selling</li>
            <li>Future buying plans</li>
          </ul>
          <p className="text-red-600">
            The Agent shall not request the prospect's property address, phone number, email address, or any sensitive information until the lead is formally accepted.
          </p>
          <p>
            To accept the lead, the Agent must respond with the word <strong>“Accepted”</strong> via text or email. Upon acceptance:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>Full contact details will be released.</li>
            <li>An invoice  will be generated and becomes immediately payable.</li>
            <li>The lead will be assigned exclusively to the accepting Agent.</li>
          </ul>
          <p>
            If the Agent determines during the call that the lead does not meet the standards defined in Section 2 and no “Accepted” reply is sent, there shall be no obligation to pay.
          </p>

          <h2 className="lg:text-2xl text-xl font-semibold mb-4">4. Payment Terms</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Invoices are issued immediately after lead acceptance.</li>
            <li><strong>Payment is due within one (1) hour</strong> of acceptance.</li>
            <li>Leads cannot be declined or disputed once accepted.</li>
            <li>Any attempt to collect personal lead information prior to acceptance constitutes a violation of this Agreement.</li>
          </ul>

          <h2 className="lg:text-2xl text-xl font-semibold mb-4">5. Non-Payment & Enforcement</h2>
          <p>
            Failure to remit payment within the designated time frame may result in:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>Immediate suspension from receiving further leads</li>
            <li>Possible reporting to real estate boards and platforms</li>
            <li>Referral to third-party collection or legal enforcement services</li>
          </ul>

         </div>
      </div>
    </>
  );
};

export default TermsAndConditionsComp;
