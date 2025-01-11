import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import {bannerData} from '../constants/data';
import { styled } from '@mui/material';




const Image = styled('img')({
    width: '100',  // Ensure the image takes up the full width of its container
    height: '280px',  // Specify a fixed height
    objectFit: 'cover',  // Ensures the image covers the container proportionally
});
  

const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };


  
  
  
  const Banner=()=>
{
    return(
        <Carousel 
        responsive={responsive}
        swipeable={false}
        draggable={false}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={4000}
        slidesToSlide={true}
        keyBoardControl={true}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        containerClass="carousel-container"

        
        >
            {
                bannerData.map(data=>(
                    <Image src={data.url} alt='banner'></Image>
                )

            )}
 
        </Carousel>
    )
}

export default Banner;