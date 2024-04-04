import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ProductList = () => {
  const [allPoducts, setallProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((res) => {
        setallProducts(res.products);
      });
  }, []);
  return (
    <div>
      <h2 className="text-2xl font-semibold pt-1 pl-10">Product Listing</h2>
      <div className=" flex flex-wrap gap-10 items-center justify-around  p-10 pt-2">
        {allPoducts.map((product) => {
          return (
            <div
              key={product.id}
              className=" border border-zinc-200 rounded-lg p-5 w-[20rem] hover:shadow-xl"
            >
              <Link to={`/products/${product.id}`}>
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  className="w-full h-[15rem] object-cover border-0 rounded-md"
                />
                <h3 className="text-center text-xl mt-3 font-semibold">
                  {product.title}
                </h3>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductList;
