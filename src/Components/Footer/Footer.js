import SendIcon from '@mui/icons-material/Send';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getCategories } from '../../actions';

const Footer = () => {
  const navigate = useNavigate();
  const [cats, setCats] = useState([]);

  useEffect(() => {
    const loadAllCats = async () => {
      await getCategories().then((res) => setCats(res.documents));
    };
    loadAllCats();
  }, []);
  return (
    <>
      <footer className='footer-section mt-auto w-full bg-[#0b0d17] text-gray-400'>
        <div className='container mx-auto grid grid-cols-12 gap-2 px-4 sm:px-8'>
          <div className='col-span-12 mx-2 py-[50px]'>
            <div className='grid grid-cols-12 gap-4'>
              <div className='col-span-12 sm:col-span-6 lg:col-span-4'>
                <div className='py-3 flex gap-2 items-center'>
                  <img src='/logo2_white.png' className='h-[40px]' alt='logo' />
                  <h1
                    onClick={() => navigate('/')}
                    className='text-white cursor-pointer text-2xl text-bold'
                    style={{ fontFamily: "'Audiowide', cursive" }}
                  >
                    TechSouqDubai
                  </h1>
                </div>
                <div>
                  <div className='flex items-center py-2'>
                    <i className='bi bi-envelope-fill flex text-xl text-primary-color'></i>
                    <a className='break-normal'>
                      info@kamptechme.com , sales@kamptechme.com
                    </a>
                  </div>
                  <div className='flex items-center py-2'>
                    <i className='bi bi-telephone-fill flex text-xl text-primary-color'></i>
                    <a className='break-all' href='#'>
                      +971 564430949
                    </a>
                  </div>
                  <div className='flex items-center py-2'>
                    <i className='bi bi-geo-alt-fill flex text-xl text-primary-color'></i>
                    <span className='break-normal'>
                      Office No: 301-23, Al Masaood Tower, Al Maktoum Road,
                      Deira PO Box 390040 - Dubai
                    </span>
                  </div>
                </div>
              </div>
              <div className='col-span-12 py-5 sm:col-span-6 sm:py-0 lg:col-span-4'>
                <h3 className='pb-2 font-semibold text-gray-300'>
                  Useful Links
                </h3>
                <div>
                  <ul className='grid grid-cols-2 gap-2 text-sm'>
                    {cats.length>0 &&
                      cats.map((category) => {
                        return (
                          <li className='col-span-2 md:col-span-1 group relative flex items-center hover:text-primary-color'>
                            <i className='bi bi-circle-fill invisible absolute -left-4 flex text-[6px] text-primary-color group-hover:visible'></i>
                            <a
                              href={`/category/${category.$id}`}
                              className='transition-all-300 group-hover:text-white'
                            >
                              {category.name}
                            </a>
                          </li>
                        );
                      })}
                    
                  </ul>
                </div>
              </div>
              <div className='col-span-12 lg:col-span-4'>
                <h3 className='pb-2 font-semibold text-gray-300'>
                  Be the first to know it
                </h3>
                <span className='py-2 text-sm'>
                  Subscribe to receive updates on our store and special offers
                </span>
                <form className='py-2'>
                  <div className='flex overflow-hidden rounded-lg bg-gray-800 p-2'>
                    <input
                      className='w-full border-none bg-transparent pl-2 focus:border-none focus:ring-0 focus:ring-transparent'
                      type='text'
                      placeholder='Your email address'
                    />
                    <button className='p-1' type='submit'>
                      <SendIcon />
                    </button>
                  </div>
                </form>
                <div className='flex gap-2 py-2'>
                  <div className='relative h-8 w-8 overflow-hidden rounded-full'>
                    <a
                      className='instagram-before flex h-8 w-8 items-center justify-center bg-gray-rgba text-center text-white'
                      href='#'
                    >
                      <i className='bi bi-instagram relative z-[2] flex'></i>
                    </a>
                  </div>
                  <div className='transition-all-300 h-8 w-8 rounded-full bg-gray-rgba hover:bg-facebook'>
                    <a
                      className='flex h-8 w-8 items-center justify-center'
                      href='#'
                    >
                      <i className='bi bi-facebook flex text-white'></i>
                    </a>
                  </div>
                  <div className='transition-all-300 h-8 w-8 rounded-full bg-gray-rgba hover:bg-twitter'>
                    <a
                      className='flex h-8 w-8 items-center justify-center'
                      href='#'
                    >
                      <i className='bi bi-twitter flex text-white'></i>
                    </a>
                  </div>
                  <div className='transition-all-300 h-8 w-8 rounded-full bg-gray-rgba hover:bg-youtube'>
                    <a
                      className='flex h-8 w-8 items-center justify-center'
                      href='#'
                    >
                      <i className='bi bi-youtube flex text-white'></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-span-12 pb-5'>
            <p className='text-center'>
              © <span className='current-year'>2023</span> TechSouqDubai. All
              rights reserved
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
