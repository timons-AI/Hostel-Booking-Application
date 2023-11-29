/* 
  This example component represents a call-to-action section.
  It encourages users to start using the booking service.
  The component uses Tailwind CSS for styling.
*/

// Import React for creating functional components
import React from "react";

// Define the CallToAction functional component
export default function CallToAction() {
  return (
    // Container with a white background
    <div className="bg-white">
      {/* Content container with padding */}
      <div className="py-24 px-6 sm:px-6 sm:py-32 lg:px-8">
        {/* Centered content with a maximum width of 2xl */}
        <div className="mx-auto max-w-2xl text-center">
          {/* Main heading with a large font size and bold text */}
          <h2 className="text-4xl font-bold tracking-tight text-gray-900">
            No more Looking Up and Down.
            <br />
            Start using our Booking today.
          </h2>
          {/* Subtitle with margin and a maximum width */}
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-600">
            Why waste time looking for hostels when you can book them online
            with ease.
          </p>
          {/* Button and link container with margin and flex layout */}
          <div className="mt-10 flex items-center justify-center gap-x-6">
            {/* Call-to-action button with rounded styling and hover effects */}
            <a
              href="#"
              className="rounded-md bg-indigo-600 px-3.5 py-1.5 text-base font-semibold leading-7 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Get started
            </a>
            {/* Learn more link with arrow icon */}
            <a
              href="#"
              className="text-base font-semibold leading-7 text-gray-900"
            >
              Learn more <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
