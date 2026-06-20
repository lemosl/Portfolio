import React from 'react'

const HeroSection = () => {
  return (
    <section className='relative w-full' data-aos='zoom-in-up'>
        <div className='absolute top-0 inset-x-0 h-64 flex items-start'>
            <div className='h-24 w-2/3 bg-linear-to-r from-[#0c7fac] blur-2xl invisible opacity-40'> </div>
            <div className='h-20 w-3/4 bg-linear-to-r from-[#289eff] opacity-40 blur-2xl'> </div>
        </div>
        <div className='w-full px-5 sm:px-8 md:px-12 lg:px-8 max-w-5xl lg:max-w-7xl mx-auto relative'>
             <div className='grid lg:grid-cols-2 gap-10 xl:gap-14 relative pt-24 lg:max-w-none max-w-2xl mx-auto'> 
                <div className='lg:py-6'>
                    <div className='text-center lg:text-left'>
                        <h1 className='pt-4 text-white font-bold text-4xl md:text-5xl lg:text-6xl'>
                            Hi dear, I´m {' '} 
                            <span className='text-transparent bg-clip-text bg-linear-to-r from-primary to-cyan-200'>Luís!</span>
                        </h1>
                    </div>
                    <p  data-aos="fade-right" data-aos-offset="400" data-aos-easing="ease-in-sine">lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library in London, took a 1914 Cicero translation and scrambled it to make dummy text for Letraset's Body Type sheets. It has survived not only many decades, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised thanks to these sheets and more recently with desktop publishing software including versions of Lorem Ipsum.</p>
                </div>
             </div>
        </div>
    </section>
  )
}

export default HeroSection

