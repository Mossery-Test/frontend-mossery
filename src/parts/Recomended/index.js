import React from "react";

function Recomended(props) {
  const data = props.data;
  return (
    <section className="bg-gray-100 px-4 py-16">
      <div className="container mx-auto">
        <div className="flex flex-start mb-4">
          <h3 className="text-2xl capitalize font-semibold">Books for you</h3>
        </div>
        <div className="flex flex-wrap overflow-x-auto mb-4 -mx-3">
          {/* ANCHOR Start Item */}
          {data.map((item, index) => {
            return (
              <div className="px-3 w-full md:w-3/12 mb-4" key={index}>
                <div className="rounded-xl p-4 pb-8 relative bg-white">
                  <div className="rounded-xl overflow-hidden card-shadow w-full h-48">
                    <img
                      src={`${process.env.REACT_APP_HOST}/${item.imageUrl}`}
                      alt="alt-chair"
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                  <h5 className="text-lg font-semibold mt-4">{item.title}</h5>
                  <span className="">$ {item.price}</span>
                </div>
              </div>
            );
          })}
          {/* ANCHOR End Item */}
        </div>
      </div>
    </section>
  );
}

export default Recomended;
