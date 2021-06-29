import { Breadcrumb, Details, Footer, Header, Recomended } from "parts";
import React, { useEffect, useState } from "react";
import axios from "configs/axios";

function DetailPage(props) {
  const { id } = props.match.params;
  const [item, setItem] = useState({});
  const [collections, setCollections] = useState([]);

  useEffect(() => {
    getData();
    getCollection();
  });

  const getData = () => {
    axios
      .get(`/detail-page/${id}`)
      .then((response) => {
        setItem(response.data.item);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getCollection = () => {
    axios
      .get("/landing-page")
      .then((response) => {
        setCollections(response.data.collection[0].itemId);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <Header />
      <Breadcrumb />
      <Details data={item} />
      <Recomended data={collections} />
      <Footer />
    </>
  );
}

export default DetailPage;
