import React from 'react';
import { useLocation } from 'react-router-dom';

const ProductPage = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);

  const product = {
    name: params.get('name'),
    img: params.get('img'),
    description: params.get('description'),
    feature: JSON.parse(params.get('feature') || '[]'),
  };

  if (!product.name) {
    return (
      <div className="text-[3vw] font-serif font-bold text-center py-8 uppercase">
        No product data available
      </div>
    );
  }

  return (
    <div className="text-center">
      <h1 className="text-3xl md:text-[3vw] font-serif font-bold text-center py-8 ">
        {product.name}
      </h1>
      <div className="flex  justify-center">
        <img
          className=" py-8 md:max-h-[22vw] md:min-h-[20vw] "
          src={product.img}
          alt={product.name}
        />
      </div>
      <div className="md:flex px-2 md:gap-12  justify-center">
        <div className="md:w-1/3   ">
          <h1 className="text-2xl font-bold text-justify">Description</h1>
          <p className="py-8 text-justify">{product.description}</p>
        </div>
        <div className="md:w-1/3">
          <h1 className="text-2xl font-bold text-justify">Features</h1>

          <div className="py-8 text-justify">
            {product.feature.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
