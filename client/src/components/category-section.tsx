// Import necessary React components and hooks
import React from "react";

// Define the CategorySection functional component
const CategorySection = () => {
  return (
    // Section for viewing hostels by category
    <section aria-labelledby="category-heading" className="bg-gray-50 w-full">
      {/* Container for content */}
      <div className="mx-auto max-w-7xl py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        {/* Header with category title and "Browse all categories" link */}
        <div className="sm:flex sm:items-baseline sm:justify-between">
          <h2
            id="category-heading"
            className="text-2xl font-bold tracking-tight text-gray-900"
          >
            View by Category
          </h2>
          <a
            href="#"
            className="hidden text-sm font-semibold text-indigo-600 hover:text-indigo-500 sm:block"
          >
            Browse all categories
            <span aria-hidden="true"> &rarr;</span>
          </a>
        </div>

        {/* Grid layout for category cards */}
        <div className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:grid-rows-2 sm:gap-x-6 lg:gap-8">
          {/* Category card for "New Hostels" */}
          <div className="group aspect-w-2 aspect-h-1 overflow-hidden rounded-lg sm:aspect-h-1 sm:aspect-w-1 sm:row-span-2">
            <img
              src="https://images.unsplash.com/photo-1596276020587-8044fe049813?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aG9zdGVsfGVufDB8fDB8fHww"
              alt="Two models wearing women's black cotton crewneck tee and off-white cotton crewneck tee."
              className="object-cover object-center group-hover:opacity-75"
            />
            <div
              aria-hidden="true"
              className="bg-gradient-to-b from-transparent to-black opacity-50"
            />
            <div className="flex items-end p-6">
              <div>
                <h3 className="font-semibold text-white">
                  <a href="#">
                    <span className="absolute inset-0" />
                    New Hostels
                  </a>
                </h3>
                <p aria-hidden="true" className="mt-1 text-sm text-white">
                  What are the new hostels in the city?
                </p>
              </div>
            </div>
          </div>

          {/* Category card for "Amenities & Services" */}
          <div className="group aspect-w-2 aspect-h-1 overflow-hidden rounded-lg sm:aspect-none sm:relative sm:h-full">
            <img
              src="https://images.unsplash.com/photo-1462826303086-329426d1aef5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGJlZCUyMHJvb20lMjBzaGFyZWR8ZW58MHx8MHx8fDA%3D"
              alt="Wooden shelf with gray and olive drab green baseball caps, next to wooden clothes hanger with sweaters."
              className="object-cover object-center group-hover:opacity-75 sm:absolute sm:inset-0 sm:h-full sm:w-full"
            />
            <div
              aria-hidden="true"
              className="bg-gradient-to-b from-transparent to-black opacity-50 sm:absolute sm:inset-0"
            />
            <div className="flex items-end p-6 sm:absolute sm:inset-0">
              <div>
                <h3 className="font-semibold text-white">
                  <a href="#">
                    <span className="absolute inset-0" />
                    Amenities & Services
                  </a>
                </h3>
                <p aria-hidden="true" className="mt-1 text-sm text-white">
                  Check which hostels have the best wifi, breakfast, and more...
                </p>
              </div>
            </div>
          </div>

          {/* Category card for "Space" */}
          <div className="group aspect-w-2 aspect-h-1 overflow-hidden rounded-lg sm:aspect-none sm:relative sm:h-full">
            <img
              src="https://images.unsplash.com/photo-1562184552-b7a1069700fa?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cm9vbSUyMHNwYWNlfGVufDB8fDB8fHww"
              alt="Walnut desk organizer set with white modular trays, next to porcelain mug on wooden desk."
              className="object-cover object-center group-hover:opacity-75 sm:absolute sm:inset-0 sm:h-full sm:w-full"
            />
            <div
              aria-hidden="true"
              className="bg-gradient-to-b from-transparent to-black opacity-50 sm:absolute sm:inset-0"
            />
            <div className="flex items-end p-6 sm:absolute sm:inset-0">
              <div>
                <h3 className="font-semibold text-white">
                  <a href="#">
                    <span className="absolute inset-0" />
                    Space
                  </a>
                </h3>
                <p aria-hidden="true" className="mt-1 text-sm text-white">
                  How many people can stay in a room?
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* "Browse all categories" link for small screens */}
        <div className="mt-6 sm:hidden">
          <a
            href="#"
            className="block text-sm font-semibold text-indigo-600 hover:text-indigo-500"
          >
            Browse all categories
            <span aria-hidden="true"> &rarr;</span>
          </a>
        </div>
      </div>
    </section>
  );
};

// Export the CategorySection component
export default CategorySection;
