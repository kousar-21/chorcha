import React from 'react';
import { FaCode, FaPaintBrush, FaCloud, FaRocket, FaLightbulb } from 'react-icons/fa';

const FeaturesSection = () => {
    // Define the key features/services
    const features = [
        {
            icon: FaCode,
            title: "Full-Stack Development",
            description: "From scalable APIs using Node.js to dynamic frontend interfaces with React/Next.js, we build end-to-end applications that are fast, reliable, and maintainable.",
            color: "text-indigo-500",
        },
        {
            icon: FaPaintBrush,
            title: "UX/UI Design & Strategy",
            description: "We don't just write code; we craft intuitive user experiences. Focusing on conversion and accessibility to ensure your product resonates with your audience.",
            color: "text-red-500",
        },
        {
            icon: FaCloud,
            title: "DevOps & Cloud Deployment",
            description: "Leverage the power of AWS, Docker, and CI/CD pipelines to ensure continuous delivery, high availability, and efficient resource scaling for all environments.",
            color: "text-green-500",
        },
        {
            icon: FaLightbulb,
            title: "Technical Consulting",
            description: "Need technical guidance or architecture review? We provide expert insights to solve complex engineering challenges and define clear long-term strategies.",
            color: "text-yellow-500",
        },
    ];

    return (
        <section className="py-20 sm:py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Section Header */}
                <div className="text-center mb-16">
                    <span className="text-base font-semibold text-indigo-600 uppercase tracking-wide">
                        Our Expertise
                    </span>
                    <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                        Solutions Engineered for Growth
                    </h2>
                    <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
                        We transform concepts into robust digital products using modern technology stacks and agile methodologies.
                    </p>
                </div>

                {/* Features Grid */}
                <div className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
                    {features.map((feature, index) => (
                        <div key={index} className="pt-6">
                            <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8 h-full shadow-lg transition-transform duration-300 hover:scale-[1.03] hover:shadow-xl">
                                <div className="-mt-6">
                                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-600 shadow-lg">
                                        <feature.icon className={`h-6 w-6 text-white`} />
                                    </div>
                                    <h3 className="mt-8 text-xl font-bold tracking-tight text-gray-900">
                                        {feature.title}
                                    </h3>
                                    <p className="mt-3 text-base text-gray-500">
                                        {feature.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Optional CTA at the bottom */}
                <div className="mt-16 text-center">
                    <a 
                        href="/portfolio" 
                        className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full shadow-lg text-white bg-indigo-600 hover:bg-indigo-700 transition duration-300"
                    >
                        View Case Studies
                        <FaRocket className="ml-2 h-4 w-4" />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default FeaturesSection;