import React from "react";

function BrowseRoom(props) {
  const itemData = props.collection;

  return (
    <>
      {itemData.map((item, index) => {
        return (
          <section
            className="bg-gray-100 py-20 px-4 flex"
            ref={props.refBrowse}
          >
            <div className="container mx-auto">
              <div className="flex flex-none start mb-4">
                <h1 className="font-semibold text-2xl capitalize">
                  {item.name}
                </h1>
              </div>
              <div className="grid grid-cols-9 grid-rows-2 gap-4">
                {item.itemId.map((item, index) => {
                  return (
                    <>
                      {/* ANCHOR Start Collection 1 */}
                      {index === 0 && (
                        <div
                          className="relative col-span-9 row-span-1 md:col-span-4 card "
                          style={{ height: 180 }}
                        >
                          <div className="card-shadow rounded-xl">
                            <img
                              src={`${process.env.REACT_APP_HOST}/${item.imageUrl}`}
                              alt="alt-catalog"
                              className="h-full w-full object-cover overflow-hidden overlay rounded-xl"
                            />
                            <div className="absolute bg-gradient-to-l from-black h-full w-full rounded-xl opacity-70" />
                          </div>
                          <div className="overlay left-0 top-0 bottom-0 flex justify-center flex-col pl-48 md:pl-72 text-white">
                            <h5 className="text-lg font-semibold">
                              {item.title}
                            </h5>
                            <span className="">${item.price}</span>
                          </div>
                          <a href="/detail-page" className="streched-link">
                            {/* NOTE Fake Children */}
                          </a>
                        </div>
                      )}
                      {/* ANCHOR End Collection 1 */}

                      {/* ANCHOR Start Collection 2 */}
                      {index === 1 && (
                        <div className="relative col-span-9 row-span-1 md:col-span-2 md:row-span-2 card ">
                          <div className="card-shadow rounded-xl">
                            <img
                              src={`${process.env.REACT_APP_HOST}/${item.imageUrl}`}
                              alt="alt-catalog"
                              className="h-full w-full object-cover overflow-hidden overlay rounded-xl"
                            />
                            <div className="absolute bg-gradient-to-b from-black h-full w-full rounded-xl opacity-70" />
                          </div>
                          <div className="overlay inset-0 md:bottom-auto flex justify-center flex-col pl-48 md:pl-0 pt-0 md:pt-12 md:items-center text-white">
                            <h5 className="text-lg font-semibold">
                              {item.title}
                            </h5>
                            <span className="">${item.price}</span>
                          </div>
                          <a href="/detail-page" className="streched-link">
                            {/* NOTE Fake Children */}
                          </a>
                        </div>
                      )}
                      {/* ANCHOR End Collection 2 */}

                      {/* ANCHOR Start Collection 3 */}
                      {index === 2 && (
                        <div className="relative col-span-9 row-span-1 md:col-span-3 md:row-span-2 card ">
                          <div className="card-shadow rounded-xl">
                            <img
                              src={`${process.env.REACT_APP_HOST}/${item.imageUrl}`}
                              alt="alt-catalog"
                              className="h-full w-full object-cover overflow-hidden overlay rounded-xl"
                            />
                            <div className="absolute bg-gradient-to-b from-black h-full w-full rounded-xl opacity-70" />
                          </div>
                          <div className="overlay inset-0 md:bottom-auto flex justify-center flex-col pl-48 md:pl-0 pt-0 md:pt-12 md:items-center text-white">
                            <h5 className="text-lg font-semibold">
                              {item.title}
                            </h5>
                            <span className="">${item.price}</span>
                          </div>
                          <a href="/detail-page" className="streched-link">
                            {/* NOTE Fake Children */}
                          </a>
                        </div>
                      )}
                      {/* ANCHOR End Collection 3 */}

                      {/* ANCHOR Start Collection 4 */}
                      {index === 3 && (
                        <div
                          className="relative col-span-9 row-span-1 md:col-span-4 card "
                          style={{ height: 180 }}
                        >
                          <div className="card-shadow rounded-xl">
                            <img
                              src={`${process.env.REACT_APP_HOST}/${item.imageUrl}`}
                              alt="alt-catalog"
                              className="h-full w-full object-cover overflow-hidden overlay rounded-xl"
                            />
                            <div className="absolute bg-gradient-to-l from-black h-full w-full rounded-xl opacity-70" />
                          </div>
                          <div className="overlay left-0 top-0 bottom-0 flex justify-center flex-col pl-48 md:pl-72 text-white">
                            <h5 className="text-lg font-semibold">
                              {item.title}
                            </h5>
                            <span className="">${item.price}</span>
                          </div>
                          <a href="/detail-page" className="streched-link">
                            {/* NOTE Fake Children */}
                          </a>
                        </div>
                      )}
                      {/* ANCHOR End Collection 4 */}
                    </>
                  );
                })}
              </div>
            </div>
          </section>
        );
      })}
    </>
  );
}

export default BrowseRoom;
