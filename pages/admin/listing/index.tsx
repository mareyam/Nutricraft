import Listing from "@/components/admin/listing/components";
import Head from "next/head";
import React from "react";

const index = () => {
  return (
    <>
      <Head>
        <title>Listing</title>
        <meta name="listing" content="Admin/Listing" />
        <meta name="listing" content="Listing about recipes" />
      </Head>
      <Listing />
    </>
  );
};

export default index;
