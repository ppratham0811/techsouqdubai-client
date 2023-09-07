import React from 'react';
import { useState, useEffect } from 'react';
import { getCategories, getNavLinks } from '../../actions';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Link } from 'react-router-dom';

const Menu = () => {
  const [allCategories, setAllCategories] = useState([]);
  const [parentCategories, setParentCategories] = useState([]);
  const [menu, setMenu] = useState(false);
  const [navbar, setNavBar] = useState([]);

  useEffect(() => {
    const loadAllCategories = async () => {
      await getCategories()
        .then((response) => {
          setAllCategories(response.documents);
          setParentCategories(
            response.documents.filter(
              (category) => category.parent === 'isParent'
            )
          );
          getNavLinks()
            .then((response) => setNavBar(response.documents))
            .catch((error) => console.error(error.message));
        })
        .catch((e) => console.error());
    };
    loadAllCategories();
  }, []);

  console.log(menu);

  const [productMenu, setProductMenu] = useState(false);

  return (
    // Navbar Menu
    <div className='hidden  lg:block bg-white shadow-xl'>
      <nav className='container mx-auto px-2 sm:px-8 '>
        <ul className='flex flex-wrap items-center justify-between py-[10px] text-lg'>
          <li className='underlined-animated group relative group-hover:border-b-2 border-b-4 border-transparent hover:border-primary'>
            <button
              onClick={() => setMenu(!menu)}
              className=' flex items-center gap-1 font-semibold'
            >
              <span>Categories</span>
              <ArrowDropDownIcon className='transform transition-transform duration-300 hover:rotate-180 flex text-xs text-primary-color text-primary' />
            </button>
            {menu && (
              <div className=' my-2  absolute w-80 bg-white top-[30px] z-20 shadow-lg'>
                <ul>
                  {parentCategories.map((p, idx) => (
                    <>
                      <li key={idx} className='py-2 px-4 group'>
                        <a href={`/category/${p.$id}`}>{p.name}</a>
                      </li>
                    </>
                  ))}
                </ul>
              </div>
            )}
          </li>
          <li className='underlined-animated border-b-4 border-transparent hover:border-primary'>
            <a href='/'>Home</a>
          </li>
          {navbar && navbar.map((nav, idx) => (<li className='underlined-animated border-b-4 border-transparent hover:border-primary'>
            <a href='/'>{nav?.name}</a>
          </li>))}
          
          <li className='underlined-animated border-b-4 border-transparent hover:border-primary'>
            <a href='faqs.html'>FAQ's</a>
          </li>
          <li className='underlined-animated border-b-4 border-transparent hover:border-primary'>
            <a href='contact-us.html'>Contact Us</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Menu;
