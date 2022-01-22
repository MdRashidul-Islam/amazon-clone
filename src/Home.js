import React from "react";
import "./Home.css";
import Product from "./Product";

const Home = () => {
  return (
    <div className="home">
      <div className="home_container">
        <img
          className="home_image"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2020/X-site/Multititle/Bollywood/1500x600_Hero-Tall_np_bolly._CB405289994_.jpg"
          alt=""
        />
        <div className="home_row">
          <Product
            id="11"
            title="The lean startup: How constant innovation creates radically successful businesses paperback"
            price={19.99}
            image="https://images-na.ssl-images-amazon.com/images/I/91cwOSS4sDL.jpg"
            rating={5}
          />

          <Product
            id="12"
            title="The lean startup: How constant innovation creates radically successful businesses paperback"
            price={19.99}
            image="https://images-na.ssl-images-amazon.com/images/I/91cwOSS4sDL.jpg"
            rating={5}
          />
        </div>
        <div className="home_row">
          <Product
            id="13"
            title="The lean startup: How constant innovation creates radically successful businesses paperback"
            price={19.99}
            image="https://images-na.ssl-images-amazon.com/images/I/91cwOSS4sDL.jpg"
            rating={5}
          />
          <Product
            id="14"
            title="The lean startup: How constant innovation creates radically successful businesses paperback"
            price={19.99}
            image="https://images-na.ssl-images-amazon.com/images/I/91cwOSS4sDL.jpg"
            rating={5}
          />
          <Product
            id="15"
            title="The lean startup: How constant innovation creates radically successful businesses paperback"
            price={19.99}
            image="https://images-na.ssl-images-amazon.com/images/I/91cwOSS4sDL.jpg"
            rating={5}
          />
        </div>
        <div className="home_row">
          <Product
            id="16"
            title="The lean startup: How constant innovation creates radically successful businesses paperback"
            price={19.99}
            image="https://images-na.ssl-images-amazon.com/images/I/91cwOSS4sDL.jpg"
            rating={5}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
