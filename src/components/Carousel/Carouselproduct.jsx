import Carousel from 'react-bootstrap/Carousel'
import e1 from "./e1.jpg";
import board1 from "./board1.jpg";
import 'bootstrap/dist/css/bootstrap.min.css';

const CarouselProduct = (props) => {
    const{img1, img2, img3}= props
  return (
   
      <Carousel>
        <Carousel.Item>
                  <img className="d-block w-100" src={img1} alt="First slide" />
          <Carousel.Caption>
            
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={img2} alt="Second slide" />

          <Carousel.Caption>
            
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
                  <img className="d-block w-100" src={img3} alt="Third slide" />

          <Carousel.Caption>
            
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
  
  );
};

export default CarouselProduct;
