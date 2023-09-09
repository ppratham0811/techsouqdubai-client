import SendIcon from '@mui/icons-material/Send';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getCategories } from '../../actions';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

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
                    {cats.length > 0 &&
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
                  Follow us on our Socials!
                </h3>
                <span className='py-2 text-sm'>
                  Be the first to know about all the upcoming updates.
                </span>

                <div className='flex gap-2 py-2'>
                  <div className='relative h-8 w-8 overflow-hidden rounded-full'>
                    <a
                      className='instagram-before flex h-8 w-8 items-center justify-center bg-gray-rgba text-center '
                      href='https://www.instagram.com/kamptech11/'  target='_blank'
                    >
                      <InstagramIcon />
                    </a>
                  </div>
                  <div className='transition-all-300 h-8 w-8 rounded-full bg-gray-rgba hover:bg-facebook'>
                    <a
                      className='flex h-8 w-8 items-center justify-center'
                      href='https://www.facebook.com/profile.php?id=100091748850716&mibextid=ZbWKwL' target='_blank'
                    >
                      <FacebookIcon />
                    </a>
                  </div>
                  <div className='transition-all-300 h-8 w-8 rounded-full bg-gray-rgba hover:bg-twitter'>
                    <a
                      className='flex h-8 w-8 items-center justify-center'
                      href='https://twitter.com/Kamptech11/' target='_blank'
                    >
                      <TwitterIcon />
                    </a>
                  </div>
                  <div className='transition-all-300 h-8 w-8 rounded-full bg-gray-rgba hover:bg-youtube'>
                    <a
                      className='flex h-8 w-8 items-center justify-center'
                      href='https://www.linkedin.com/company/kamptech-solutions/' target='_blank'
                    >
                      <LinkedInIcon />
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
