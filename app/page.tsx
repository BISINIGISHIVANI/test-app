"use client";
import React from "react";
import { useEffect } from "react";

export default function Home() {
  const [products, setProducts] = React.useState([]);
  const [singleProduct, setSingleProduct] = React.useState({});
  console.log("singleProduct:", singleProduct);
  const api_url = `https://api.restful-api.dev/objects`;
  function getProductsInfo() {
    fetch(api_url)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => {
        console.error("Error fetching issue:", error);
      });
  }

  const OpenSingleProduct = async (id) => {
    await fetch(`${api_url}/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setSingleProduct(data);
      })
      .catch((error) => {
        console.error("Error fetching issue:", error);
      });
  };
  useEffect(() => {
    getProductsInfo();
  }, []);
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1>TESTING APP for Browser Issues one</h1>

      <h2>Checking one</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map(({ id, name, data }, product) => (
          <div
            key={id}
            className="border p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            onClick={() => OpenSingleProduct(id)}
          >
            <h3 className="text-lg font-semibold">{name}</h3>
            <p className="text-gray-600">{data?.color}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
