import React from 'react';
import { FaCode, FaPaintBrush, FaCloud, FaRocket, FaLightbulb, FaBookOpen, FaArrowRight } from 'react-icons/fa'; // Added FaBookOpen

const FeaturesSection = () => {
    // Define the key features/services
    const features = [
        {
            icon: FaCode,
            title: "Full-Stack Development",
            description: "From scalable APIs using Node.js to dynamic frontend interfaces with React/Next.js, we build end-to-end applications that are fast, reliable, and maintainable.",
            color: "text-indigo-500",
            bgColor: "bg-indigo-100",
        },
        {
            icon: FaPaintBrush,
            title: "UX/UI Design & Strategy",
            description: "We don't just write code; we craft intuitive user experiences. Focusing on conversion and accessibility to ensure your product resonates with your audience.",
            color: "text-rose-500", // Changed to rose for better differentiation
            bgColor: "bg-rose-100",
        },
        {
            icon: FaCloud,
            title: "DevOps & Cloud Deployment",
            description: "Leverage the power of AWS, Docker, and CI/CD pipelines to ensure continuous delivery, high availability, and efficient resource scaling for all environments.",
            color: "text-emerald-500", // Changed to emerald for distinction
            bgColor: "bg-emerald-100",
        },
        {
            icon: FaLightbulb,
            title: "Technical Consulting",
            description: "Need technical guidance or architecture review? We provide expert insights to solve complex engineering challenges and define clear long-term strategies.",
            color: "text-amber-500", // Changed to amber
            bgColor: "bg-amber-100",
        },
    ];

    return (
        // Changed background to subtle gray for separation
        <section className="py-20 sm:py-24 bg-gray-50"> 
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Section Header */}
                <div className="text-center mb-16">
                    <span className="text-base font-semibold text-indigo-600 uppercase tracking-widest">
                        Core Competencies
                    </span>
                    <h2 className="mt-2 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
                        Solutions Engineered for Modern Growth
                    </h2>
                    <p className="mt-4 max-w-3xl mx-auto text-xl text-gray-600">
                        We blend creative strategy with cutting-edge engineering to build products that are scalable, delightful, and deliver measurable results.
                    </p>
                </div>

                {/* Features Grid (Enhanced Cards) */}
                <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
                    {features.map((feature, index) => (
                        <div 
                            key={index} 
                            // Individual card styling with dynamic hover effect
                            className={`group p-8 rounded-xl shadow-lg border border-gray-200 h-full transition-all duration-300 hover:shadow-2xl ${feature.bgColor} hover:border-transparent`}
                        >
                            <div className="flex items-center justify-start">
                                {/* Icon Styling: Uses feature.color */}
                                <div className={`flex items-center justify-center h-14 w-14 rounded-full ${feature.color} bg-white shadow-xl ring-4 ring-white`}>
                                    <feature.icon className="h-7 w-7" />
                                </div>
                            </div>
                            
                            <h3 className="mt-6 text-2xl font-bold tracking-tight text-gray-900">
                                {feature.title}
                            </h3>
                            <p className="mt-3 text-base text-gray-700">
                                {feature.description}
                            </p>
                            
                            {/* Hidden link on hover */}
                            <a 
                                href={`/${feature.title.toLowerCase().replace(/\s+/g, '-')}`} 
                                className={`mt-4 inline-flex items-center text-sm font-semibold transition-colors duration-300 ${feature.color} opacity-0 group-hover:opacity-100`}
                            >
                                Learn More <FaArrowRight className="ml-2 h-3 w-3" />
                            </a>
                        </div>
                    ))}
                </div>

                {/* Stronger, More Direct CTA */}
                <div className="mt-16 text-center">
                    <h3 className="text-2xl font-semibold text-gray-800 mb-6">Ready to see our work in action?</h3>
                    <a 
                        href="/portfolio" 
                        className="inline-flex items-center justify-center px-10 py-4 border-2 border-transparent text-lg font-bold rounded-full shadow-lg text-white bg-indigo-600 hover:bg-indigo-700 transition duration-300 transform hover:scale-105"
                    >
                        <FaBookOpen className="mr-3 h-5 w-5" />
                        View Our Portfolio
                    </a>
                </div>
            </div>
        </section>
    );
};

export default FeaturesSection;