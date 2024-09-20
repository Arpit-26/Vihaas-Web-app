import React from 'react';

// Import images
import b from '../assets/gallery/b.jpg';
import c from '../assets/gallery/c.jpg';
import d from '../assets/gallery/d.jpg';
import e from '../assets/gallery/e.jpg';
import f from '../assets/gallery/f.jpg';
import g from '../assets/gallery/g.jpg';
import h from '../assets/gallery/h.jpg';
import i from '../assets/gallery/i.jpg';
import j from '../assets/gallery/j.jpg';
import k from '../assets/gallery/k.jpg';
import l from '../assets/gallery/l.jpg';
import m from '../assets/gallery/m.jpg';
import n from '../assets/gallery/n.jpg';
import o from '../assets/gallery/o.jpg';
import p from '../assets/gallery/p.jpg';
import q from '../assets/gallery/q.jpg';

const Gallery = () => {
  return (
    <>
      <h1 className="text-3xl md:text-[3vw] text-zinc-800 font-serif text-center font-bold py-6 md:py-8">
        Meet Vihaas Family
      </h1>

      <div className="mx-auto max-w-screen-lg px-4">
        {[
          [b, c, d, e],
          [f, g, h, i],
          [j, k, l, m],
          [n, o, p, q],
        ].map((row, rowIndex) => (
          <div
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-4"
            key={rowIndex}
          >
            {row.map((item, index) => (
              <div key={index} className="w-full h-auto">
                <img
                  className="w-full h-48 object-cover rounded-lg"
                  src={item}
                  alt={`Gallery image ${index + 1}`}
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </>
  );
};

export default Gallery;
