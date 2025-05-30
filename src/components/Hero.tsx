import React from 'react';
import headerImageSrc from '../assets/HeaderImage.png'; // Import the image
import cardImage001 from '../assets/001.png'; // Import 001.png
import cardImage002 from '../assets/002.png'; // Import 002.png

const Hero: React.FC = () => {
  return (
    <section className="bg-white py-12 px-6 md:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Left side content */}
          <div className="lg:w-1/2 mb-8 lg:mb-0 lg:pr-8">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              The Sustainable way to refresh your wardrobe and donate
            </h1>
            <p className="text-gray-600 mb-8">
              Upworn helps you donate your pre-loved clothes to those in need. Simply donate what you don't need, earn points, and shop guilt-free.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#join" className="bg-green-700 text-white px-6 py-3 rounded-full font-medium flex items-center justify-center hover:bg-green-800 transition-colors">
                Join Upworn Now
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#learn" className="border border-gray-300 text-gray-700 px-6 py-3 rounded-full font-medium flex items-center justify-center hover:bg-gray-50 transition-colors">
                Learn More
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
          
          {/* Right side - Header image */}
          <div className="lg:w-1/2 flex justify-center items-center mt-8 lg:mt-0">
              <img
                src={headerImageSrc}
                alt="Upworn App Showcase" // You can update this alt text to be more descriptive
                className="w-full h-auto max-w-md md:max-w-lg rounded-lg"
                // max-w-md (or lg) helps keep the image from becoming too large on wider screens.
                // Added rounded-lg for a softer look, remove if you prefer sharp edges.
                // No shadow by default, similar to your preference for FooterImage.png
              />
            </div>
          </div>
        </div>
        
        {/* Stats section */}
<div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
  {/* Card 001 - Donations */}
  <div className="bg-gray-100 p-8 rounded-3xl relative overflow-hidden">
    {/* Card number */}
    <div className="absolute top-6 left-6 bg-white px-3 py-1 rounded-full text-sm font-medium text-gray-600">
      001
    </div>
    
    {/* Avatar group with plus button */}
    <div className="absolute top-6 right-6 flex items-center">
      <div className="flex -space-x-2 mr-2">
        <img className="w-8 h-8 rounded-full border-2 border-white" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face" alt="Avatar 1" />
        <img className="w-8 h-8 rounded-full border-2 border-white" src="https://images.unsplash.com/photo-1494790108755-2616b332c706?w=32&h=32&fit=crop&crop=face" alt="Avatar 2" />
      </div>
      <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
        <span className="text-white text-lg font-bold">+</span>
      </div>
    </div>

    {/* Main content */}
    <div className="mt-16 flex items-center justify-between">
      <div className="flex-1">
        <h3 className="font-bold text-2xl text-gray-900 leading-tight">
          Over 5000 thousand<br />expected donations
        </h3>
      </div>
      
      {/* Mock bag image */}
      <div className="ml-6 flex-shrink-0">
        <img
          src={cardImage001}
          alt="Donations representation"
          className="w-20 h-20 object-contain" 
        />
          </div>
        </div>
      </div>

      {/* Card 002 - Carbon Emissions */}
      <div className="bg-gray-100 p-8 rounded-3xl relative overflow-hidden">
        {/* Card number */}
        <div className="absolute top-6 left-6 bg-white px-3 py-1 rounded-full text-sm font-medium text-gray-600">
          002
        </div>
        
        {/* Avatar group with plus button */}
        <div className="absolute top-6 right-6 flex items-center">
          <div className="flex -space-x-2 mr-2">
            <img className="w-8 h-8 rounded-full border-2 border-white" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=32&h=32&fit=crop&crop=face" alt="Avatar 1" />
            <img className="w-8 h-8 rounded-full border-2 border-white" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=32&h=32&fit=crop&crop=face" alt="Avatar 2" />
            <img className="w-8 h-8 rounded-full border-2 border-white" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=32&h=32&fit=crop&crop=face" alt="Avatar 3" />
          </div>
          <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
            <span className="text-white text-lg font-bold">+</span>
          </div>
        </div>

        {/* Main content */}
        <div className="mt-16 flex items-center justify-between">
          <div className="flex-1">
            <h3 className="font-bold text-2xl text-gray-900 leading-tight">
              Carbon emmissions<br />reductions
            </h3>
          </div>
          
          {/* Mock recycle arrows image */}
          <div className="ml-6 flex-shrink-0">
            <img
              src={cardImage002}
              alt="Carbon emissions reduction representation"
              className="w-20 h-20 object-contain"
            />
          </div>
        </div>
      </div>
    </div>
    </section>
  );
};

export default Hero;
