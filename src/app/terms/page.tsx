import React from 'react';

export default function TermsOfService() {
  return (
    <div className="container mx-auto px-4 py-24 max-w-4xl">
      <h1 className="text-3xl font-display font-bold mb-8 text-gray-800">Terms of Service</h1>
      
      <div className="space-y-6 text-gray-700">
        <section>
          <h2 className="text-2xl font-display font-semibold mb-4 text-gray-800">Services</h2>
          <p>Visdak provides web and app development services to help local businesses establish their digital presence.</p>
        </section>

        <section>
          <h2 className="text-2xl font-display font-semibold mb-4 text-gray-800">Project Terms</h2>
          <p>All projects are governed by individual agreements that specify deliverables, timelines, and payment terms.</p>
        </section>

        <section>
          <h2 className="text-2xl font-display font-semibold mb-4 text-gray-800">Intellectual Property</h2>
          <p>Upon full payment, clients receive ownership rights to the delivered website or application.</p>
        </section>

        <section>
          <h2 className="text-2xl font-display font-semibold mb-4 text-gray-800">Contact</h2>
          <p>For any questions about these terms, please contact us at:</p>
          <p className="font-medium">Email: contact@visdak.com</p>
          <p className="font-medium">Location: Nandikandi, Sangareddy, Telangana</p>
        </section>
      </div>
    </div>
  );
}