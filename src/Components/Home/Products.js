import React from "react";
import "./Products.css";
import c1 from "../../Images/c1.jpg";
import { Link } from "react-router-dom";
import c2 from "../../Images/c2.jpg";
import c3 from "../../Images/c3.jpg";

const Products = () => {
  return (
    <>
      <div className="marbanime text-bold mt-5 text-center">
        [ M A R B L E G R A M ]
      </div>

      <div className="our text-center mt-2">
        <h1>Product Categories</h1>
      </div>

        <div className="d-flex justify-content-center gap-3 mt-5 flex-wrap">

          <div className="pc">
            <figure className="effect-ming">
              <img
                src={c1}
                alt="img08"
              />
              <figcaption>
                <h2 className="text-white">marble</h2>
                <Link to="/marble" onClick={() => window.scrollTo(0, 0)}><p className="text-white">view more</p></Link>
              </figcaption>
            </figure>
          </div>

          <div className="pc">
            <figure className="effect-ming">
              <img
                src={c2}
                alt="img08"
              />
              <figcaption>
                <h2 className="text-white">granite</h2>
                <Link to='granite' onClick={() => window.scrollTo(0, 0)}><p className="text-white">view more</p></Link>
              </figcaption>
            </figure>
          </div>

          <div className="pc">
            <figure className="effect-ming">
              <img
                src={c3}
                alt="img08"
              />
              <figcaption>
                <h2 className="text-white">art & works</h2>
                <Link to='arts' onClick={() => window.scrollTo(0, 0)}><p className="text-white">view more</p></Link>
              </figcaption>
            </figure>
          </div>
        </div>
    </>
  );
};

export default Products;
