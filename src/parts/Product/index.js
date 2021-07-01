import React, { useState } from "react";

function index(props) {
  const onTrigger = (event) => {
    props.parentCallback(event.target.value);
    event.preventDefault();
  };

  return (
    <section className="bg-gray-100 py-20 px-4 flex">
      <div className="container mx-auto">
        <div className="flex flex-none start mb-4">
          <h1 className="font-semibold text-2xl capitalize">Product</h1>
        </div>

        {/* ANCHOR: Start Search Field */}
        <div className="relative w-full">
          <input
            type="text"
            className="w-4/12 bg-gray-200 px-4 py-2 rounded-tl-md rounded-bl-md"
            placeholder="Search"
            name="search"
            onChange={onTrigger}
          />
          <button className="bg-pink-400 rounded-tr-md rounded-br-md text-black px-4 py-2">
            Search
          </button>
        </div>
        {/* ANCHOR: Finish Search Field */}

        {/* ANCHOR: Start Product */}
        <div className="grid grid-cols-12 md:gap-3">
          {props.product.map((item) => {
            return (
              <div className="relative w-full col-span-12 md:col-span-4 mt-4">
                <img
                  className="h-40 md:h-60 w-full rounded-lg object-cover"
                  src={`${process.env.REACT_APP_CLOUD}/${item.imageUrl}`}
                  alt=""
                />

                <h2 className="text-black font-semibold text-lg">
                  {item.title}
                </h2>

                <p className="text-black font-bold text-base">${item.price}</p>

                <a href={`/detail-page/${item._id}`} className="streched-link">
                  {/* NOTE Fake Children */}
                </a>
              </div>
            );
          })}
        </div>
        {/* ANCHOR: Finish Product */}
      </div>
    </section>
  );
}

export default index;
