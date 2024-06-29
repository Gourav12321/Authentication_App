import React from 'react';

function About() {
  return (
    <div className="w-full h-full bg-[#1E40A8] ">
      
    <div className="container p-[3rem] md:p-[7rem]  pt-[7rem] bg-[#1E40A8] text-white flex flex-col">
    <div className='w-[23rem] h-[23rem] rounded-full bg-[#2d60fa] flex fixed left-[-10rem] top-[-10rem] '></div>
    <div className='w-[23rem] h-[23rem] rounded-full bg-[#2d60fa] flex fixed right-[-10rem] bottom-[-15rem] '></div>
    <div className='w-full h-full z-10'>
      <h1 className="text-4xl font-bold text-center mb-6">About Our Auth App</h1>
      <p className="text-lg mb-6">
        In a world where digital security is paramount, our Auth App emerged as a beacon of reliability and innovation. Our mission is to provide top-tier authentication solutions that safeguard your digital presence while offering a user-friendly experience.
      </p>
      <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
      <p className="text-lg mb-6">
        Founded by a group of cybersecurity enthusiasts, our company was born out of a desire to tackle the growing challenges of online security. With years of experience in the field, our team understood the complexities and threats that users face daily.
      </p>
      <p className="text-lg mb-6">
        We started with a simple goal: to create an authentication app that combines robust security features with an intuitive user experience. Over the years, we have grown and evolved, continually improving our app to meet the ever-changing needs of our users.
      </p>
      <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
      <p className="text-lg mb-6">
        Our mission is to empower individuals and businesses to protect their digital identities effortlessly. We believe that security should not come at the cost of convenience, and our app is designed to provide both.
      </p>
      <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
      <ul className="list-disc list-inside mb-6">
        <li className="text-lg">Security: Our top priority is to protect your data with the highest standards of security.</li>
        <li className="text-lg">Innovation: We are constantly innovating to bring you the best features and the latest in security technology.</li>
        <li className="text-lg">User Experience: We strive to create an app that is not only secure but also easy and enjoyable to use.</li>
        <li className="text-lg">Customer Support: We are committed to providing exceptional customer support to assist you whenever you need it.</li>
      </ul>
      <h2 className="text-2xl font-semibold mb-4">Meet Our Team</h2>
      <p className="text-lg mb-6">
        Our team is composed of passionate cybersecurity experts, software developers, and customer support specialists. Each member of our team is dedicated to ensuring that you have the best possible experience with our Auth App.
      </p>
      <p className="text-lg mb-6">
        We work tirelessly to stay ahead of the curve, implementing the latest security measures and continually enhancing our app’s features. Our collaborative approach ensures that we are always improving and delivering the best to our users.
      </p>
      <h2 className="text-2xl font-semibold mb-4">Join Us</h2>
      <p className="text-lg mb-6">
        We invite you to join us on our journey to make the digital world a safer place. Whether you are a user looking for top-notch security or a developer interested in contributing to our mission, we welcome you to be a part of our community.
      </p>
      <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
      <p className="text-lg">
        We love hearing from our users and are always here to help. If you have any questions, feedback, or need assistance, please reach out to us. Together, we can build a safer digital future.
      </p>
      </div>
    </div>
   
    </div>
  );
}

export default About;
