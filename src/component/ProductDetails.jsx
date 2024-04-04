import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setproduct] = useState(null);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((res) => {
        // console.log(res);
        setproduct(res);
      });
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-semibold pt-1 pl-10">Product detail</h2>
      {product ? (
        <div className=" border border-zinc-200 rounded-lg m-10 mt-2 p-5 flex gap-10  hover:shadow-xl">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="w-[30rem] h-[30rem] object-cover border rounded-md"
          />
          <div>
            <h2 className=" text-3xl my-5 font-semibold">{product.title}</h2>
            <h3 className="text-2xl my-5 text-red-500">${product.price}</h3>

            <p className="text-xl my-3 ">{product.description}</p>
            <p className="text-md">Brand: {product.brand}</p>
            <div className="flex flex-wrap gap-3 mt-5">
              <img
                src={product.images[0]}
                alt={product.title}
                className="w-[5rem] h-[5rem] object-cover border-0 rounded-md "
              />
              <img
                src={product.images[1]}
                alt={product.title}
                className="w-[5rem] h-[5rem] object-cover border-0 rounded-md "
              />
              <img
                src={product.images[2]}
                alt={product.title}
                className="w-[5rem] h-[5rem] object-cover border-0 rounded-md "
              />
              <img
                src={product.images[3]}
                alt={product.title}
                className="w-[5rem] h-[5rem] object-cover border-0 rounded-md "
              />
            </div>
          </div>
        </div>
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
};

export default ProductDetails;
