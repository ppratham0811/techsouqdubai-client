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

const CategoryPage = () => {
  const { categoryId } = useParams();
  const [category, setCategory] = useState({});
  const [categoryExists, setCategoryExists] = useState(false);
  const [products, setProducts] = useState([]);

  const fetchCategory = async () => {
    await getCategoryById(categoryId)
      .then((res) => {
        setCategoryExists(true);
        setCategory(res);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const fetchRelevantProducts = async () => {
    await getAllProducts()
      .then((res) => {
        const relevantProducts = [];
        for (let prod of res.documents) {
          if (prod.category.$id === categoryId) {
            relevantProducts.push(prod);
          }
        }
        console.log(relevantProducts);
        setProducts(relevantProducts);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    fetchCategory();
    fetchRelevantProducts();
    // setProducts(relevantProducts);
  }, []);

  if (!categoryExists) {
    return <ErrorPage />;
  } else if (!category) {
    return <Loading />;
  }

  return (
    <>
      <Navbar />
      {products.length > 0 ? (
        <div className="h-screen">
          <Products title={category.name} products={products} />
        </div>
      ) : (
        <div className="h-screen text-center text-2xl my-10 font-bold">
          No products to show
        </div>
      )}

      <Footer />
    </>
  );
};

export default CategoryPage;
