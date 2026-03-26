import ShaderBackground from "@/components/ShaderBackground"
import HeroContent from "@/components/HeroContent"
import PulsingCircle from "@/components/PulsingCircle"
import Header from "@/components/Header"
import Services from "@/components/Services"
import Contacts from "@/components/Contacts"
import Reviews from "@/components/Reviews"

const Index = () => {
  return (
    <>
      <ShaderBackground>
        <Header />
        <HeroContent />
        <PulsingCircle />
      </ShaderBackground>
      <Services />
      <Reviews />
      <Contacts />
    </>
  )
}

export default Index