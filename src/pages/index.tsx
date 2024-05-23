import { Link } from "gatsby";
import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";

export default function IndexPage() {
  return (
    <Layout title="Welcome to DevStickers 😊">
      <div></div>
    </Layout>
  );
}

export const Head = () => <Seo title="Home" />;
