import FooterWeb from "../components/footerWeb";
import HeroSection from "../components/heroSection";
import ItemListContainer from "../components/itemListContainer";

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