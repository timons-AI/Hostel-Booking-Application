import React, { useState } from "react";
export default function FilterSection() {
  const [filters, setFilters] = useState({
    category: "all",
    condition: "all",
    price: "all",
    location: "all",
  });
  return (
    <div className=" w-full border rounded-md flex flex-col p-3">
      <p className=" text-3xl font-bold">Search and Filter</p>
      <div className="flex flex-col mt-2">
        <label className="text-lg font-semibold">Search</label>
        <input
          type="text"
          className="border rounded-md p-2"
          placeholder="Search for a listing"
        />
        <button className="bg-blue-500 text-white rounded-md p-2 mt-2">
          Search
        </button>
      </div>

      {/* Filter part  */}

      <div className="flex flex-col mt-2">
        <label className="text-lg font-semibold">Filter</label>
        <div className="flex flex-col mt-2">
          <label className="text-lg font-semibold">Category</label>
          <select className="border rounded-md p-2">
            <option value="all">All</option>
            <option value="cars">Cars</option>
            <option value="electronics">Electronics</option>
            <option value="furniture">Furniture</option>
            <option value="clothing">Clothing</option>
          </select>
        </div>
        <div className="flex flex-col mt-2">
          <label className="text-lg font-semibold">Condition</label>
          <select className="border rounded-md p-2" defaultValue="all">
            <option value="all">All</option>
            <option value="new">New</option>
            <option value="used">Used</option>
          </select>
        </div>
        <div className="flex flex-col mt-2">
          <label className="text-lg font-semibold">Price</label>
          <select className="border rounded-md p-2">
            <option value="all">All</option>
            <option value="0-100">0-100</option>
            <option value="100-500">100-500</option>
            <option value="500-1000">500-1000</option>
            <option value="1000+">1000+</option>
          </select>
        </div>
        <div className="flex flex-col mt-2">
          <label className="text-lg font-semibold">Location</label>
          <select className="border rounded-md p-2">
            <option value="all">All</option>
            <option value="new">New</option>
            <option value="used">Used</option>
          </select>
        </div>
        <button className="bg-blue-500 text-white rounded-md p-2 mt-2">
          Filter
        </button>
      </div>
    </div>
  );
}
