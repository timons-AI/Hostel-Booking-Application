import React from "react";

const AboutPage = () => {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">About Hostel Booking App</h1>

      <p className="mb-4">
        Welcome to the Hostel Booking App, your go-to platform for hassle-free hostel reservations.
      </p>

      <p className="mb-4">
        Our mission is to provide you with a seamless experience in finding and booking hostels
        for your travels. Whether you're a solo adventurer, a group of friends, or a family,
        we've got you covered with a wide range of hostels to choose from.
      </p>

      <h2 className="text-2xl font-bold mb-2">Key Features:</h2>
      <ul className="list-disc pl-8 mb-4">
        <li>Explore a diverse selection of hostels worldwide.</li>
        <li>Effortlessly book your stay with just a few clicks.</li>
        <li>Filter and search for hostels based on your preferences.</li>
        <li>View detailed information, images, and reviews for each hostel.</li>
        <li>Secure and convenient payment options.</li>
      </ul>

      <p className="mb-4">
        Whether you're planning a spontaneous getaway or a well-organized trip,
        our Hostel Booking App is designed to make your accommodation search
        simple, quick, and enjoyable.
      </p>

      <p className="mb-4">
        Thank you for choosing Hostel Booking App. Happy travels!
      </p>
    </div>
  );
};

export default AboutPage;
