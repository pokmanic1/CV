import React from 'react'
import { useRef } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';



const arr = [
    {
        id: 1,
        name: 'Git',
        img: '/public/git.png'
    },
    {
        id: 2,
        name: 'Tailwind CSS',
        img: '/public/tailw.png'
    },
    {
        id: 3,
        name: 'JavaScript',
        img: '/public/js.png'
    },
    {
        id: 4,
        name: 'React',
        img: '/public/react.png'
    },
    {
        id: 5,
        name: 'GSAP',
        img: '/public/GSAP.png'
    },
    {
        id: 6,
        name: 'Framer Motion',
        img: '/public/Framar.png'
    }
]


const Hero = () => {

    const containerRef = useRef(null);
   useGSAP(() => {
    const h1Split = new SplitText(".h1FrontEnd", { type: "words" });
    const h1NumeSplit = new SplitText(".h1Nume", { type: "chars" });
    const h1ContactSplit = new SplitText(".h1Contact", { type: "words" });
    const h1DespreMine = new SplitText(".h1DespreMine", { type: "chars" });
    const pDespreMine = new SplitText(".pDEspreMine", { type: "lines" });
    const h1SkillSplit = new SplitText(".h1Skill", { type: "chars" });

    const tl = gsap.timeline();

    tl.from(".sectiuneaPrincipala", {
        y: 200,
        opacity: 0,
        scale: 0.75,
        duration: 1.1,
        ease: "back.out(1.4)"
    })

    .from(".heroImg", {
        scale: 0,
        rotation: 25,
        opacity: 0,
        duration: 0.8,
        ease: "back.out(2)"
    }, "-=0.4")

    .from(h1Split.words, {
        opacity: 0,
        y: 20,
        stagger: 0.05
    }, "-=0.2")

    .from(h1NumeSplit.chars, {
        opacity: 0,
        y: 20,
        stagger: 0.03
    })

    .from(h1ContactSplit.words, {
        opacity: 0,
        y: 20,
        stagger: 0.05
    })

    .from(".aEmail, .aTel, .pLocuinta", {
        opacity: 0,
        y: 15,
        stagger: 0.2
    })

    .from(h1DespreMine.chars, {
        opacity: 0,
        y: 15,
        stagger: 0.03
    })

    .from(pDespreMine.lines, {
        opacity: 0,
        y: 15,
        stagger: 0.2
    })

    .from(".educationCard", {
        opacity: 0,
        x: -30,
        scale: 0.9,
        stagger: 0.15,
        duration: 0.5
    })

    .from(h1SkillSplit.chars, {
        opacity: 0,
        y: 20,
        stagger: 0.03
    })

    .from(".skillCard", {
        opacity: 0,
        x: 50,
        stagger: 0.12,
        duration: 0.5
    })

    .from(".heroButton", {
        opacity: 0,
        y: 40,
        scale: 0.8,
        duration: 0.6
    });

    gsap.to(".heroImg", {
        y: -8,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut"
    });

    gsap.to(".sectiuneaPrincipala", {
        boxShadow: "0px 10px 45px 12px rgba(59,130,246,0.35)",
        duration: 2,
        repeat: -1,
        yoyo: true
    });
});





    return (
        <section ref={containerRef} className='flex-full bg-[linear-gradient(135deg,#3795DB_0%,#004CB2_50%,#001C66_100%)] py-[70px] px-[90px]'>
            <div className='col-center   w-full h-full bg-white'>


                <div className='w-full h-[70%] grid grid-cols-1 md:grid-cols-7 bg-white ' >



                    <div className='w-full h-full p-[20px] md:col-span-2    '>
                        <div >
                            <div>
                                <h1 className='h1DespreMine text-center  text-blue-600 text-[30px]  leading-tight mb-4'>
                                    Despre Mine
                                </h1>

                                <p className='pDEspreMine block text-center text-gray-600 text-[16px]'>Dezvoltator Front-End pasionat de web development și de propunerea  ideilor în proiecte practice. Sunt în căutarea unei oportunități într-o echipă dinamică, unde să-mi extind cunoștințele, să învăț de la cei din jurul meu ,contribuind activ la dezvoltarea proiectelor.</p>
                            </div>
                        </div>
                        <div className='col-center gap-[15px] mt-[29px] '>
                            <div className='educationCard  border-gradient py-1 px-6 text-center '>Educație: Colegiul „I. Hasdeu” Cahul</div>
                            <div className='educationCard  border-gradient py-1 px-6 text-center '>ârsta: 19 ani</div>
                            <div className='educationCard  border-gradient py-1 px-6 text-center '>Dorința Principală: Învățare - Creștere</div>
                        </div>
                    </div>




                    <div className='w-full md:col-start-3 md:col-span-3 relative z-10'>


                        <div className='sectiuneaPrincipala absolute inset-x-0 -top-12 -bottom-13 gradient-secundar rounded-3xl col-center  shadow-[0px_10px_30px_10px_#4b5563] gap-[10px] px-[10px] '>




                            <div className='  w-full h-[50%] flex items-end justify-center'>
                                <img src="/public/IMG-20260220-WA0000.jpg" className='heroImg  h-[90%] w-[40%] bg-center object-cover rounded-full  ' alt="" />
                            </div>




                            <div className=' w-full text-center h-[20%] border-b border-gray-400 '>
                                <h1 className='h1FrontEnd w-full text-center text-white text-[30px] font-semibold'>Frontend Developer</h1>
                                <h1 className='h1Nume w-full text-center text-white text-[24px]'>Cirjeu Dumitru</h1>

                            </div>


                            <div className='w-full h-[40%] flex flex-col justify-center items-center gap-1'>
                                <h1 className='h1Contact text-center text-white text-[28px] font-semibold leading-tight mb-2'>
                                    Contact
                                </h1>

                                <a href='mailto:cirjeu.dumitru@elev.cihcahul.md' className='aEmail block text-center text-white text-[18px] hover:underline leading-tight'>
                                    Email: cirjeu.dumitru@elev.cihcahul.md
                                </a>

                                <a href='tel:+37367100431' className='aTel block text-center text-white text-[18px] hover:underline leading-tight'>
                                    Telefon: +37367100431
                                </a>

                                <p className='pLocuinta text-center text-white text-[18px] leading-tight'>
                                    Locuinta: Cahul, Moldova
                                </p>
                            </div>





                        </div>
                    </div>


                    <div className='  w-full h-full md:col-span-2  p-[20px]   '>
                        <h1 className='h1Skill  text-center  text-blue-600 text-[30px]  leading-tight mb-6'>
                            Skilluri
                        </h1>

                        <div className='col-center  gap-[20px]'>


                            {arr.map((item) => (
                                <div key={item.id} className='skillCard  min-w-[200px] py-[2px] flex items-center justify-center gap-[8px] shadow-[0px_2px_30px_2px_rgba(0,90,240,0.5)] rounded-xl text-center scale-95 hover:scale-105'>
                                    <img src={item.img} className='block object-center object-cover bg-center w-[8%]' alt="" />
                                    <p>{item.name}</p>
                                </div>
                            ))}



                        </div>
                    </div>



                </div>


                <div className='w-full h-[30%]  bg-white  flex-center p-[30px]' >

                    <motion.div
                        whileHover={{
                            scale: 1.05,
                            y: -2,
                            x: 0,
                            rotate: 0,
                            opacity: 1,
                            backgroundColor: "#f3f4f6"
                        }}
                        whileTap={{
                            scale: 0.9,
                            y: 1
                        }}


                        transition={{
                            type: "spring",
                            stiffness: 300,
                            damping: 6,
                            mass: 0.8,
                            duration: 0.3,
                        }}
                        className='heroButton  min-w-[10%] py-2 px-9  flex justify-center items-start mt-auto border-2 bg-gray-200 border-black rounded-2xl'>
                        <Link to="/portofoliu" className=''>Vezi mai mult</Link>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default Hero