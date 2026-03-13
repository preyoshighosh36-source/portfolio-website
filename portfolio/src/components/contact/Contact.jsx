import React from "react";

export default function Contact(){
    return(
        <section id='contact' className="text-gray-600 body-font bg-gradient-to-b from-white to-blue-50">
            <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
                
                <div data-aos='fade-up' data-aos-delay='300' className="text-center lg:w-2/3 w-full">
                 
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-gray-900">
                        Let’s Connect & Build Something Amazing 🚀
                    </h1>

                    {/* Attractive Professional Paragraph */}
                    <p className="mb-10 leading-relaxed text-gray-600 text-lg">
                        I am actively seeking opportunities where I can contribute as a 
                        <span className="font-semibold text-blue-600"> Full Stack Developer </span> 
                        and grow with a dynamic team.  
                        If you’re looking for a passionate developer skilled in 
                        React, Node.js, Express, and MongoDB — let’s connect!
                    </p>
                    
                    {/* Contact Details */}
                    <div 
                        data-aos='fade-up' 
                        data-aos-delay='500' 
                        className="flex flex-col items-center space-y-5"
                    >

                        {/* Phone */}
                        <div className="bg-white shadow-lg px-6 py-3 rounded-full hover:scale-105 transition duration-300">
                            📞 
                            <span className="ml-2 font-semibold text-gray-800">
                                +91 9641473204
                            </span>
                        </div>

                        {/* Email */}
                        <div className="bg-white shadow-lg px-6 py-3 rounded-full hover:scale-105 transition duration-300">
                            📧 
                            <span className="ml-2 font-semibold text-gray-800">
                                preyoshighosh36@gmail.com
                            </span>
                        </div>

                        {/* LinkedIn */}
                        <a 
                            href="https://www.linkedin.com/in/preyoshi-ghosh" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="bg-blue-600 text-white px-6 py-3 rounded-full shadow-lg hover:bg-blue-700 hover:scale-105 transition duration-300"
                        >
                            🔗 View My LinkedIn Profile
                        </a>

                    </div>

                </div>

            </div>
        </section>
    )
}
