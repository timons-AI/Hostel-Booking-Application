/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/

const hostels = [
  {
    id: 1,
    name: "Kampala Serena Hostel",
    location: "Bundibujo, Kampala",
    price: "$35 / per night",
    href: "#",
    imageSrc:
      "https://images.unsplash.com/photo-1551641506-ee5bf4cb45f1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D",
    imageAlt: " amazing hostel name.",
  },
  {
    id: 2,
    name: "Kampala Serena Hostel",
    location: "Bundibujo, Kampala",
    price: "$35 / per night",
    href: "#",
    imageSrc:
      "https://images.unsplash.com/photo-1573455494060-c5595004fb6c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fHw%3D",
    imageAlt: " amazing hostel name.",
  },
  {
    id: 3,
    name: "Kampala Serena Hostel",
    location: "Bundibujo, Kampala",
    price: "$35 / per night",
    href: "#",
    imageSrc:
      "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGNpdHl8ZW58MHx8MHx8fDA%3D",
    imageAlt: " amazing hostel name.",
  },
  {
    id: 4,
    name: "Kampala Serena Hostel",
    location: "Bundibujo, Kampala",
    price: "$35 / per night",
    href: "#",
    imageSrc:
      "https://images.unsplash.com/photo-1551641506-ee5bf4cb45f1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D",
    imageAlt: " amazing hostel name.",
  },
  // More products...
];

export default function FeaturedSection() {
  return (
    <div className="bg-white w-full">
      <div className="py-16 sm:py-24 lg:mx-auto lg:max-w-7xl lg:px-8">
        <div className="flex items-center justify-between px-4 sm:px-6 lg:px-0">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Featured Bookings
          </h2>
          <a
            href="#"
            className="hidden text-sm font-semibold text-indigo-600 hover:text-indigo-500 sm:block"
          >
            See everything
            <span aria-hidden="true"> &rarr;</span>
          </a>
        </div>

        <div className="relative mt-8">
          <div className="relative -mb-6 w-full overflow-x-auto pb-6">
            <ul
              role="list"
              className="mx-4 inline-flex space-x-8 sm:mx-6 lg:mx-0 lg:grid lg:grid-cols-4 lg:gap-x-8 lg:space-x-0"
            >
              {hostels.map((hostel) => (
                <li
                  key={hostel.id}
                  className="inline-flex w-64 flex-col text-center lg:w-auto"
                >
                  <div className="group relative">
                    <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200">
                      <img
                        src={hostel.imageSrc}
                        alt={hostel.imageAlt}
                        className="h-full w-full object-cover object-center group-hover:opacity-75"
                      />
                    </div>
                    <div className="mt-6">
                      <p className="text-sm text-gray-500">{hostel.location}</p>
                      <h3 className="mt-1 font-semibold text-gray-900">
                        <a href={hostel.href}>
                          <span className="absolute inset-0" />
                          {hostel.name}
                        </a>
                      </h3>
                      <p className="mt-1 text-gray-900">{hostel.price}</p>
                    </div>
                  </div>

                  <h4 className="sr-only">Featured Hostels</h4>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex px-4 sm:hidden">
          <a
            href="#"
            className="text-sm font-semibold text-indigo-600 hover:text-indigo-500"
          >
            See everything
            <span aria-hidden="true"> &rarr;</span>
          </a>
        </div>
      </div>
    </div>
  );
}
