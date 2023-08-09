import HeroSection from "../components/heroSection";
import ItemListContainer from "../components/itemListContainer";

function Home () {

  return (
    <>
      <HeroSection></HeroSection>
      <ItemListContainer greetings={"Welcome"}></ItemListContainer>
    </>

  )

}

export default Home;