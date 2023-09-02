import FooterWeb from "../components/FooterWeb";
import HeroSection from "../components/HeroSection";
import ItemListContainer from "../components/ItemListContainer";

function Home () {

  return (
    <>
      <HeroSection/>
      <ItemListContainer greetings={"Welcome"}></ItemListContainer>
      <FooterWeb/>
    </>

  )

}

export default Home;