import React from 'react'

export default function Experience() {
  return (
    <section id='experience' className='text-gray-600 body-font bg-gray-50'>
      <div className='container px-5 py-24 mx-auto'>
        
        {/* Heading */}
        <div className='flex flex-col text-center w-full mb-16'>
          <h1 className='sm:text-3xl text-3xl font-bold title-font mb-4 text-gray-900'>
            Experience & Professional Growth
          </h1>
          <p className='lg:w-2/3 mx-auto leading-relaxed text-base text-gray-600'>
            Full-Stack Developer with hands-on internship experience and strong
            foundation in modern web technologies.
          </p>
        </div>

        {/* Stats Section */}
        <div className='flex flex-wrap -m-4 text-center'>
          
          {/* Internship */}
          <div className='p-4 md:w-1/4 sm:w-1/2 w-full'>
            <div className='border-2 border-blue-200 px-6 py-8 rounded-xl hover:shadow-lg transition duration-300 bg-white'>
              <h2 className='title-font font-bold text-3xl text-blue-900'>
                6 Months
              </h2>
              <p className='leading-relaxed mt-2'>
                Internship at AICT Pvt. Ltd.
              </p>
            </div>
          </div>

          {/* Academic Level */}
          <div className='p-4 md:w-1/4 sm:w-1/2 w-full'>
            <div className='border-2 border-blue-200 px-6 py-8 rounded-xl hover:shadow-lg transition duration-300 bg-white'>
              <h2 className='title-font font-bold text-3xl text-blue-900'>
                3rd Year
              </h2>
              <p className='leading-relaxed mt-2'>
                B.Tech CSE Student
              </p>
            </div>
          </div>

          {/* Projects */}
          <div className='p-4 md:w-1/4 sm:w-1/2 w-full'>
            <div className='border-2 border-blue-200 px-6 py-8 rounded-xl hover:shadow-lg transition duration-300 bg-white'>
              <h2 className='title-font font-bold text-3xl text-blue-900'>
                4+
              </h2>
              <p className='leading-relaxed mt-2'>
                Completed Projects
              </p>
            </div>
          </div>

          {/* Technologies */}
          <div className='p-4 md:w-1/4 sm:w-1/2 w-full'>
            <div className='border-2 border-blue-200 px-6 py-8 rounded-xl hover:shadow-lg transition duration-300 bg-white'>
              <h2 className='title-font font-bold text-3xl text-blue-900'>
                8+
              </h2>
              <p className='leading-relaxed mt-2'>
                Technologies & Tools
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
