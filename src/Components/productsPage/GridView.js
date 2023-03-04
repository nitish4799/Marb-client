import React from 'react';
import Product from './Product';

const GridView = ({products}) => {
  return (
    <>
        {/* <div className="container my-5 grid"> */}
        <div className="container my-5">
        <main className="d-flex flex-wrap gap-5 justify-content-center">
          {products.map((curElem) => {
            return <Product key={curElem.pid} {...curElem} />;
          })}
        </main>
      </div>
    </>
  )
}

export default GridView