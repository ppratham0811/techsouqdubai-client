import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getAllProducts, getCategoryById } from "../../actions";
import { useState } from "react";
import ErrorPage from "../ErrorPage/ErrorPage";
import Loading from "../../utils/Loading";
import Navbar from "../../Components/Navbar/Navbar";
import Heading from "../../Widgets/Heading";
import Footer from "../../Components/Footer/Footer";
import Products from "../../Components/Dashboard/Products/Products";

const CategoryPage = ({ relations, categories, products }) => {
  const { categoryId } = useParams();
  const [category, setCategory] = useState([]);
  const [categoryExists, setCategoryExists] = useState(true);

  const getCategory = () => {
    const data = [];
    const cat = categories.find((category) => category.$id === categoryId);
    if (!cat) setCategoryExists(false);
    data.push(cat);
    const related = relations.filter(
      (relation) => relation.parent.$id === categoryId
    );
    related.map((x) => data.push(x?.child));

    setCategory(data);
  };

  useEffect(() => {
    getCategory();

    // setProducts(relevantProducts);
  }, []);

  if (!categoryExists) {
    return <ErrorPage />;
  } else if (category.length < 1) {
    return <Loading />;
  }

  return (
    <>
      <Navbar />
      <p className="px-3 md:px-8 text-3xl font-semibold py-3">
        {category[0]?.name}
      </p>
      {category &&
        category.map((cat, idx) => {
          let relevantProducts = [];
          for (let prod of products) {
            if (prod.category.$id === cat.$id) {
              relevantProducts.push(prod);
            }
          }

          if (relevantProducts.length > 0)
            return <Products title={cat.name} products={relevantProducts} />;
        })}

      <Footer />
    </>
  );
};

export default CategoryPage;
