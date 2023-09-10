import React, { useEffect, useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import { useLocation } from "react-router-dom";
import { getProudctsWithSearchTerm } from "../../actions";
import ProductsGrid from "../../Components/Dashboard/Products/ProductsGrid";

const SearchPage = ({ products }) => {
  const { state } = useLocation();
  const [prods, setProds] = useState([]);

  useEffect(() => {
    const search = async () => {
      //to be updated when Appwrite has an OR functionality query
      /* getProudctsWithSearchTerm(searchTerm)
        .then((res) =>{
            console.log(res);
            setProds(res.documents)})
        .catch((e) => console.log(e)); */

      var data = [];
      data = products.filter((product) => {
        const title = product?.title
          .toLowerCase()
          .includes(state?.searchTerm.toLowerCase());
        if (title) return true;
        const description = product?.description
          .toLowerCase()
          .includes(state?.searchTerm.toLowerCase());
        if (description) return true;
        for (var tag of product?.tags) {
          if (tag.toLocaleLowerCase().includes(state?.searchTerm.toLowerCase()))
            return true;
        }
        return false;
      });

      setProds(data);
    };

    search();
  }, [state?.searchTerm]);

  return (
    <div>
      <Navbar />
      <p className="p-3 md:text-3xl md:p-8">
        Search results for{" "}
        <span className="font-semibold">&ldquo;{state?.searchTerm}&rdquo;</span>
      </p>
      {prods.length > 0 ? (
        <ProductsGrid title="Searched Products" products={prods} />
      ) : (
        <p className="p-8 text-center text-2xl font-semibold">
          No Products matched your search term!
        </p>
      )}
      <Footer />
    </div>
  );
};

export default SearchPage;
