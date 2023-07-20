import { useEffect, useState } from "react";
import Dashboard from "./Components/Dashboard/Dashboard.js";
import Login from "./Components/Login/Login.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ProgressBar } from "react-loader-spinner";
import ProductPage from "./Components/ProductPage/ProductPage.js";
import { getCategories, getAllProducts } from "./actions";
import Loading from "./utils/Loading.js";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  const loadAllProducts = async () => {
    await getAllProducts()
      .then((res) => {
        console.log(res);
        let publishedProducts = [];
        for (let prods of res.documents) {
          if (prods.published) {
            publishedProducts.push(prods);
          }
        }
        setProducts(publishedProducts);
      })
      .catch((e) => console.error(e));
  };

  const loadAllCategories = async () => {
    await getCategories()
      .then((response) => {
        setCategories(response.documents);
      })
      .catch((e) => console.error());
  };

  useEffect(() => {
    loadAllCategories();
    loadAllProducts();
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="App flex min-h-screen flex-col">
          <BrowserRouter>
            <Routes>
              <Route
                path="/"
                exact
                element={
                  <Dashboard products={products} categories={categories} />
                }
              />
              <Route path="/login" element={<Login />} />
              <Route
                path="/products/:productId"
                element={<ProductPage products={products} />}
              />
            </Routes>
          </BrowserRouter>
        </div>
      )}
    </>
  );
}

export default App;
