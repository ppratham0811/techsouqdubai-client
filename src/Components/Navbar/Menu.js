import React from "react";
import { useState, useEffect } from "react";
import { getCategories } from "../../actions";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const Menu = () => {
  const [allCategories, setAllCategories] = useState([]);
  const [parentCategories, setParentCategories] = useState([]);

  const loadAllCategories = async () => {
    await getCategories()
      .then((response) => {
        console.log(response);
        setAllCategories(response.documents);
      })
      .catch((e) => console.error());
  };

  useEffect(() => {
    loadAllCategories();
    console.log(allCategories);
    let parentCats = [];
    for (let category of allCategories) {
      if (category.parent === "isParent") {
        parentCats.push(category);
      }
    }
    console.log(parentCats);
    setParentCategories(parentCats);
  }, []);

  const [productMenu, setProductMenu] = useState(false);

  return (
    // Navbar Menu
    <div className="hidden bg-white lg:block">
      <nav className="container mx-auto px-2 sm:px-8 shadow-xl">
        <ul className="menu flex flex-wrap items-center justify-between py-[10px] text-lg">
          <li className="underlined-animated group relative group-hover:border-b-2 border-b-4 border-transparent hover:border-primary">
            <a
              href="#"
              className="btn-open flex items-center gap-1 font-semibold"
            >
              <span>Products</span>
              <ArrowDropDownIcon className="transform transition-transform duration-300 hover:rotate-180 flex text-xs text-primary-color text-primary" />
            </a>
            <div className="hidden my-2 group-hover:block absolute w-80 bg-white top-[30px] z-20 shadow-lg p-4">
              <ul>
                {parentCategories.map((p, idx) => {
                  return (
                    <>
                      <li key={idx} className="my-2 group">
                        {p.name}
                      </li>
                    </>
                  );
                })}
              </ul>
            </div>
          </li>
          <li className="underlined-animated border-b-4 border-transparent hover:border-primary">
            <a href="/">Home</a>
          </li>
          <li className="underlined-animated border-b-4 border-transparent hover:border-primary">
            <a href="#">Computers</a>
          </li>
          <li className="underlined-animated border-b-4 border-transparent hover:border-primary">
            <a href="#">Airocide</a>
          </li>
          <li className="underlined-animated border-b-4 border-transparent hover:border-primary">
            <a href="#">Innovation</a>
          </li>
          <li className="underlined-animated group border-b-4 border-transparent hover:border-primary">
            <a href="#" className="flex items-center gap-1">
              <span>Components</span>
            </a>
          </li>
          <li className="underlined-animated border-b-4 border-transparent hover:border-primary">
            <a href="faqs.html">FAQ's</a>
          </li>
          <li className="underlined-animated border-b-4 border-transparent hover:border-primary">
            <a href="contact-us.html">Contact Us</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Menu;
