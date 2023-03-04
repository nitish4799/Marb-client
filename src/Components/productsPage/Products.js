// import React, { useState , useEffect, useRef} from "react";
// import { useProductContext } from "../../Context/ProductContext";
// import Filter from "./Filter";
// import ProductList from "./ProductList";
// import Sort from "./Sort";
// import SignUpPop from "./SignUpPop";
// import Auth from '../Auth';

// const Products = () => {
//   const { isLoading, isError, products } = useProductContext();
//   const [showSignUp , setShowSignUp] = useState(false);
//   const [logged, setLogged] = useState(false);

//   const closeModal = () => setShowSignUp(false);

//   useEffect(() => {
//     console.log(showSignUp)
//     const timer = setTimeout(() => {
//       if ( Auth.isAuthenticated() ) {
//         setLogged(true);
//       }
//       setShowSignUp(true);
//     }, 15000);

//     return () => clearTimeout(timer);
//   }, []);

//   if (isLoading) {
//     return <div>......Loading</div>;
//   }
//   return (
//     <>
//       { (showSignUp && !logged) && <SignUpPop closeModal = { closeModal }/> }
//       <Filter/>
//       <Sort/>
//       <ProductList/>
//     </>
//   );
// };

// export default Products;

import React, { useState, useEffect } from "react";
import SignUpPop from "./SignUpPop";
import Auth from "../Auth";
import Filter from "./Filter";
import ProductList from "./ProductList";
import Sort from "./Sort";
import { useProductContext } from "../../Context/ProductContext";

const Products = () => {
  const { isLoading } = useProductContext();
  const [showSignUp, setShowSignUp] = useState(true);

  const closeModal = () => setShowSignUp(false);

  useEffect(() => {
    if (!Auth.isAuthenticated()) {
      setTimeout(() => {
        setShowSignUp(true);
      }, 15000);
    }
  }, []);

  if (isLoading) {
    return <div>......Loading</div>;
  }

  return (
    <>
      {showSignUp && <SignUpPop closeModal={closeModal} />}
      <Filter />
      <Sort />
      <ProductList />
    </>
  );
};

export default Products;
