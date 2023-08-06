import HeroSection from "../components/heroSection";
import ItemListContainer from "../components/itemListContainer";
import NavBar from "../components/navBar";

function Home () {

  return (
    <>
      <NavBar></NavBar>
      <HeroSection></HeroSection>
      <ItemListContainer greetings={"Welcome"}></ItemListContainer>
    </>

  )

}

export default Home;