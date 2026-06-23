import React from 'react'
import educ from '../assets/photo-1.jpeg'

const Education = () => {
    const educationData = 
    {
        id: 1, 
        degree: 'Bachelor of Information Systems management',
        institution: 'Institulo Politecnico de Setubal', 
        duration: "2018-2022",
        details:"'The standard chunk of Lorem Ipsum used since 1966 is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.'"
    }
  return (
    <section className='text-white py-20 overflow-hidden' id='edutication'>
        <div className='max-w-7xl mx-auto px-6 lg:px-16 '>
            <div className='mb-16'>
                <p className='text-primary text-sm uppercase tracking-widest mb-2 font-semibold'>
                    Learning Path
                </p>
                <h2 className='text-4xl md:text-5xl font-extrabold text-white'>Education. </h2>
            </div>
            <div className='flex flex-col lg:flex-row items-center gap-16'>
                <div className='w-full lg:w-5/12 flex justify-center lg:justify-start' data-aos='fade-right'>
                    <div className='relative'>
                        <div className='absolute h-full w-full z-0 p-2 translate-x-4 translate-y-4 rounded-2xl shadow-lg border border-cyan-500'></div>
                        <div className='relative z-10 bg-[#111a3e] rounded-2xl overflow-hidden border border-[#1f1641]'>
                           <img src={educ} alt="Education" className='w-64 h-64 md:w-96 md:h-120 object-cover transform transition-transform duration-500 hover:scale-100' />
                           <div className='absolute -top-4 -left-4 bg-primary/20 w-16 h-16 rounded-full blur-2xl'></div>
                        </div>     
                    </div>               
                    <div className='w-full lg:w-7/12 space-y-6' data-aos='fade-left'>
                    {educationData.map((edu) => (
                        <div key={educ.id} className='group relative p-6 rounded-2xl bg-[#111a3e] border border-[#1f1641] transition-all duration-300 hover:border-primary/50'>
                            <div className='flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4 '>
                                <div className='flex items-center gap-3'>
                                    <div className='p-2 bg-[#050816] rounded-lg border border-primary/20 ground-hover:border-primary transition-colors'>
                                        <GradutionCAp className='text-primary'/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                    
                    </div>
                </div>
            </div>
        </div>

    </section>
  )
}

export default Education