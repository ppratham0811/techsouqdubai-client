import { useEffect, useState } from "react";
import Dashboard from "./Components/Dashboard/Dashboard.js";
import Login from "./pages/Login/Login.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ProgressBar } from "react-loader-spinner";
import ProductPage from "./pages/ProductPage/ProductPage.js";
import { getCategories, getAllProducts } from "./actions";
import Loading from "./utils/Loading.js";
import Wishlist from "./pages/Wishlist/Wishlist.js";
import Cart from "./pages/Cart/Cart.js";
import Profile from "./pages/Profile/Profile.js";
import CategoryPage from "./pages/Category/CategoryPage.js";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  const loadAllProducts = async () => {
    await getAllProducts()
      .then((res) => {
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
              <Route path="/cart" element={<Cart />} />
              <Route path="/category/:categoryId" element={<CategoryPage />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/wishlist" element={<Wishlist />} />
            </Routes>
          </BrowserRouter>
        </div>
      )}
    </>
  );
}

export default App;
