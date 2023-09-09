import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import '../Dashboard/CarouselImages.css';
import { useNavigate } from 'react-router-dom';

const CarouselImages = ({ setLoad, load }) => {
  const navigate = useNavigate();

  return (
    <div className='w-full flex h-full rounded-lg '>
      <Carousel
        showThumbs={false}
        showArrows={true}
        showIndicators={true}
        showStatus={false}
        infiniteLoop={true}
        swipeable={true}
        autoPlay={true}
        className='w-full h-full rounded-lg '
        onClickItem={(index) => {
          switch (index) {
            case 0:
              navigate('/search', { state: { searchTerm: 'msi' } });
              break;
            case 1:
              navigate('/search', { state: { searchTerm: 'airocide' } });
              break;
            case 2:
              navigate('/search', { state: { searchTerm: 'fighter flex system' } });
              break;
            case 3:
              navigate('/search', { state: { searchTerm: 'halo' } });
              break;
            default:
              navigate('/search', { state: { searchTerm: '' } });
              break;
          }
        }}
      >
        <img
          loading='lazy'
          onLoadStart={setLoad(true)}
          onLoad={setLoad(false)}
          src='https://appwrite.techsouqdubai.com/v1/storage/buckets/647724cbbee87d2e8f59/files/64772506bd1d1a8ea931/view?project=646339a61beac87efd09&mode=admin'
          alt='banner1'
          className='bg-green-100 object-cover rounded-lg'
        />

        <img
          loading='lazy'
          onLoadStart={setLoad(true)}
          onLoad={setLoad(false)}
          src='https://appwrite.techsouqdubai.com/v1/storage/buckets/647724cbbee87d2e8f59/files/6477428a26296fd65760/view?project=646339a61beac87efd09&mode=admin'
          alt='banner1'
          className='bg-green-100 object-cover rounded-lg'
        />

        <img
          loading='lazy'
          src='https://appwrite.techsouqdubai.com/v1/storage/buckets/647724cbbee87d2e8f59/files/64774295a6f8f40b527b/view?project=646339a61beac87efd09&mode=admin'
          className='w-full bg-green-100 object-cover rounded-lg'
        />

        <img
          loading='lazy'
          src='https://appwrite.techsouqdubai.com/v1/storage/buckets/647724cbbee87d2e8f59/files/6477429ab9da4c61356c/view?project=646339a61beac87efd09&mode=admin'
          className='w-full bg-green-100 object-cover rounded-lg'
        />
      </Carousel>
    </div>
  );
};

export default CarouselImages;
