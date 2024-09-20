import React, { useEffect, useRef } from 'react';

import iso from '../assets/iso-symbol.png';
import mki from '../assets/make in india.png';
import flag from '../assets/india.png';
import gmail from '../assets/gmail.png';

const AnnouncementBar = () => {
  const announcementRef = useRef(null);

  useEffect(() => {
    const announcementElement = announcementRef.current;
    if (!announcementElement) return;

    const scrollWidth = announcementElement.scrollWidth / 2; // Total width for the full scroll
    const parentWidth = announcementElement.parentElement.offsetWidth;

    if (scrollWidth > parentWidth) {
      // Reset the transform property before starting the animation
      announcementElement.style.transform = `translateX(${parentWidth}px)`;

      const animation = announcementElement.animate(
        [
          { transform: `translateX(${parentWidth}px)` },
          { transform: `translateX(-${scrollWidth}px)` },
        ],
        {
          duration: 60000,
          iterations: Infinity,
          easing: 'linear',
        },
      );

      return () => animation.cancel();
    }
  }, []);

  return (
    <div className="bg-gray-200 text-xs py-2 px-4 flex items-center overflow-hidden fixed top-0 left-0 w-full z-50">
      <div className="whitespace-nowrap flex" ref={announcementRef}>
        <p className="flex-shrink-0">
          {/* Announcement 1 */}
          {/* inline Image */}{' '}
          <span
            className=" mx-1 inline-block h-3 w-6 bg-cover bg-center"
            style={{ backgroundImage: `url(${iso})` }}
          ></span>{' '}
          <span className="">
            We are proud to be{' '}
            <span className="text-blue-800 font-bold">ISO certified,</span>{' '}
            affirming our commitment to the highest standards of quality and
            excellence.
          </span>{' '}
          {/* Announcement 2 */}
          <span className="mx-28">
            {/* inline Image */}{' '}
            <span
              className=" mr-1 inline-block h-3 w-5 bg-cover bg-center"
              style={{ backgroundImage: `url(${flag})` }}
            ></span>{' '}
            We proudly support the {/* inline Image */}{' '}
            <span
              className=" mx-1 inline-block h-3 w-5 bg-cover bg-center"
              style={{ backgroundImage: `url(${mki})` }}
            ></span>{' '}
            ' <span className="  font-bold">MAKE IN INDIA</span> ' initiative,
            championing local manufacturing and innovation to drive economic
            growth and job creation
            {/* inline Image */}{' '}
            <span
              className=" mx-1 inline-block h-3 w-5 bg-cover bg-center"
              style={{ backgroundImage: `url(${flag})` }}
            ></span>{' '}
          </span>
          {/* Announcement 3 */}
          <span className="mx-28">
            Contact us at
            {/* inline Image */}{' '}
            <span
              className=" mx-1 inline-block h-3 w-4 bg-cover bg-center"
              style={{ backgroundImage: `url(${gmail})` }}
            ></span>{' '}
            <span className="text-red-700 font-semibold">
              info@vihaasdtech.com
            </span>
          </span>
        </p>

        {/* Duplicate Content 1*/}
        <p className="flex-shrink-0">
          {/* Announcement 1 */}
          {/* inline Image */}{' '}
          <span
            className=" mx-1 inline-block h-3 w-6 bg-cover bg-center"
            style={{ backgroundImage: `url(${iso})` }}
          ></span>{' '}
          <span className="">
            We are proud to be,{' '}
            <span className="text-blue-800 font-bold">ISO certified</span>{' '}
            affirming our commitment to the highest standards of quality and
            excellence.
          </span>{' '}
          {/* Announcement 2 */}
          <span className="mx-28">
            {/* inline Image */}{' '}
            <span
              className=" mr-1 inline-block h-3 w-5 bg-cover bg-center"
              style={{ backgroundImage: `url(${flag})` }}
            ></span>{' '}
            We proudly support the {/* inline Image */}{' '}
            <span
              className=" mx-1 inline-block h-3 w-5 bg-cover bg-center"
              style={{ backgroundImage: `url(${mki})` }}
            ></span>{' '}
            ' <span className=" font-bold">MAKE IN INDIA</span> ' initiative,
            championing local manufacturing and innovation to drive economic
            growth and job creation
            {/* inline Image */}{' '}
            <span
              className=" mx-1 inline-block h-3 w-5 bg-cover bg-center"
              style={{ backgroundImage: `url(${flag})` }}
            ></span>{' '}
          </span>
          {/* Announcement 3 */}
          <span className="mx-28">
            Contact us at
            {/* inline Image */}{' '}
            <span
              className=" mx-1 inline-block h-3 w-4 bg-cover bg-center"
              style={{ backgroundImage: `url(${gmail})` }}
            ></span>{' '}
            <span className="text-red-700 font-semibold">
              info@vihaasdtech.com
            </span>
          </span>
        </p>
        {/* Duplicate content */}
        <p className="flex-shrink-0">
          {/* Announcement 1 */}
          {/* inline Image */}{' '}
          <span
            className=" mx-1 inline-block h-3 w-6 bg-cover bg-center"
            style={{ backgroundImage: `url(${iso})` }}
          ></span>{' '}
          <span className="">
            We are proud to be,{' '}
            <span className="text-blue-800 font-bold">ISO certified</span>{' '}
            affirming our commitment to the highest standards of quality and
            excellence.
          </span>{' '}
          {/* Announcement 2 */}
          <span className="mx-28">
            {/* inline Image */}{' '}
            <span
              className=" mr-1 inline-block h-3 w-5 bg-cover bg-center"
              style={{ backgroundImage: `url(${flag})` }}
            ></span>{' '}
            We proudly support the {/* inline Image */}{' '}
            <span
              className=" mx-1 inline-block h-3 w-5 bg-cover bg-center"
              style={{ backgroundImage: `url(${mki})` }}
            ></span>{' '}
            ' <span className=" font-bold">MAKE IN INDIA</span> ' initiative,
            championing local manufacturing and innovation to drive economic
            growth and job creation
            {/* inline Image */}{' '}
            <span
              className=" mx-1 inline-block h-3 w-5 bg-cover bg-center"
              style={{ backgroundImage: `url(${flag})` }}
            ></span>{' '}
          </span>
          {/* Announcement 3 */}
          <span className="mx-28">
            Contact us at
            {/* inline Image */}{' '}
            <span
              className=" mx-1 inline-block h-3 w-4 bg-cover bg-center"
              style={{ backgroundImage: `url(${gmail})` }}
            ></span>{' '}
            <span className="text-red-700 font-semibold">
              info@vihaasdtech.com
            </span>
          </span>
        </p>
      </div>
    </div>
  );
};

export default AnnouncementBar;
