import React from 'react';

const FashionPurpose: React.FC = () => {
  return (
    <section className="bg-white py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center text-3xl md:text-4xl font-bold mb-12">FASHION WITH A PURPOSE</h2>
        
        <div className="mb-10">
          <p className="text-center text-gray-700 max-w-3xl mx-auto">
            Every year, millions of clothing items are thrown away while people in refugee camps, orphanages, and low-income communities struggle with basic clothing needs. Upworn bridges that gap — reducing waste, reviving wardrobes, and making sustainability stylish.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {/* Card 1 - Textile Waste */}
          <div className="bg-white rounded-lg p-6 text-center flex flex-col items-center">
            <div className="bg-green-100 p-4 rounded-full mb-6">
              {/* Waste SVG Icon */}
              <img src="/public/Waste.svg" alt="Waste Icon" className="h-12 w-12 text-green-700" />
            </div>
            <h3 className="font-bold text-xl mb-3">Textile Waste</h3>
            <p className="text-gray-600">
              We divert thousands of clothing items from landfills each month, giving them new life and purpose in our circular economy.
            </p>
          </div>
          
          {/* Card 2 - Clothes to Communities */}
          <div className="bg-white rounded-lg p-6 text-center flex flex-col items-center">
            <div className="bg-green-100 p-4 rounded-full mb-6">
              <img src="/public/People.svg" alt="People Icon" className="h-12 w-12 text-green-700" />
            </div>
            <h3 className="font-bold text-xl mb-3">Clothes to Communities</h3>
            <p className="text-gray-600">
              Your donations directly benefit those in need - from refugee camps to orphanages, creating impact where it matters most.
            </p>
          </div>
          
          {/* Card 3 - Digital Closet Refresh */}
          <div className="bg-white rounded-lg p-6 text-center flex flex-col items-center">
            <div className="bg-green-100 p-4 rounded-full mb-6">
              <img src="/public/Refresh.svg" alt="Refresh Icon" className="h-12 w-12 text-green-700" />
            </div>
            <h3 className="font-bold text-xl mb-3">Digital Closet Refresh</h3>
            <p className="text-gray-600">
              Our app makes it easy to track your donations, earn points, and shop sustainably - all while making a real difference.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FashionPurpose;