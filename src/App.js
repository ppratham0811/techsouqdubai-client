import { useEffect, useState } from "react";
import Dashboard from "./Components/Dashboard/Dashboard.js";
import Login from "./pages/Login/Login.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductPage from "./pages/ProductPage/ProductPage.js";
import Loading from "./utils/Loading.js";
import OrderPage from "./pages/Order/OrderPage.js";
import OrderDetails from "./pages/Order/OrderDetails.js";
import { getCategories, getAllProducts, getRelations } from "./actions";
import Wishlist from "./pages/Wishlist/Wishlist.js";
import Cart from "./pages/Cart/Cart.js";
import Profile from "./pages/Profile/Profile.js";
import CategoryPage from "./pages/Category/CategoryPage.js";
import GroupPage from "./pages/GroupCategory/GroupPage.js";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [relations, setRelations] = useState([]);

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

  const loadAllRelations = async () => {
    await getRelations()
      .then((res) => {
        setRelations(res.documents);
      })
      .catch((e) => console.log(e.message));
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
    loadAllRelations();
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

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
              <Route path="/profile" element={<Profile />} />
              <Route path="/wishlist" element={<Wishlist />} />
              <Route path="/order-checkout" element={<OrderPage />} />
              <Route path="/orders/:invoiceId" element={<OrderDetails />} />
              <Route
                exact
                path="/category/:categoryId"
                element={
                  <CategoryPage
                    relations={relations}
                    categories={categories}
                    products={products}
                  />
                }
              />
              <Route
                path="/group/:groupID"
                element={
                  <GroupPage products={products} relations={relations} />
                }
              />
            </Routes>
          </BrowserRouter>
        </div>
      )}
    </>
  );
}

export default App;
