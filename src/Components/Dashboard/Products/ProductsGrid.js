import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import { Link } from 'react-router-dom';
import Heading from '../../../Widgets/Heading';
import {
  addToCart,
  currentCartState,
  existsInCart,
  updateQty,
} from '../../../app/cartSlice';
import { useDispatch, useSelector } from 'react-redux';
import { store } from '../../../app/persist';
import { addToWishlist } from '../../../app/wishlistSlice';

import { useEffect, useState } from 'react';

/* ########## OFFERS ########## */
const Products = ({ title, products }) => {
  const dispatch = useDispatch();
  const currentCart = useSelector(currentCartState);
  const [toast, setToast] = useState('');
  useEffect(() => {
    setTimeout(() => {
      if (toast.length > 0) {
        setToast('');
      }
    }, 2000);
  }, [toast]);
  function trimCharacters(str) {
    return str.substring(3, str.length - 4);
  }

  const addProductToCart = (product) => {
    let flag = null;
    for (let prod of currentCart) {
      if (prod.productId === product.$id) {
        flag = prod;
        break;
      }
    }

    if (flag) {
      dispatch(updateQty({ productId: flag.productId, qty: flag.qty + 1 }));
      setToast('Updated Cart');
    } else {
      dispatch(addToCart({ productId: product.$id, product, qty: 1 }));
      setToast('Added to Cart');
    }
  };

  const addProductToWishlist = (product) => {
    dispatch(addToWishlist(product));
  };

  return (
    <>
      <div
        className={`absolute top-0 z-[999999] left-1/2 transform -translate-x-1/2 ${
          toast ? 'top-2' : 'translate-y-[-100%]'
        } transition-all duration-300`}
      >
        {toast.length > 0 && (
          <div className='bg-green-500 px-4 py-2 text-white rounded'>
            <p>{toast}</p>
          </div>
        )}
      </div>
      <Heading title={title} />
      <div className='md:px-8 px-3 mb-3'>
        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4'>
          {products?.map((prod, idx) => {
            return (
              <div
                key={prod.$id}
                className='flex relative flex-col w-full h-full'
              >
                <div className='absolute z-10 top-[10px] left-[10px]'>
                  {prod.quantity < 1 ? (
                    <span className='bg-red-600 text-xs px-[8px] py-[3px] rounded-full text-white'>
                      SOLD OUT
                    </span>
                  ) :  prod.contactForPrice ? (
                    <span className='bg-yellow-500 text-xs px-[8px] py-[3px] rounded-full text-white'>
                      CONTACT FOR PRICE
                    </span>
                  ) : null}
                </div>
                {prod.quantity > 0 && !prod.contactForPrice ? (
                  <div className='absolute z-10 top-[10px] right-[10px]'>
                    <div
                      className='p-[2px] transition-all-300 flex h-9 w-9 cursor-pointer items-center justify-center rounded-lg bg-gray-400 text-white hover:bg-primary-hover'
                      onClick={() => addProductToWishlist(prod)}
                    >
                      <FavoriteBorderIcon />
                    </div>
                    <div
                      className='p-[2px] my-2 transition-all-300 flex h-9 w-9 cursor-pointer items-center justify-center rounded-lg bg-gray-400 text-white hover:bg-primary-hover'
                      onClick={() => addProductToCart(prod)}
                    >
                      <AddShoppingCartOutlinedIcon />
                    </div>
                  </div>
                ) : null}
                <a href={`/products/${prod.$id}`} className='h-full'>
                  <div className='card-container  transition-all-300 translateY-2 relative flex h-full flex-col  rounded-lg bg-white p-5 shadow-md hover:z-[2] hover:shadow-xl hover:shadow-primary'>
                    <div className='h-[190px] flex w-full justify-center overflow-hidden rounded-lg'>
                      <a>
                        <img
                          className='object-contain h-full w-full'
                          src={prod.images[0]}
                          alt='product'
                        />
                      </a>
                    </div>
                    <div className='my-3'>
                      <a className='clamp break-normal text-lg md:text-xl font-medium'>
                        {prod.title}
                      </a>
                    </div>
                    <div className='mt-1 mb-6'>
                      <p className='clamp-2 line-clamp-3 break-normal text-sm text-gray-400'>
                        {trimCharacters(prod.description)}
                      </p>
                    </div>

                    {/* <div className="mt-auto">
                    <a
                      className="btn-effect transition-all-300  flex w-full items-center justify-center rounded-lg bg-primary px-3 py-4"
                      href={`/products/${prod.$id}`}
                    >
                      <span className="font-bold uppercase text-white">
                        View details
                      </span>
                    </a>
                  </div> */}
                  </div>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Products;
