import React, { useEffect, useState } from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import { useLocation } from 'react-router-dom';
import { getProudctsWithSearchTerm } from '../../actions';

const SearchPage = ({ products }) => {
  const {
    state: { searchTerm },
  } = useLocation();
  const [prods, setProds] = useState([]);

  useEffect(() => {
    console.log("herer");
    const search = async () => {
      getProudctsWithSearchTerm(searchTerm)
        .then((res) =>{
            console.log(res);
            setProds(res.documents)})
        .catch((e) => console.log(e));
    };

    search();
  }, [searchTerm]);
  console.log(prods);
  return (
    <div>
      <Navbar />
      <p>Search results for &ldquo;{searchTerm}&rdquo;</p>

      <Footer />
    </div>
  );
};

export default SearchPage;
