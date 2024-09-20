import React from 'react';

const ProductCard = ({ onClick, name, img, description }) => {
  return (
    <div className="p-6 ">
      <div className="bg-slate-200  md:w-[22vw] rounded-xl transition-transform transform md:hover:scale-105 md:hover:shadow-xl md:min-h-fit">
        <div onClick={onClick} className="cursor-pointer p-4">
          <h1 className="text-lg font-semibold text-center py-4">{name}</h1>
          <div className="flex items-center justify-center">
            <img className="min-h-14 rounded-sm" src={img} alt={name} />
          </div>
          {/* <p className="p-3 text-justify">{description}</p>  */}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
