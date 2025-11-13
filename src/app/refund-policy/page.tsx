export default function RefundPolicy() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container-custom py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-8">Refund Policy</h1>
          <p className="text-gray-600 mb-8">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

          <div className="prose prose-lg max-w-none space-y-8 text-gray-700">
            <section>
              <h2 className="text-2xl font-bold text-black mb-4">1. Overview</h2>
              <p>
                At Aisha Abdullahi Adamu, we strive to ensure your complete satisfaction with our services and products. 
                This Refund Policy outlines the terms and conditions under which refunds may be issued.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-black mb-4">2. Refund Eligibility</h2>
              <p className="mb-4">
                Refunds may be considered under the following circumstances:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Service cancellation within the specified cancellation period</li>
                <li>Failure to deliver services as described</li>
                <li>Technical issues preventing service delivery</li>
                <li>Duplicate charges or billing errors</li>
                <li>Other circumstances as determined on a case-by-case basis</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-black mb-4">3. Refund Request Process</h2>
              <p className="mb-4">To request a refund, please follow these steps:</p>
              <ol className="list-decimal pl-6 space-y-2">
                <li>Contact us via email at hello@aishaabdullahiadamu.com</li>
                <li>Provide your order number or transaction details</li>
                <li>Explain the reason for your refund request</li>
                <li>Include any relevant documentation or evidence</li>
              </ol>
              <p className="mt-4">
                We will review your request and respond within 5-7 business days. Please note that all refund requests are subject to review 
                and approval based on the specific circumstances of each case.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-black mb-4">4. Refund Timeframe</h2>
              <p className="mb-4">
                Once a refund is approved, the processing time may vary depending on the payment method used:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Credit/Debit Cards:</strong> 5-10 business days</li>
                <li><strong>Bank Transfers:</strong> 7-14 business days</li>
                <li><strong>Digital Wallets:</strong> 3-5 business days</li>
              </ul>
              <p className="mt-4">
                Please note that the actual time it takes for the refund to appear in your account may vary depending on your financial institution.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-black mb-4">5. Non-Refundable Items</h2>
              <p className="mb-4">The following items or services are generally non-refundable:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Services that have been fully completed and delivered</li>
                <li>Digital products that have been downloaded or accessed</li>
                <li>Customized or personalized services</li>
                <li>Services cancelled after the cancellation period has expired</li>
                <li>Any fees or charges explicitly stated as non-refundable at the time of purchase</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-black mb-4">6. Partial Refunds</h2>
              <p>
                In some cases, we may offer partial refunds based on the extent of services rendered or products delivered. 
                Partial refunds will be calculated based on the proportion of services not yet completed or products not yet delivered.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-black mb-4">7. Cancellation Policy</h2>
              <p className="mb-4">
                For cancellations, the following terms apply:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Cancellations made within 24 hours of purchase may be eligible for a full refund</li>
                <li>Cancellations made after 24 hours but before service commencement may be eligible for a partial refund</li>
                <li>Cancellations made after service commencement are subject to review and may not be eligible for refund</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-black mb-4">8. Chargebacks</h2>
              <p>
                If you initiate a chargeback through your bank or credit card company, we reserve the right to dispute the chargeback 
                and provide evidence of service delivery or product fulfillment. We encourage you to contact us directly first to resolve 
                any issues before initiating a chargeback.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-black mb-4">9. Dispute Resolution</h2>
              <p>
                If you are not satisfied with our refund decision, you may contact us to discuss your concerns. We are committed to 
                working with you to find a fair resolution. If we cannot resolve the dispute, you may have the right to seek resolution 
                through applicable consumer protection agencies or legal channels.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-black mb-4">10. Changes to This Policy</h2>
              <p>
                We reserve the right to modify this Refund Policy at any time. Any changes will be posted on this page with an updated 
                "Last updated" date. Your continued use of our services after any changes constitutes acceptance of the updated policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-black mb-4">11. Contact Information</h2>
              <p>
                For questions about this Refund Policy or to request a refund, please contact us at:
              </p>
              <p className="mt-2">
                Email: hello@aishaabdullahiadamu.com<br />
                Address: T007, Plot1248 Orji Uzor Kalu Close, Mabushi, FCT Abuja, Nigeria
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}




