import { Product } from "parts";
import React, { useEffect, useState } from "react";
import axios from "configs/axios";

function ProductPage(props) {
  const [callBack, setCallBack] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    getProduct();
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
