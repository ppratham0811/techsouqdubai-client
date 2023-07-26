import { getCategories } from "../../../actions";
import React, { useEffect, useState } from "react";
import Heading from "../../../Widgets/Heading";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getAllCategories();
  }, []);

  const getAllCategories = async () => {
    await getCategories()
      .then((res) => {
        let publishedCategories = [];
        for (let docs of res.documents) {
          if (docs.published) {
            publishedCategories.push(docs);
          }
        }
        setCategories(publishedCategories);
      })
      .catch((e) => console.error(e));
  };

  return (
    <>
      <div className="categories-section container mx-auto my-5 px-2 sm:px-8">
        <Heading title="Categories" />
        <div className="swiper-container col-span-12 overflow-hidden rounded-lg md:col-span-8">
          <div className="swiper swiper-default group relative grid items-center py-5 swiper-initialized swiper-horizontal swiper-backface-hidden">
            <div className="grid grid-cols-3 xs:grid-cols-6 sm:grid-cols-9 lg:grid-cols-12">
              {categories?.map((category, idx) => {
                return (
                  <div
                    key={idx}
                    className="col-span-3 flex border transition-all-300 w-full justify-center bg-white p-5 hover:relative hover:z-[2] hover:shadow-xl"
                  >
                    <div>
                      <span className="text-gray-40">{category.name}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Categories;
