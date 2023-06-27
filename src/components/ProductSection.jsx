import React from 'react';
import ProductCard from './ProductCard';

export default function ProductSection() {
  return (
    <>
    <div className="container my-5">
        <h2 className="text-center my-5">Products</h2>
      <div className="row gap-5">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        </div>
    </div>
  </>
  );
}
