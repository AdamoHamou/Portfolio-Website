import React from 'react';

type Project = {
    id: string;
    title: string;
    description: string;
    image: string;
    repo: string;
    tech: string[];
};

const sampleProjects: Project[] = [
    {
        id: 'p1',
        title: 'BlackJackPro',
        description: 'A web-based blackjack simulator with secure login, real-time gameplay, and card counting practice, built with a modern React frontend and a serverless AWS backend.',
        image: '/img3.webp',
        repo: 'http://blackjack-frontend-adam-20250919.s3-website-us-west-1.amazonaws.com/',
        tech: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'JWT', 'AWS', 'SAM', 'Lambda', 'DynamoDB', 'S3'],
    },
    {
        id: 'p2',
        title: 'Gym Member Classification',
        description: 'A machine learning project that applies a neural network to classify gym members’ gender from exercise data. The workflow includes preprocessing, baseline comparison with K-Nearest Neighbors, and dimensionality reduction with PCA for visualization, achieving ~93% accuracy.',
        image: '/NN.png',
        repo: 'https://github.com/AdamoHamou/Gym-Member-Classification-using-Neural-Networks',
        tech: ['Python', 'scikit-learn', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn'],
    },
    {
        id: 'p3',
        title: 'House Price Prediciton',
        description: 'A machine learning project that applies linear regression to predict housing prices. The workflow includes preprocessing, feature selection, model training with cross-validation, and visualization of predicted versus actual values to assess performance.',
        image: '/house-price-prediciton.jpg',
        repo: 'https://github.com/AdamoHamou/Housing-Price-Prediction-using-Linear-Regression',
        tech: ['Python', 'scikit-learn', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn'],
    },
    {
        id: 'p3',
        title: 'Portfolio Website',
        description: 'An interactive, responsive web application built with React and styled with Tailwind CSS for a modern, dynamic user experience.',
        image: '/portfolio.jpg',
        repo: 'https://github.com/AdamoHamou/Portfolio-Website',
        tech: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
    },
];

const Projects: React.FC = () => {
    return (
        <div className="min-h-screen flex flex-col items-center text-white py-12">
            {/* Use the same width wrapper as the footer so the boxes match exactly */}
            <div className="max-w-6xl mx-auto px-4 w-full">
                <h1 className="mb-10"></h1>

                <div className="flex flex-col gap-6 ">
                    {sampleProjects.map((p) => (
                        <article key={p.id} className="overflow-visible backdrop-blur-sm">
                            {/* On mobile: whole card is clickable. On desktop: only the image is clickable. */}
                            <a
                                href={p.repo}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={`Open ${p.title} repository`}
                                className="block md:hidden"
                            >
                                <div className="bg-transparent border border-white/10 rounded-md overflow-visible flex h-fit ">
                                    <div className="flex-1 p-6 flex flex-col justify-center">
                                        <h3 className="text-lg font-semibold">{p.title}</h3>
                                        <p className="text-sm text-gray-300 mt-1">{p.description}</p>
                                        <div className="mt-4">
                                            {p.tech.map((techItem, index) => (
                                                <span
                                                    key={index}
                                                    className="inline-block bg-purple-800 text-purple-200 text-xs font-medium mr-2 mb-2 px-2.5 py-0.5 rounded"
                                                >
                                                    {techItem}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </a>

                            {/* Desktop layout */}
                            <div className="hidden md:flex bg-transparent border border-white/10 md:border-l-0 rounded-md md:rounded-r-md overflow-visible h-56">
                                {/* Image clickable on desktop */}
                                <a
                                    href={p.repo}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={`Open ${p.title} repository`}
                                    className="flex-shrink-0 items-stretch relative overflow-visible rounded-l-md border-l border-white/10"
                                >
                                    <div className="h-full aspect-[4/3] w-auto overflow-visible">
                                        <img
                                            src={p.image}
                                            alt={p.title}
                                            className="w-full h-full object-cover rounded-l-md transform transition-transform duration-300 ease-out origin-center hover:scale-110 hover:z-50"
                                        />
                                    </div>
                                </a>

                                {/* Content area */}
                                <div className="flex-1 p-6 flex flex-col justify-between">
                                    <h3 className="text-lg font-semibold">{p.title}</h3>
                                        <p className="text-sm text-gray-300 mt-1">{p.description}</p>
                                        <div className="mt-4">
                                            {p.tech.map((techItem, index) => (
                                                <span
                                                    key={index}
                                                    className="inline-block bg-purple-800 text-purple-200 text-xs font-medium mr-2 mb-2 px-2.5 py-0.5 rounded"
                                                >
                                                    {techItem}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                        </article>
                    ))}
                    <h1 className="mb-10"></h1>
                </div>
            </div>
        </div>
    );
};

export default Projects;
