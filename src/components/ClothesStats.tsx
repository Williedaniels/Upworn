import React from 'react';

const ClothesStats: React.FC = () => {
  return (
    <section className="bg-white py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center text-3xl md:text-4xl font-bold mb-12">YOUR CLOTHES MAKE A DIFFERENCE</h2>
        
        <div className="mb-10">
          <p className="text-center text-gray-700 max-w-3xl mx-auto">
            Every year, millions of clothing items are thrown away while people in refugee camps, orphanages, and low-income communities struggle with basic clothing needs. EcoThreads bridges that gap.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 mt-16">
          {/* Donation Box Image - Center */}
          <div className="relative w-64 h-64 flex-shrink-0">
            {/* ADD DONATION BOX IMAGE HERE */}
            <div className="w-full h-full bg-yellow-100 rounded-lg flex items-center justify-center">
              <span className="text-yellow-700 font-medium">Donation Box Image</span>
            </div>
            
            {/* Stats with arrows pointing to the box */}
            <div className="absolute -top-12 -left-12 flex items-center">
              <div className="bg-white p-3 rounded-lg shadow-md">
                <p className="font-bold text-xl">5,000+</p>
                <p className="text-sm text-gray-600">Items donated so far</p>
              </div>
              <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
            
            <div className="absolute -bottom-12 -left-12 flex items-center">
              <div className="bg-white p-3 rounded-lg shadow-md">
                <p className="font-bold text-xl">10,000+</p>
                <p className="text-sm text-gray-600">Sustainable users by businesses</p>
              </div>
              <svg className="w-12 h-12 text-gray-400 transform rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
            
            <div className="absolute -top-12 -right-12 flex items-center">
              <svg className="w-12 h-12 text-gray-400 transform -scale-x-100" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
              <div className="bg-white p-3 rounded-lg shadow-md">
                <p className="font-bold text-xl">500+</p>
                <p className="text-sm text-gray-600">Communities supported</p>
              </div>
            </div>
            
            <div className="absolute -bottom-12 -right-12 flex items-center">
              <svg className="w-12 h-12 text-gray-400 transform -scale-x-100 -rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
              <div className="bg-white p-3 rounded-lg shadow-md">
                <p className="font-bold text-xl">10+</p>
                <p className="text-sm text-gray-600">Organizations supported worldwide</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClothesStats;
