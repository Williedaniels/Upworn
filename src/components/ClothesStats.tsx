import React from 'react';
import boxImage from '../assets/Box.png'; // Assuming Box.png is in src/assets/

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
        
        {/* Image Display Section */}
        <div className="mt-16 flex justify-center">
          <img 
            src={boxImage} 
            alt="Upworn donation statistics and impact" 
            className="max-w-full h-auto md:max-w-2xl lg:max-w-3xl rounded-lg" 
            // You can adjust max-width classes as needed for desired sizing
          />
        </div>

        {/* Added Text Section */}
        <div className="mt-12 text-center">
          <h3 className="inline-block border-2 border-green-700 text-gray-900 text-2xl font-semibold py-3 px-6 rounded-full mb-6">
            We're just getting started.
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We don't just donate, we're building a future where no piece of clothing goes to Waste
          </p>
        </div>

      </div>
    </section>
  );
};

export default ClothesStats;
