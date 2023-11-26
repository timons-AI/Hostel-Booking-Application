import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { PlusIcon } from "@heroicons/react/20/solid";
import FilterSection from "./components/filter-search";
import useFetch, { Data } from "../../hooks/useFetch";

const listings = [
  {
    id: 1,
    name: "Basic Tee 8-Pack",
    href: "#",
    price: "$256",
    description:
      "Get the full lineup of our Basic Tees. Have a fresh shirt all week, and an extra for laundry day.",
    options: "8 colors",
    imageSrc:
      "https://plus.unsplash.com/premium_photo-1680098057495-efa1413023f7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGhvc3RlbHxlbnwwfHwwfHx8MA%3D%3D",
    imageAlt:
      "Eight shirts arranged on table in black, olive, grey, blue, white, red, mustard, and green.",
  },
  {
    id: 2,
    name: "Basic Tee",
    href: "#",
    price: "$32",
    description:
      "Look like a visionary CEO and wear the same black t-shirt every day.",
    options: "Black",
    imageSrc:
      "https://images.unsplash.com/photo-1561124928-eda0f74e3847?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGhvc3RlbHxlbnwwfHwwfHx8MA%3D%3D",
    imageAlt: "Front of plain black t-shirt.",
  },
];

const breadcrumbs = [
  { id: 1, name: "Home", href: "/" },
  { id: 2, name: "All Listings", href: "/listings" },
];

export default function ListingPage() {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const { datas, loading, error } = useFetch(
    "http://localhost:3000/api/hostels"
  );

  const listings = datas && (datas.data as Data[]);

  return (
    <div className="bg-white">
      <div>
        {/* Mobile filter dialog */}
        <Transition.Root show={mobileFiltersOpen} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-40 lg:hidden"
            onClose={setMobileFiltersOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 z-40 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-6 shadow-xl">
                  <div className="flex items-center justify-between px-4 ">
                    <h2 className="text-lg font-medium text-gray-900">
                      Filters
                    </h2>
                    <button
                      type="button"
                      className="-mr-2 flex h-10 w-10 items-center justify-center p-2 text-gray-400 hover:text-gray-500"
                      onClick={() => setMobileFiltersOpen(false)}
                    >
                      <span className="sr-only">Close menu</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                  {/* Filters */}
                  <FilterSection />
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>

        <main className="mx-auto max-w-2xl px-4 lg:max-w-7xl lg:px-8">
          <nav aria-label="Breadcrumb ">
            <ol
              role="list"
              className="mx-auto  flex max-w-2xl  pt-4 items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8"
            >
              {breadcrumbs.map((breadcrumb) => (
                <li key={breadcrumb.id}>
                  <div className="flex items-center">
                    <a
                      href={breadcrumb.href}
                      className="mr-2 text-sm font-medium text-gray-900"
                    >
                      {breadcrumb.name}
                    </a>
                    <svg
                      width={16}
                      height={20}
                      viewBox="0 0 16 20"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      className="h-5 w-4 text-gray-300"
                    >
                      <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                    </svg>
                  </div>
                </li>
              ))}
            </ol>
          </nav>
          <div className="border-b border-gray-200 pt-24 pb-10">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900">
              View All available listings
            </h1>
            <p className="mt-4 text-base text-gray-500">
              Below are all the listings available on the platform. You can
              search and filter through them.
            </p>
          </div>

          <div className="pt-12 pb-24 lg:grid lg:grid-cols-3 lg:gap-x-8 xl:grid-cols-4 ">
            <aside>
              <h2 className="sr-only">Filters</h2>

              <button
                type="button"
                className="inline-flex items-center lg:hidden"
                onClick={() => setMobileFiltersOpen(true)}
              >
                <span className="text-sm font-medium text-gray-700">
                  Filters
                </span>
                <PlusIcon
                  className="ml-1 h-5 w-5 flex-shrink-0 text-gray-400"
                  aria-hidden="true"
                />
              </button>

              <div className="hidden lg:block ">
                <FilterSection />
              </div>
            </aside>

            <section
              aria-labelledby="product-heading"
              className="mt-6 lg:col-span-2 lg:mt-0 xl:col-span-3"
            >
              <h2 id="product-heading" className="sr-only">
                listings
              </h2>

              <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:gap-x-8 ">
                {listings ? (
                  listings.map((listing) => (
                    <div
                      key={listing._id}
                      className=" rounded-md flex overflow-hidden  border h-48 w-full"
                    >
                      <div className="flex flex-col w-52 border-r ">
                        <img
                          src={listing.photos[0]}
                          alt={listing.name}
                          className=" h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="flex w-full">
                        <div className="flex w-full  flex-col  h-full p-3">
                          <p className="text-lg font-semibold">
                            {listing.name}
                          </p>
                          <p className="text-sm text-gray-500 overflow-hidden ">
                            {listing.description}
                          </p>
                        </div>
                        <div className=" flex flex-col border-l justify-between">
                          <div className="flex p-2 border-b gap-2">
                            <p className="text-sm font-semibold">Excellent</p>
                            <p className="text-xs text-gray-500 rounded-full p-1 border w-fit">
                              {listing.rating || <span>None </span>}
                            </p>
                          </div>
                          <div className="flex flex-col px-2 ">
                            <p className="text-md font-semibold">Shs 300,000</p>
                            <p className="text-xs text-gray-500">
                              includes taxes and fees
                            </p>
                          </div>
                          <a href={`/listings/${listing._id}`}>
                            <button className="bg-sky-800 text-white bottom rounded-sm m-2 text-xs p-2">
                              See avaibility
                            </button>
                          </a>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="flex justify-center items-center w-full h-full">
                    <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
                  </div>
                )}
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}
