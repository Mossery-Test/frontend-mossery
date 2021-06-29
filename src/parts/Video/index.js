import React from "react";

function Video(props) {
  const onChangToogle = () => {
    props.toogleModal(!props.toogleStatus);
  };

  return (
    <div
      className="fixed w-full h-full inset-0 z-50 bg-black bg-opacity-35"
      onClick={onChangToogle}
    >
      <div className="fixed inset-0 z-40 flex items-center justify-center w-100 min-h-screen">
        <div className="bg-white p-0 md:p-6 z-10">
          <div className="w-screen pb-56 md:w-88 relative z-50">
            <div className="absolute w-full h-full">
              <iframe
                title="video"
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/qj05AQQptgY"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Video;
