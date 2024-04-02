import Ecommerce from "@/components/admin/ecommerce";
import Head from "next/head";
import React from "react";

const index = () => {
  return (
    <>
      <Head>
        <title>Ecommerce</title>
        <meta name="e-commerce" content="Admin/e-commerce" />
        <meta name="e-commerce" content="e-commerce" />
      </Head>
      <Ecommerce />
    </>
  );
};

export default index;
