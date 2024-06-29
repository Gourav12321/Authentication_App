import React from 'react';

function Home() {
  return (
    <div className="w-full h-full bg-[#1E40A8] ">
    <div className="container w-full pt-[10rem] p-[3rem] md:pt-[7rem] md:p-[7rem] bg-[#1E40A8]  text-white flex flex-col">
    <div className='w-[23rem] h-[23rem] rounded-full bg-[#2d60fa] flex fixed left-[-10rem] top-[-10rem] '></div>
    <div className='w-[23rem] h-[23rem] rounded-full bg-[#2d60fa] flex fixed right-[-10rem] bottom-[-15rem] '></div>
      <div className='w-full h-full z-10'>
      <h1 className="text-4xl font-bold text-center mb-6">Welcome to Our Auth App</h1>
      <p className="text-lg mb-6">
        Welcome to our innovative Auth App, the premier solution for secure and efficient authentication. In today’s digital age, safeguarding your online identity and sensitive information has never been more crucial. Our Auth App is designed to provide you with top-notch security features, ensuring your data remains protected while offering a seamless user experience.
      </p>
      <h2 className="text-2xl font-semibold mb-4">Why Choose Us?</h2>
      <p className="text-lg mb-6">
        At the heart of our service lies a commitment to security, user-friendliness, and reliability. Here’s why our Auth App stands out:
      </p>
      <ul className="list-disc list-inside mb-6">
        <li className="text-lg">Enhanced Security: We use state-of-the-art encryption methods to protect your data. Our multi-factor authentication ensures that only authorized users can access your information.</li>
        <li className="text-lg">User-Friendly Interface: Our app is designed with the user in mind. The intuitive interface makes it easy for anyone to navigate and use the app efficiently.</li>
        <li className="text-lg">Fast and Reliable: We understand the importance of time in your busy schedule. Our app is optimized for speed and reliability, ensuring that your authentication process is quick and hassle-free.</li>
        <li className="text-lg">24/7 Support: Our dedicated support team is available around the clock to assist you with any issues or questions you may have. We are here to ensure your experience with our app is smooth and satisfactory.</li>
      </ul>
      <h2 className="text-2xl font-semibold mb-4">Features</h2>
      <p className="text-lg mb-6">
        Explore the powerful features of our Auth App:
      </p>
      <ul className="list-disc list-inside mb-6">
        <li className="text-lg">Multi-Factor Authentication (MFA): Add an extra layer of security by requiring multiple forms of verification.</li>
        <li className="text-lg">Biometric Authentication: Use fingerprint or facial recognition for quick and secure access.</li>
        <li className="text-lg">Secure Password Management: Store and manage your passwords securely within the app.</li>
        <li className="text-lg">Activity Monitoring: Keep track of your login activities and receive alerts for any suspicious activity.</li>
        <li className="text-lg">Customizable Settings: Tailor the app’s settings to fit your specific needs and preferences.</li>
      </ul>
      <h2 className="text-2xl font-semibold mb-4">Getting Started</h2>
      <p className="text-lg mb-6">
        Getting started with our Auth App is easy. Follow these simple steps:
      </p>
      <ol className="list-decimal list-inside mb-6">
        <li className="text-lg">Sign Up: Create an account by providing your basic information.</li>
        <li className="text-lg">Verify Your Identity: Complete the verification process to secure your account.</li>
        <li className="text-lg">Set Up MFA: Enhance your account’s security by setting up multi-factor authentication.</li>
        <li className="text-lg">Start Using the App: Begin exploring the app’s features and secure your digital life.</li>
      </ol>
      <h2 className="text-2xl font-semibold mb-4">Join Our Community</h2>
      <p className="text-lg mb-6">
        Become a part of our growing community of users who trust our Auth App for their authentication needs. Stay updated with the latest features and improvements by following us on social media and subscribing to our newsletter.
      </p>
      <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
      <p className="text-lg">
        We value your feedback and are here to assist you. If you have any questions, suggestions, or need support, please do not hesitate to contact us. Your satisfaction is our priority.
      </p>
      </div>
    </div>
    </div>
  );
}

export default Home;
