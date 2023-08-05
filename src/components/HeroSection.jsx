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