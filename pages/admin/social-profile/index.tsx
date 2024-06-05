import SocialProfile from "@/components/admin/social-profile/components";
import Head from "next/head";
import React from "react";

const index = () => {
  return (
    <>
      <Head>
        <title>Social Profile</title>
        <meta name="social-profile" content="user/socialprofile" />
        <meta name="social-profile" content="social-profile of user" />
      </Head>
      <SocialProfile />
    </>
  );
};

export default index;
