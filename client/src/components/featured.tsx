import useFetch, { Data } from "../hooks/useFetch";

export default function FeaturedSection() {
  const { datas, loading, error } = useFetch(
    "http://localhost:3000/api/hostels"
  );
  if (error) return <div>Error loading data</div>;
  // extract data and success from datas object

  //  get only featured hostels from the data
  const hostels =
    datas && datas.data.filter((hostel: Data) => hostel.featured === true);

  return (
    <div className="bg-white w-full">
      <div className="py-16 sm:py-24 lg:mx-auto lg:max-w-7xl lg:px-8">
        <div className="flex items-center justify-between px-4 sm:px-6 lg:px-0">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Featured Bookings
          </h2>
          <a
            href="/listings"
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
              {hostels ? (
                hostels.map((hostel: Data) => (
                  <li
                    key={hostel._id}
                    className="inline-flex w-64 flex-col text-center lg:w-auto"
                  >
                    <div className="group relative">
                      <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200">
                        <img
                          src={hostel.photos[0]}
                          alt={hostel.name}
                          className="h-full w-full object-cover object-center group-hover:opacity-75"
                        />
                      </div>
                      <div className="mt-6">
                        <p className="text-sm text-gray-500">
                          {hostel.address}
                        </p>

                        <h3 className="mt-1 font-semibold text-gray-900">
                          <a
                            href={`/listings/${hostel._id}`}
                            className="hover:underline"
                          >
                            <span className="absolute inset-0" />
                            {hostel.name}
                          </a>
                        </h3>

                        <p className="mt-1 text-gray-900">
                          {hostel.cheapestPrice}
                        </p>
                      </div>
                    </div>

                    <h4 className="sr-only">Featured Hostels</h4>
                  </li>
                ))
              ) : (
                <div className="flex justify-center items-center w-full h-full">
                  <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
                </div>
              )}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex px-4 sm:hidden">
          <a
            href="/listings"
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
