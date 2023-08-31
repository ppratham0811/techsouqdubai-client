import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import { Link } from 'react-router-dom';
import Heading from '../../../Widgets/Heading';
import { addToCart } from '../../../app/cartSlice';
import { useDispatch, useSelector } from 'react-redux';
import { store } from '../../../app/persist';
import { addToWishlist } from '../../../app/wishlistSlice';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 748 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 748, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

/* ########## OFFERS ########## */
const Products = ({ title, products }) => {
  const dispatch = useDispatch();

  function trimCharacters(str) {
    return str.substring(3, str.length - 4);
  }

  const addProductToCart = (product) => {
    dispatch(addToCart({ productId: product.$id, product, qty: 1 }));
  };

  const addProductToWishlist = (product) => {
    dispatch(addToWishlist(product));
  };

  return (
    <>
      <Heading title={title} />
      <div className='md:px-8 px-3 '>
        <Carousel
          responsive={responsive}
          itemClass='w-full flex justify-center p-3'
          className='w-full'
        >
          {products?.map((prod, idx) => {
            return (
              <div key={prod.$id} className='flex flex-col h-full'>
                <div className='card-container  transition-all-300 translateY-2 relative flex h-full flex-col  rounded-lg bg-white p-5 shadow-md hover:z-[2] hover:shadow-xl'>
                  <div className='absolute top-[10px] right-[10px]'>
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
                    <p className='clamp-2 line-clamp-3 text-sm text-gray-400'>
                      {trimCharacters(prod.description)}
                    </p>
                  </div>

                  <div className='mt-auto'>
                    <a
                      className='btn-effect transition-all-300  flex w-full items-center justify-center rounded-lg bg-primary px-3 py-4'
                      href={`/products/${prod.$id}`}
                    >
                      <span className='font-bold uppercase text-white'>
                        View details
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </Carousel>
        ;
      </div>
    </>
  );
};

export default Products;
