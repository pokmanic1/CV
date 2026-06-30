import React from 'react'

const Hero = () => {
    return (
        <section className='flex-full bg-[linear-gradient(135deg,#3795DB_0%,#004CB2_50%,#001C66_100%)] py-[70px] px-[90px]'>
            <div className='col-center   w-full h-full bg-white'>
        
        
                <div className='w-full h-[70%] grid grid-cols-1 md:grid-cols-7 bg-white border border-black' >



                    <div className='w-full h-full p-[20px] md:col-span-2  border border-black  '>
                        <div>

                        </div>
                    </div>




                    <div className='w-full md:col-start-3 md:col-span-3 relative z-10'>
                        <div className='absolute inset-x-0 -top-10 -bottom-6 bg-blue-600 '>
                            
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