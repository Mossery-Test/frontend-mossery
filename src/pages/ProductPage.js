import { Product } from "parts";
import React, { useEffect, useState } from "react";
import axios from "configs/axios";

function ProductPage(props) {
  const name = [
    "John",
    "Abigail",
    "X Æ A-Xii",
    "Beyonce",
    "Khloe Kardashian",
    "George Bush",
    "Queen Elizabeth",
    "Yeezy",
    "Ivanka Trump",
    "Leonardo DiCaprio",
  ];
  const [searchTerm, setSearchTerm] = useState("");
  const [callBack, setCallBack] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    getProduct();
    // filter();
  });

  const handleCallBack = (childData) => {
    setCallBack(childData);
  };

  const getProduct = () => {
    axios
      .get("/all-product")
      .then((response) => {
        const filter = response.data.item.filter((fi) => {
          return fi.title.includes(callBack);
        });

        if (callBack === "") {
          setData(response.data.item);
        } else {
          setData(filter);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <Product product={data} parentCallback={handleCallBack} />
    </>
  );
}

export default ProductPage;
