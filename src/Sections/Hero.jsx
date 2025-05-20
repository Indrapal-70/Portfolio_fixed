import { Astronaut } from "../Components/Astronaut"
import HeroText from "../Components/HeroText"
import ParallaxBackgrounds from "../Components/ParallaxBackgrounds"
import { Canvas } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
const Hero = () => {
  return <section className="flex items-start justify-center md:items-start md:justify-start min-h-screen overflow-hidden c-space">
    <HeroText />
    <ParallaxBackgrounds />
    <figure className="absolute inset-0" style={{width:"77vw", height:"77vw"}}>
        <Canvas >
        <Astronaut scale={0.23} position = {[0,-1.5,0]}/>
        <OrbitControls enableZoom={false} enablePan={false} />
        </Canvas>      
    </figure>
  </section>
}

export default Hero
