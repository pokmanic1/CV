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

    // ------------------------------------ timeline are acum un default ease/duration, deci mișcările sunt mai unitare ------------------------------------
    const tl = gsap.timeline({
        defaults: { ease: "power3.out", duration: 0.7 }
    });

    tl.from(".sectiuneaPrincipala", {
        y: 200,
        opacity: 0,
        scale: 0.75,
        duration: 1.2,
        ease: "back.out(1.5)"
    })

    // ------------------------------------ overlap mai mare + ease mai "pop" pentru poză ------------------------------------
    .from(".heroImg", {
        scale: 0,
        rotation: 25,
        opacity: 0,
        duration: 0.6,
        ease: "back.out(2.2)"
    }, "-=0.6")

    .from(h1Split.words, {
        opacity: 0,
        y: 20,
        stagger: 0.06
    }, "-=0.3")

    .from(h1NumeSplit.chars, {
        opacity: 0,
        y: 20,
        stagger: 0.02
    }, "-=0.2")

    .from(h1ContactSplit.words, {
        opacity: 0,
        y: 20,
        stagger: 0.03
    }, "-=0.2")

    .from(".aEmail, .aTel, .pLocuinta", {
        opacity: 0,
        y: 15,
        stagger: 0.1
    }, "-=0.15")

    .from(h1DespreMine.chars, {
        opacity: 0,
        y: 15,
        stagger: 0.02
    }, "-=0.3")

    .from(pDespreMine.lines, {
        opacity: 0,
        y: 15,
        stagger: 0.2
    }, "-=0.1")

    .from(".educationCard", {
        opacity: 0,
        x: -30,
        scale: 0.9,
        stagger: 0.15,
        duration: 0.4
    }, "-=0.1")

    .from(h1SkillSplit.chars, {
        opacity: 0,
        y: 20,
        stagger: 0.03
    }, "-=0.6")

    .from(".skillCard", {
        opacity: 0,
        x: 50,
        scale: 0.9,
        stagger: 0.1,
        duration: 0.55,
        ease: "back.out(1.7)"
    }, "-=0.2")

    .from(".heroButton", {
        opacity: 0,
        y: 40,
        scale: 0.8,
        duration: 0.6,
        ease: "back.out(1.6)"
    }, "-=0.1");

    gsap.to(".heroImg", {
        y: -8,
        duration: 2.4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
    });

    
});





    return (
        <section ref={containerRef} className='flex-center w-full min-h-dvh bg-[linear-gradient(135deg,#3795DB_0%,#004CB2_50%,#001C66_100%)] py-8 px-4 sm:py-10 sm:px-6 md:py-12 md:px-10 lg:py-[10px] lg:px-[90px]'>
            <div className='col-center w-full h-full bg-white'>


                <div className='w-full h-auto lg:h-[70%] grid grid-cols-1 lg:grid-cols-7 bg-white gap-y-10 lg:gap-y-0 lg:rounded-none rounded-[20px] ' >



                    <div className='w-full h-full p-4 sm:p-5 md:p-[20px] lg:col-span-2 order-2 lg:order-1'>
                        <div >
                            <div>
                                <h1 className='h1DespreMine text-center  text-blue-600 text-[22px] sm:text-[26px] md:text-[30px]  leading-tight mb-4'>
                                    Despre Mine
                                </h1>

                                <p className='pDEspreMine block text-center text-gray-600 text-[14px] sm:text-[15px] md:text-[16px]'>Dezvoltator Front-End pasionat de web development și de propunerea  ideilor în proiecte practice. Sunt în căutarea unei oportunități într-o echipă dinamică, unde să-mi extind cunoștințele, să învăț de la cei din jurul meu ,contribuind activ la dezvoltarea proiectelor.</p>
                            </div>
                        </div>
                        <div className='col-center gap-[15px] mt-[29px] '>
                            <div className='educationCard  border-gradient py-1 px-4 sm:px-6 text-center text-[14px] sm:text-[16px]'>Educație: Colegiul „I. Hasdeu” Cahul</div>
                            <div className='educationCard  border-gradient py-1 px-4 sm:px-6 text-center text-[14px] sm:text-[16px]'>Vârsta: 19 ani</div>
                            <div className='educationCard  border-gradient py-1 px-4 sm:px-6 text-center text-[14px] sm:text-[16px]'>Dorința Principală: Învățare - Creștere</div>
                        </div>
                    </div>




                    <div className='w-full lg:col-start-3 lg:col-span-3 relative z-10 order-1 lg:order-2 min-h-[480px] sm:min-h-[520px] md:min-h-[520px] lg:min-h-0'>


                        <div className='sectiuneaPrincipala absolute inset-x-0 top-0 bottom-0 lg:-top-12 lg:-bottom-0 gradient-secundar rounded-3xl col-center  shadow-[0px_10px_30px_10px_#4b5563] gap-[10px] px-[10px] '>




                            <div className='  w-full h-[50%] flex items-end justify-center'>
                                <img src="/public/IMG-20260220-WA0000.jpg" className='heroImg  h-[85%] sm:h-[90%] w-[55%] sm:w-[45%] md:w-[40%] bg-center object-cover rounded-full  ' alt="" />
                            </div>




                            <div className=' w-full text-center h-[20%] border-b border-gray-400 '>
                                <h1 className='h1FrontEnd w-full text-center text-white text-[22px] sm:text-[26px] md:text-[30px] font-semibold'>Frontend Developer</h1>
                                <h1 className='h1Nume w-full text-center text-white text-[18px] sm:text-[21px] md:text-[24px]'>Cirjeu Dumitru</h1>

                            </div>


                            <div className='w-full h-[40%] flex flex-col justify-center items-center gap-1 px-2'>
                                <h1 className='h1Contact text-center text-white text-[20px] sm:text-[24px] md:text-[28px] font-semibold leading-tight mb-2'>
                                    Contact
                                </h1>

                                <a href='mailto:cirjeu.dumitru@elev.cihcahul.md' className='aEmail block text-center text-white text-[13px] sm:text-[15px] md:text-[18px] hover:underline leading-tight break-all'>
                                    Email: cirjeu.dumitru@elev.cihcahul.md
                                </a>

                                <a href='tel:+37367100431' className='aTel block text-center text-white text-[13px] sm:text-[15px] md:text-[18px] hover:underline leading-tight'>
                                    Telefon: +37367100431
                                </a>

                                <p className='pLocuinta text-center text-white text-[13px] sm:text-[15px] md:text-[18px] leading-tight'>
                                    Locuinta: Cahul, Moldova
                                </p>
                            </div>





                        </div>
                    </div>


                    <div className='  w-full h-full lg:col-span-2  p-4 sm:p-5 md:p-[20px] order-3   '>
                        <h1 className='h1Skill  text-center  text-blue-600 text-[22px] sm:text-[26px] md:text-[30px]  leading-tight mb-6'>
                            Skilluri
                        </h1>

                        <div className='col-center  gap-[16px] sm:gap-[20px]'>


                            {arr.map((item) => (
                                <div key={item.id} className='skillCard  w-full max-w-[280px] sm:min-w-[200px] py-2 px-3 flex items-center justify-center gap-[10px] shadow-[0px_2px_30px_2px_rgba(0,90,240,0.5)] rounded-xl text-center scale-95 hover:scale-105'>
                                    <img src={item.img} className='block object-center object-cover bg-center w-[24px] sm:w-[28px] shrink-0' alt="" />
                                    <p className='text-[14px] sm:text-[16px]'>{item.name}</p>
                                </div>
                            ))}



                        </div>
                    </div>



                </div>


                <div className='w-full h-auto lg:h-[30%]  bg-white  flex-center p-6 sm:p-8 md:p-[30px]' >

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
                        className='heroButton  min-w-[140px] sm:min-w-[10%] py-2 px-6 sm:px-9  flex justify-center items-start mt-auto border-2 bg-gray-200 border-black rounded-2xl'>
                        <Link to="/portofoliu" className='text-[14px] sm:text-[16px]'>Vezi mai mult</Link>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default Hero