import { getCategories } from "../../../actions";
import React, { useEffect, useState } from "react";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getAllCategories();
  }, []);

  const getAllCategories = async () => {
    await getCategories()
      .then((res) => {
        setCategories(res.documents);
      })
      .catch((e) => console.error(e));
  };

  return (
    <>
      <div className="categories-section container mx-auto my-5 px-2 sm:px-8">
        <div className="liner-container mb-5 flex justify-center border-b-2 border-[rgba(119,119,119,.17)]">
          <h1 className="mb-[-2px] inline-block border-b-2 border-blue-500 pb-3 text-2xl font-bold uppercase">
            Categories
          </h1>
        </div>
        <div className="swiper-container col-span-12 overflow-hidden rounded-lg md:col-span-8">
          <div className="swiper swiper-default group relative grid items-center py-5 swiper-initialized swiper-horizontal swiper-backface-hidden">
            <div className="grid grid-cols-3 xs:grid-cols-6 sm:grid-cols-9 lg:grid-cols-12">
              {categories?.map((category, idx) => (
                <div key={idx} className="col-span-3 flex border">
                  <a
                    className="transition-all-300 flex w-full justify-center bg-white p-5 hover:relative hover:z-[2] hover:shadow-xl"
                    href="#"
                  >
                    <div>
                      <span className="text-gray-40">{category.name}</span>
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Categories;
