import React from "react";
import { Product, FooterBanner, HeroBanner } from "@/components";
import { client } from "@/lib/client";
const Home = ({ products, bannerDate }) => {
  return (
    <>
      <HeroBanner heroBanner={bannerDate.length && bannerDate[0]} />
      {console.log(bannerDate)}
      <div className="products-heading">
        <h2>Best Selling Products</h2>
        <p>Speaker of many variations</p>
      </div>
      <div className="products-container">
        {products?.map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </div>
      <FooterBanner footerBanner ={bannerDate && bannerDate[0]} />
    </>
  );
};

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerDate = await client.fetch(bannerQuery);

  return {
    props: { products, bannerDate },
  };
};

export default Home;
