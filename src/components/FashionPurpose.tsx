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
          {/* Card 1 */}
          <div className="bg-white rounded-lg p-6 text-center flex flex-col items-center">
            <div className="bg-green-100 p-4 rounded-full mb-6">
              {/* ADD ICON IMAGE HERE */}
              <div className="w-12 h-12 bg-green-200 rounded-full flex items-center justify-center">
                <span className="text-green-700">Icon</span>
              </div>
            </div>
            <h3 className="font-bold text-xl mb-3">Textile Waste</h3>
            <p className="text-gray-600">
              Turn textile waste into wealth, giving them new life and purpose in our circular economy.
            </p>
          </div>
          
          {/* Card 2 */}
          <div className="bg-white rounded-lg p-6 text-center flex flex-col items-center">
            <div className="bg-green-100 p-4 rounded-full mb-6">
              {/* ADD ICON IMAGE HERE */}
              <div className="w-12 h-12 bg-green-200 rounded-full flex items-center justify-center">
                <span className="text-green-700">Icon</span>
              </div>
            </div>
            <h3 className="font-bold text-xl mb-3">Textile Reuse</h3>
            <p className="text-gray-600">
              Items benefit much-needed, giving them new life and purpose in our circular economy.
            </p>
          </div>
          
          {/* Card 3 */}
          <div className="bg-white rounded-lg p-6 text-center flex flex-col items-center">
            <div className="bg-green-100 p-4 rounded-full mb-6">
              {/* ADD ICON IMAGE HERE */}
              <div className="w-12 h-12 bg-green-200 rounded-full flex items-center justify-center">
                <span className="text-green-700">Icon</span>
              </div>
            </div>
            <h3 className="font-bold text-xl mb-3">Textile Donate</h3>
            <p className="text-gray-600">
              Your textiles each month, giving them new life and purpose in our circular economy.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FashionPurpose;
