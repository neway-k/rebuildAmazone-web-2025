import React from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import classes from "./carousel.module.css";
import { Carousel } from "react-responsive-carousel";
import { img } from "./img/data";
import "react-responsive-carousel/lib/styles/carousel.min.css";

// const Carousel = () => {
//   const images = [
//     "https://m.media-amazon.com/images/I/61DUO0NqyyL._SX3000_.jpg",
//     "https://m.media-amazon.com/images/I/71qid7QFWJL._SX3000_.jpg",
//     "https://m.media-amazon.com/images/I/81KkrQWEHIL._SX3000_.jpg",
//     "https://m.media-amazon.com/images/I/71U-Q+N7PXL._SX3000_.jpg",
//   ];

//   const settings = {
//     dots: true, // show navigation dots
//     infinite: true, // loop forever
//     speed: 500, // transition speed
//     slidesToShow: 1, // show one slide
//     slidesToScroll: 1, // scroll one slide
//     autoplay: true, // auto play
//     autoplaySpeed: 3000, // delay 3s
//     arrows: true, // left/right arrows
//   };

//   return (
//     <div
//       className={classes.carousel}
//       style={{ margin: "0 auto", maxWidth: "100%" }}
//     >
//       <Slider {...settings}>
//         {images.map((img, index) => (
//           <div key={index} className={classes.carousel__slide}>
//             <img
//               src={img}
//               alt={`Slide ${index}`}
//               style={{ width: "100%", height: "600px", objectFit: "cover" }}
//             />
//           </div>
//         ))}
//       </Slider>
//     </div>
//   );
// };

// export default Carousel;

const CarouselEffect = () => {
  return (
    <div>
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showIndicators={false}
        showThumbs={false}
      >
        {img.map((imageItemLink) => {
          return <img src={imageItemLink} />;
        })}
      </Carousel>
      <div className={classes.hero__img}></div>
    </div>
  );
};

export default CarouselEffect;
