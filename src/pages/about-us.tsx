import React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";

export default function AboutUs() {
  return (
    <Layout title="About us">
      <p>We are the happiest sticker store.</p>
    </Layout>
  );
}

export const Head = () => <Seo title="About Us" />;
