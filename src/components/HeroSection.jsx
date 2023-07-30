import Image  from 'react-bootstrap/Image';
import shoeImage from '../assets/whiteShoes.jpg';
import Button from "react-bootstrap/Button";
import "../styles/HeroSection.css";


function HeroSection () {
	
	return (
		<div className="contenedorHero d-flex justify-content-center align-items-center align-content-center">
      <div className='containerShoeImage'>
          <Image
            src={shoeImage}
            fluid
          />
        </div>   
      <div className="contenedorTexto text-center">
        <h1 className="tituloHero text-light text-center">Step into Style</h1>
        <Button className="mt-3" variant="light" size="lg">Shop Now</Button>
      </div>   
		</div>
	)

}

export default HeroSection;



/* <Row>
					<Col>
          <div className='mt-3'>
            <Carousel>
              <Carousel.Item>
                <img
                  className="d-block w-100 rounded active"
                  src="https://dummyimage.com/600x400/000/fff.png&text=Sneaker+Vault"
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h3>Featured Product 1</h3>
                  <p>$100</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100 rounded"
                  src="https://dummyimage.com/600x400/000/fff.png&text=Sneaker+Vault"
                  alt="Second slide"
                />
                <Carousel.Caption>
                  <h3>Featured Product 2</h3>
                  <p>$100</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100 rounded"
                  src="https://dummyimage.com/600x400/000/fff.png&text=Sneaker+Vault"
                  alt="Third slide"
                />
                <Carousel.Caption>
                  <h3>Featured Product 3</h3>
                  <p>
                    $100.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </div>
					</Col>
				</Row> */