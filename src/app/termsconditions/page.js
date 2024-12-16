import React from 'react';

const TermsConditions = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Terms & Conditions</h1>
        <p className="text-gray-600 mb-4">
          These Terms & Conditions govern your use of our website and services. By accessing or using our services, you agree to these terms.
        </p>
        <h2 className="text-2xl font-semibold text-gray-700 mt-6 mb-2">Acceptance of Terms</h2>
        <p className="text-gray-600">
          By using our services, you agree to comply with these terms and all applicable laws and regulations.
        </p>
        <h2 className="text-2xl font-semibold text-gray-700 mt-6 mb-2">User Responsibilities</h2>
        <p className="text-gray-600">
          You agree not to use our services for any unlawful or prohibited activities.
        </p>
        <h2 className="text-2xl font-semibold text-gray-700 mt-6 mb-2">Modifications</h2>
        <p className="text-gray-600">
          We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting.
        </p>
        <h2 className="text-2xl font-semibold text-gray-700 mt-6 mb-2">Contact Us</h2>
        <p className="text-gray-600">
          If you have any questions, please contact us at <a href="mailto:support@example.com" className="text-blue-500 underline">support@example.com</a>.
        </p>
      </div>
    </div>
  );
};

export default TermsConditions;
