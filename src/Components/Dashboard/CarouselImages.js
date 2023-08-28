import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import '../Dashboard/CarouselImages.css'

const CarouselImages = () => {
  return (
    <div className='w-full flex h-full rounded-lg'>
         <Carousel
            showThumbs={false}
            showArrows={true}
            showIndicators={true}
            showStatus={false}
            infiniteLoop={true}
            swipeable={true}
            autoPlay={true}
            className='w-full h-full rounded-lg bg-purple-100'
         >
                
                    <img src="https://appwrite.techsouqdubai.com/v1/storage/buckets/647724cbbee87d2e8f59/files/6477428a26296fd65760/view?project=646339a61beac87efd09&mode=admin" alt='banner1' className='bg-green-100 object-cover rounded-lg'/>
                    
             
                    <img src="https://appwrite.techsouqdubai.com/v1/storage/buckets/647724cbbee87d2e8f59/files/64774295a6f8f40b527b/view?project=646339a61beac87efd09&mode=admin" className='w-full bg-green-100 object-cover rounded-lg' />
                    
                    <img src="https://appwrite.techsouqdubai.com/v1/storage/buckets/647724cbbee87d2e8f59/files/6477429ab9da4c61356c/view?project=646339a61beac87efd09&mode=admin" className='w-full bg-green-100 object-cover rounded-lg' />
                    
            </Carousel>
    </div>
  )
}

export default CarouselImages