import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [trendingProducts, settrendingProducts] = useState([]);
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((res) => {
        const sliceTrending = res.products.slice(0, 12);
        settrendingProducts(sliceTrending);
      });
  }, []);
  return (
    <div className="">
      <h1 className="text-2xl font-semibold pt-1 pl-20  ">
        Trending Product 🔥
      </h1>

      <div className=" flex flex-wrap gap-10 items-center justify-around  p-10 pt-2">
        {trendingProducts.map((product) => {
          return (
            <div
              key={product.id}
              className=" border border-zinc-200 rounded-lg p-5 w-[20rem] hover:shadow-xl"
            >
              <Link to={`/products/${product.id}`}>
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  className="w-full h-[15rem] object-cover border rounded-md"
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

export default Home;
