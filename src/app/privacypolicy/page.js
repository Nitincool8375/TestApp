import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Privacy Policy</h1>
        <p className="text-gray-600 mb-4">
          We value your privacy and are committed to protecting your personal data. This Privacy Policy explains how we collect, use, and safeguard your information when you use our website.
        </p>
        <h2 className="text-2xl font-semibold text-gray-700 mt-6 mb-2">Information We Collect</h2>
        <p className="text-gray-600">
          - Personal Information: Name, email, phone number, etc.  
          - Usage Data: Pages visited, time spent, and other analytics data.
        </p>
        <h2 className="text-2xl font-semibold text-gray-700 mt-6 mb-2">How We Use Your Information</h2>
        <p className="text-gray-600">
          We use your information to provide services, improve our website, and communicate with you.
        </p>
        <h2 className="text-2xl font-semibold text-gray-700 mt-6 mb-2">Contact Us</h2>
        <p className="text-gray-600">
          If you have any questions, please contact us at <a href="mailto:support@example.com" className="text-blue-500 underline">support@example.com</a>.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
