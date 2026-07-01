import React from 'react'

const Hero = () => {
    return (
        <section className='flex-full bg-[linear-gradient(135deg,#3795DB_0%,#004CB2_50%,#001C66_100%)] py-[70px] px-[90px]'>
            <div className='col-center   w-full h-full bg-white'>


                <div className='w-full h-[70%] grid grid-cols-1 md:grid-cols-7 bg-white border border-black' >



                    <div className='w-full h-full p-[20px] md:col-span-2  border border-black  '>
                        <div>
                            <div>
                                <h1 className='text-center  text-gradient text-[30px]  leading-tight mb-2'>
                                    Despre Mine
                                </h1>

                                <p className='block text-center text-gray-600 text-[16px]'>Dezvoltator Front-End pasionat de web development și de propunerea  ideilor în proiecte practice. Sunt în căutarea unei oportunități într-o echipă dinamică, unde să-mi extind cunoștințele, să învăț de la cei din jurul meu ,contribuind activ la dezvoltarea proiectelor.</p>
                            </div>
                        </div>
                        <div className='col-center gap-[15px] mt-[29px] '>
                            <div className='border-gradient py-1 px-6 text-center'>Educatie: Colegiul “I. Hajdeu” Cahul</div>
                            <div className='border-gradient py-1 px-6 text-center'>Varsta: 19 ani</div>
                            <div className='border-gradient py-1 px-6 text-center'>Dorinta Principala: Invatare -Crestere</div>
                        </div>
                    </div>




                    <div className='w-full md:col-start-3 md:col-span-3 relative z-10'>


                        <div className='absolute inset-x-0 -top-10 -bottom-6 gradient-secundar rounded-3xl col-center  shadow-[0px_10px_30px_10px_#4b5563] gap-[10px] px-[10px] '>




                            <div className='  w-full h-[50%] flex items-end justify-center'>
                                <img src="/public/IMG-20260220-WA0000.jpg" className='h-[90%] w-[40%] bg-center object-cover rounded-full  ' alt="" />
                            </div>




                            <div className=' w-full text-center h-[20%] border-b border-gray-400 '>
                                <h1 className='w-full text-center text-white text-[30px] font-semibold'>Frontend Developer</h1>
                                <h1 className='w-full text-center text-white text-[24px]'>Cirjeu Dumitru</h1>

                            </div>


                            <div className='w-full h-[40%] flex flex-col justify-center items-center gap-1'>
                                <h1 className='text-center text-white text-[28px] font-semibold leading-tight mb-2'>
                                    Contact
                                </h1>

                                <a href='mailto:cirjeu.dumitru@elev.cihcahul.md' className='block text-center text-white text-[18px] hover:underline leading-tight'>
                                    Email: cirjeu.dumitru@elev.cihcahul.md
                                </a>

                                <a href='tel:+37367100431' className='block text-center text-white text-[18px] hover:underline leading-tight'>
                                    Telefon: +37367100431
                                </a>

                                <p className='text-center text-white text-[18px] leading-tight'>
                                    Locuinta: Cahul, Moldova
                                </p>
                            </div>





                        </div>
                    </div>



                    <div className='w-full h-full md:col-span-2 border border-black '>

                    </div>



                </div>
                <div className='w-full h-[30%]  bg-white border border-red-200' >


                </div>
            </div>
        </section>
    )
}

export default Hero