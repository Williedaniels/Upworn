import React from 'react';

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
          
          {/* Right side images */}
          <div className="lg:w-1/2 relative">
            {/* Main image - Replace with actual product image */}
            <div className="relative z-10">
              {/* 
                IMPORTANT: Replace with your main hero image (green t-shirt)
                Example: <img src="/images/green-tshirt.png" alt="Green T-shirt" className="w-full h-auto rounded-lg" />
              */}
              <div className="w-full h-64 md:h-80 bg-green-100 rounded-lg flex items-center justify-center">
                <span className="text-green-700 font-medium">Green T-shirt Image</span>
              </div>
            </div>
            
            {/* Floating images - Replace with actual product images */}
            {/* 
              IMPORTANT: Replace all floating image placeholders below with your actual product images
              These images should be positioned around the main image to create a dynamic composition
              Example for each: <img src="/images/blue-jeans.png" alt="Blue Jeans" className="w-full h-full object-cover rounded-lg" />
            */}
            <div className="absolute top-10 -right-4 w-24 h-24 bg-blue-100 rounded-lg shadow-lg flex items-center justify-center">
              <span className="text-xs text-blue-700">Blue Jeans</span>
            </div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gray-100 rounded-lg shadow-lg flex items-center justify-center">
              <span className="text-xs text-gray-700">Tag/Label</span>
            </div>
            <div className="absolute top-1/2 -left-8 w-20 h-20 bg-yellow-100 rounded-lg shadow-lg flex items-center justify-center">
              <span className="text-xs text-yellow-700">Earth</span>
            </div>
            <div className="absolute bottom-10 right-0 w-28 h-28 bg-green-50 rounded-lg shadow-lg flex items-center justify-center">
              <span className="text-xs text-green-700">Plant</span>
            </div>
          </div>
        </div>
        
        {/* Stats section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-50 p-6 rounded-lg flex items-center">
            <div className="bg-green-100 p-3 rounded-full mr-4">
              {/* ADD ICON IMAGE HERE */}
              <div className="w-8 h-8 bg-green-200 rounded-full"></div>
            </div>
            <div>
              <h3 className="font-bold text-xl mb-1">Over 5000 thousand expected donations</h3>
              <div className="flex items-center">
                {/* ADD AVATAR IMAGES HERE */}
                <div className="flex -space-x-2">
                  <div className="w-6 h-6 rounded-full bg-green-300 border-2 border-white"></div>
                  <div className="w-6 h-6 rounded-full bg-green-400 border-2 border-white"></div>
                  <div className="w-6 h-6 rounded-full bg-green-500 border-2 border-white"></div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg flex items-center">
            <div className="bg-green-100 p-3 rounded-full mr-4">
              {/* ADD ICON IMAGE HERE */}
              <div className="w-8 h-8 bg-green-200 rounded-full"></div>
            </div>
            <div>
              <h3 className="font-bold text-xl mb-1">Carbon emissions reductions</h3>
              <div className="flex items-center">
                {/* ADD AVATAR IMAGES HERE */}
                <div className="flex -space-x-2">
                  <div className="w-6 h-6 rounded-full bg-blue-300 border-2 border-white"></div>
                  <div className="w-6 h-6 rounded-full bg-blue-400 border-2 border-white"></div>
                  <div className="w-6 h-6 rounded-full bg-blue-500 border-2 border-white"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
