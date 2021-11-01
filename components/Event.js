import React from "react";
import Image from "next/image";

const Event = ({ eventName, images, myDeleteFunction }) => {
  return (
    <div className="mx-10 sm:mx-44 py-7">
      <div className="flex flex-row justify-between">
        <div className="py-2 text-xl font-bold">{eventName}</div>
        <div
          className="relative w-6 h-6 mx-3 my-2 hover:cursor-pointer"
          onClick={() => myDeleteFunction()}
        >
          <Image src="/delete.png" alt="delete-image" layout="fill" />
        </div>
      </div>

      <div className="w-full bg-gray-200 h-60 sm:h-96">
        <div className="flex flex-row h-1/2">
          <div className="relative w-1/2 h-full border-2 border-blue-300">
            <Image
              src={images.length >= 1 ? images[0].image : "/firstImg.jpg"}
              layout="fill"
            />
          </div>
          <div className="relative w-1/2 h-full border-2 border-blue-300">
            <Image
              src={images.length >= 2 ? images[1].image : "/secondImg.jpg"}
              layout="fill"
            />
          </div>
        </div>
        <div className="flex flex-row h-1/2">
          <div className="relative w-1/3 h-full border-2 border-blue-300">
            <Image
              src={images.length >= 3 ? images[2].image : "/thirdImg.jpg"}
              layout="fill"
            />
          </div>
          <div className="relative w-1/3 h-full bg-red-100 border-2 border-blue-300">
            <Image
              src={images.length >= 4 ? images[3].image : "/fourthImg.jpg"}
              layout="fill"
            />
          </div>
          <div className="relative w-1/3 h-full bg-red-100 border-2 border-blue-300">
            <Image
              src={images.length >= 5 ? images[4].image : "/fifthImg.jpg"}
              layout="fill"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Event;
