import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import "./style.css"

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

function Slider() {
  return (
    <div className="slider-container">
      <Carousel responsive={responsive} autoPlay={true} autoPlaySpeed={2000} infinite={true} removeArrowOnDeviceType={["tablet", "mobile"]}>
        <span className="img-1"></span>
        <span className="img-2"></span>
        <span className="img-3"></span>
        <span className="img-4"></span>
        <span className="img-5"></span>
        <span className="img-6"></span>
      </Carousel>
      ;
    </div>
  );
}

export default Slider;
