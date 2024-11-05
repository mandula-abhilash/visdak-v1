import React from 'react';

export default function PrivacyPolicy() {
  return (
    <div className="container mx-auto px-4 py-24 max-w-4xl">
      <h1 className="text-3xl font-display font-bold mb-8 text-gray-800">Privacy Policy</h1>
      
      <div className="space-y-6 text-gray-700">
        <section>
          <h2 className="text-2xl font-display font-semibold mb-4 text-gray-800">Information Collection and Use</h2>
          <p>At Visdak, we value your privacy and are committed to protecting your personal information. We collect only essential information needed to provide our services.</p>
        </section>

        <section>
          <h2 className="text-2xl font-display font-semibold mb-4 text-gray-800">Data Security</h2>
          <p>We implement appropriate security measures to protect your information from unauthorized access, alteration, or disclosure.</p>
        </section>

        <section>
          <h2 className="text-2xl font-display font-semibold mb-4 text-gray-800">Contact Information</h2>
          <p>For any privacy-related questions, please contact us at:</p>
          <p className="font-medium">Email: contact@visdak.com</p>
          <p className="font-medium">Location: Nandikandi, Sangareddy, Telangana</p>
        </section>

        <section>
          <h2 className="text-2xl font-display font-semibold mb-4 text-gray-800">Updates to This Policy</h2>
          <p>We may update this privacy policy from time to time. Any changes will be posted on this page.</p>
        </section>
      </div>
    </div>
  );
}