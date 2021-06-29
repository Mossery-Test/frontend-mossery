import { Hero } from "assets";
import React, { useState } from "react";

function HeroComponents(props) {
  const showBrowse = () => {
    // console.log(props.data);
    window.scrollTo({
      top: props.refBrowse.current.offsetTop,
      behavior: "smooth",
    });
  };

  const onChangToogle = () => {
    props.toogleModal(!props.toogleStatus);
  };

  return (
    <section className="flex hero items-center">
      {/* ANCHOR Start Left Side Hero */}
      <div className="w-full absolute z-20 inset-0 md:relative md:w-1/2 text-center flex flex-col justify-center hero-caption">
        <h5 className="text-3xl md:text-5xl leading-tight font-semibold">
          Explore World <br /> by Reading Books
        </h5>
        <p className="px-8 text-base md:text-lg md:px-0 my-6 tracking-wide">
          We give you books with <br className="hidden md:block" /> different
          types
        </p>
        <div>
          <button
            onClick={showBrowse}
            className="bg-pink-400 text-black hover:bg-black hover:text-pink-400 rounded-full px-8 py-3 mt-4 inline-block flex-none transition duration-200 focus:outline-none"
          >
            Explore Now
          </button>
        </div>
      </div>
      {/* ANCHOR End Left Side Hero */}

      {/* ANCHOR Start Right Side Hero */}
      <div className="w-full md:relative md:w-1/2 inset-0">
        <div className="relative hero-image">
          <div className="overlay inset-0 bg-black opacity-30 z-10"></div>
          <div className="overlay right-0 bottom-0 md:inset-0">
            <button
              onClick={onChangToogle}
              className="video hero-cta focus:outline-none z-30 modal-trigger"
              data-content='
              <div class="w-screen pb-56 md:w-88 relative z-50">
              <div class="absolute w-full h-full">
                    <iframe width="100%" height="100%" src="https://www.youtube.com/embed/atezs1HrZhw" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                  </div>
                </div>'
            ></button>
          </div>
          <img
            src={Hero}
            alt="alt-hero"
            className="absolute inset-0 md:relative w-full h-3/6 object-cover object-center"
          />
        </div>
      </div>
      {/* ANCHOR End Right Side Hero */}
    </section>
  );
}

export default HeroComponents;
