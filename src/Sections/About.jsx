import { useRef } from "react";
import Card from "../Components/card";
import { Globe } from "../Components/globe";
import CopyEmail from "../Components/CopyEmail";
import { Frameworks } from "../Components/Frameworks";

const About = () => {
    const grid2Container=useRef();
  return <section className="c-space section-spacing">
    <h2 className="text-heading">About Me</h2>
    <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12">
        {/* Grid 1*/}
        <div className="flex items-end grid grid-default-color grid-1">
        <img src="assets/coding.jpg" className="w-full h-full object-cover rounded "/>
        <div className="z-10">
            <p className="headtext">Hi, Im Indrapal</p>
            <p className="subtext">Over the past year I have developed my skills in Machine Learning and am actively applying them on datasets </p>
        </div>
        </div>
        {/* Grid 2*/}     
        <div ref={grid2Container} className="grid-default-color grid-2">
            <div className="flex items-center justify-center h-full w-full">
                <p className="flex items-end text-5xl text-gray-500">
                    CODING IS MAGIC
                </p>
                <Card containerRef={grid2Container} style={{rotate:"75deg", top:"30%", left:"20%"}} text="EXPLORE"/>
                <Card containerRef={grid2Container} style={{rotate:"-30deg", top:"60%", left:"45%"}} text="GRASP"/>
                <Card containerRef={grid2Container} style={{rotate:"-45deg", top:"55%", left:"0%"}} text="VISION"/>
                <Card containerRef={grid2Container} style={{rotate:"95deg", bottom:"30%", left:"70%"}} text="CREATE"/>
                
            </div>
        </div>
        {/* Grid 3*/}
        <div className="grid-black-color grid-3">
            <div className="z-10 w-[50%]"> 
                <p className="text-4xl"> +5:30 </p>
                <p className="subtext">Im based in India and am open to work worldwide</p>
            </div>
            <figure className="absolute left-[30%] top-[10%]">
                <Globe/>
            </figure>
        </div>
        {/* Grid 4*/}
        <div className="grid-special-color grid-4">
            <div className="flex flex-col items-center justify-center gap-4 size-full">
                <p className="text-center headtext">
                    Do You want to start a project Together ? 👉👈
                </p>
                <CopyEmail/>
            </div>
        </div>
        {/* Grid 5*/}
        <div className="grid-default-color grid-5">
            <div className="z-10 w-[50%]">
                <p className="headtext"> Tech Stack</p>
                <p className="subtext">
                    Specialized in various kinds of frameworks, languages and tools in Machine Learning and Web Development .
                </p>
            </div>
            <div className="absolute inset-y-0 md:inset-y-9 w-full h-full start-[50%] md:scale-125">
                <Frameworks/>
            </div>
        </div>
    </div>
  </section>;
}

export default About
